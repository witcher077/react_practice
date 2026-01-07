const Handlebars = require("handlebars");

class Template{
mapTemplate(source, data) {
    return new Promise((resolve, reject) => {
        try {
            let template = Handlebars.compile(source);
            let result = template(data);
            resolve(result);
        } catch (e) {
            reject("Error in mapping email template")
            return;
        }
    });
}
}

module.exports = new Template();

