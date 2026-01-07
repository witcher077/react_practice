const rm = require('../../services/require.module');
const ideaCommentDao = require('../DAO/ideacomments');
const ideaCommentModel = require("../model/ideaCommentModel");
const ideaDao = require('../DAO/idea');
const notificationService = require('./notification.service')
const userService = require('./user.service')

class IdeaCommentsSevice {
  async createComment(data, id, user) {
    try {
      const schema = {
        'ideaId': 'joi.string().required()',
        'comment': 'joi.string().required()',
        'email': 'joi.string().email().required()',
        'replyTo': 'joi.string()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, { ...data, ...{ ideaId: id, email: user.email } });
      let message;
      if (!schemaValidationResult) {
        let parentmsgId = data["replyTo"];
        let ideaDetail = await ideaDao.getDetail({ "_id": id })
        if (parentmsgId) {
          let parentmsg = await ideaCommentModel.find({ "_id": parentmsgId });
          if (parentmsg.length > 0) {
            let replies = parentmsg[0]["replies"]
            let reply = {
              "_id": replies.length + 1,
              "comment": data["comment"],
              "email": user.email,
              "userName": user.name,
            }

            replies.push(reply)
            let res = await ideaCommentDao.update({ replies }, parentmsgId)
            if (res.data) {
              message= `replied to comment on idea ${ideaDetail.data.title}`
              await userService.createUserHistory(user.email,user.name,message)
              let notifyIdeator = {
                "title": `reply to comment on idea ${ideaDetail.data.title}`,
                "description": `${user.name} replied to a comment on your idea ${ideaDetail.data.title}.`,
                'sender': user.email,
                'receiver': [ideaDetail.data.email],
                'notificationFor': 'user',
                'notificationType':'idea',
                'path': id
              }

              if (!(ideaDetail.data.email.toLowerCase() == user.email.toLowerCase())) {
                await notificationService.createNotification(notifyIdeator)
              }

              let notifyparentmsgr = {
                "title": `reply on your comment on idea ${ideaDetail.data.title}`,
                "description": `${user.name} replied on your comment on idea ${ideaDetail.data.title} `,
                'sender': user.email,
                'receiver': [parentmsg[0].email],
                'notificationFor': 'user',
                'notificationType':'idea',
                'path': id
              }
              console.log(notifyparentmsgr)
              if (!(parentmsg[0].email.toLowerCase() == user.email.toLowerCase())) {
                await notificationService.createNotification(notifyparentmsgr)
              }
            }
            return res
          }
        } else {
          let comment = {
            "ideaId": id,
            "comment": data["comment"],
            "email": user.email,
            "userName": user.name,
            "createdOn":new Date()
          }

          let res = await ideaCommentDao.create(comment)

          if (res.data) {
            let comments = ideaDetail.data["comments"];
            comments.push(res.data.result.toJSON()['_id'].toJSON());
            await ideaDao.update({ comments: comments }, id);
            let notifyIdeator = {
              "title": `comment on idea ${ideaDetail.data.title}`,
              "description": `${user.name} commented on your idea ${ideaDetail.data.title} `,
              'sender': user.email,
              'receiver': [ideaDetail.data.email],
              'notificationFor': 'user',
              'notificationType': 'idea',
              'path': id

            }
            message= `commented on idea ${ideaDetail.data.title}`
              await userService.createUserHistory(user.email,user.name,message)
            if (!(ideaDetail.data.email.toLowerCase() == user.email.toLowerCase())) {
              await notificationService.createNotification(notifyIdeator)
            }
          }
          delete res.data.result;
          return res;
        }
      }
      else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }

    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list(id, user) {
    try {
      const schema = {
        'ideaId': 'joi.string().required()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, { ideaId: id });

      if (!schemaValidationResult) {
        let result = await ideaCommentDao.list({ ideaId: id });
        if (result && result.records) {
          result.records.forEach(ele => {
            ele.isLiked = ele.likes.includes(user.email)
          })
        }
        return result;
      }
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async like(id, userDetail, data) {
    try {
      const schema = {
        'commentId': 'joi.string().required()',
        'email': 'joi.string().email().required()',
        'like': 'joi.boolean().required()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, { commentId: id, email: userDetail.email, ...data });

      if (!schemaValidationResult) {
        let commentDetail = await ideaCommentDao.list({ '_id': id })

        if (commentDetail.records && commentDetail.records[0]) {
          let idea = await ideaDao.getDetail({"_id":commentDetail.records[0]["ideaId"]})
          let userLike = commentDetail.records[0].likes;
          let message = 'Comment has been liked'
          if (data.like) {
            userLike.push(userDetail.email)
          } else {
            let index = userLike.indexOf(userDetail.email);
            if (index !== -1) {
              userLike.splice(index, 1);
              message = 'Comment has been unliked';
            } else {
              return { error: { message: 'user not liked the comment yet' }, status: 404 };
            }
          }

          let updateLike = await ideaCommentDao.update({ likes: userLike }, id);
          if (updateLike.data) {

            if (message == `Comment has been liked`) {
              let notifyparentmsgr = {
                "title": `like on your comment for ${idea.data.title} `,
                "description": `${userDetail.name} liked to your comment. `,
                'sender': userDetail["email"],
                'receiver': [commentDetail.records[0].email],
                'notificationFor': 'user',
                'notificationType': 'idea',
                'path': commentDetail.records[0]["ideaId"]

              }
              let message= `liked to comment on idea ${idea.data.title}`
              await userService.createUserHistory(userDetail.email,userDetail.name,message)
              await notificationService.createNotification(notifyparentmsgr)
            }
            return { data: { message: message } }
          } else {
            return result
          }
        } else {
          return result;
        }
      }
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}


module.exports = new IdeaCommentsSevice();