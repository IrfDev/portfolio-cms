module.exports = ({ env }: any) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "portfolio",
          use_filename: true,
          unique_filename: false,
        },
        delete: {},
      },
    },
  },
});
