import logoImage from "../extensions/admin/logo.svg";
export default {
  config: {
    auth: {
      logo: logoImage,
    },
    head: {
      favicon: logoImage,
    },
    tutorials: false,
    menu: {
      logo: logoImage,
    },
  },
  bootstrap() { },
};
