module.exports = ({ env }) => ({
   
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          blog: {
            field: 'slug',
            references: 'Title',
          },
          portfolio: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },

    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'contact@nordwebduo.com',
          defaultReplyTo: 'contact@nordwebduo.com',
        },
      },
    },
    seo: {
      enabled: true,
    },
    
  });