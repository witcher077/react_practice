const Nodemailer = require("nodemailer");
let dotenv = require("dotenv");
const { reject } = require("lodash");
let path = `${__dirname}/../.env`;
let environmentDetails = dotenv.config({ path }).parsed;

// const mailPort = environmentDetails.MAIL_PORT ;
// const mailSec = environmentDetails.MAIL_SEC;
// const fromEmailId = environmentDetails.FROM_EMAIL;
// const fromEmailPass = environmentDetails.FROM_EMAIL_PASS;

class EmailService {
    sendMail(to,cc, subject, bodyHtml) {

        return new Promise(async (resolve, reject) => {
            try {
                let transporter = Nodemailer.createTransport({
                    host: 'Pc1relay.epsilon.com',
                    // port: 587,  //Non secure Port  
                    port: 25,  //Secure Port
                    ignoreTLS: false,
                    secure: false,  // true for 465, false for other ports
                    auth: {
                        user: `SVC-GLBL-TSREps`,
                        pass: `88WvFcK#"I*!sRMA#`
                    }
                });

                let mailObject= {
                    from: {
                        name: 'Thoughts Foundry_EPS_IN', // Set your alias here
                        address: 'thoughts.foundry@epsilon.com'
                      },
                    to,
                    subject,
                    html: bodyHtml
                }
                // if(cc){
                //     mailObject["cc"]=cc;
                // }
                let info = await transporter.sendMail(mailObject);
                resolve(info);
            } 
            catch (e) {
                reject("Error in sending mail - MAILER(utils)")
            }
        }).catch(err=>{
            reject(err)
        })
    }
}  
module.exports = new EmailService();
