import common from "./common.json";
import nav from "./nav.json";
import footer from "./footer.json";
import home from "./home.json";
import about from "./about.json";
import contact from "./contact.json";
import founder from "./founder.json";
import products from "./products.json";
import sellerresponder from "./sellerresponder.json";
import services from "./services.json";
import metadata from "./metadata.json";
import dataProducts from "./data/products.json";
import dataServices from "./data/services.json";
import dataFeatures from "./data/features.json";
import dataProcess from "./data/process.json";
import dataTechnologies from "./data/technologies.json";

const messages = {
  common,
  nav,
  footer,
  home,
  about,
  contact,
  founder,
  products,
  sellerresponder,
  services,
  metadata,
  data: {
    products: dataProducts,
    services: dataServices,
    features: dataFeatures,
    process: dataProcess,
    technologies: dataTechnologies,
  },
};

export default messages;
