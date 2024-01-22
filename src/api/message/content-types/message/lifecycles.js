module.exports = {
    
  async  afterCreate(event) {

    const { result } = event;

    try {
        await strapi.plugins['email'].services.email.send({
                to:'contact@nordwebduo.com',
                from:'contact@nordwebduo.com',
                subject:result.subject,
                text:'Name: ' + result.name + '\nEmail: ' + result.email + '\nMessage: ' + result.message,
            })
        } catch (err) {
            console.log(err);
        }
    }}