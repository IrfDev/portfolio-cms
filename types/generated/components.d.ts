import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects';
  info: {
    displayName: 'Projects section';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Subtitle: Attribute.String & Attribute.Required;
    projects: Attribute.Relation<
      'projects.projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface LongAboutLongAbout extends Schema.Component {
  collectionName: 'components_long-about';
  info: {
    displayName: 'Long About';
  };
  attributes: {
    Title: Attribute.String;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface HeaderHeroHeaderField extends Schema.Component {
  collectionName: 'components_header_hero_header_fields';
  info: {
    displayName: 'Hero Header field';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Cta_Button: Attribute.String;
    main_image: Attribute.Media<'images'>;
    secondary_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContactContactMe extends Schema.Component {
  collectionName: 'components_contact_me_footer';
  info: {
    displayName: 'Contact me';
  };
  attributes: {
    Title: Attribute.String;
    brow: Attribute.Text;
    social_links: Attribute.Relation<
      'contact.contact-me',
      'oneToMany',
      'api::social-link.social-link'
    >;
  };
}

export interface CompaniesCompanies extends Schema.Component {
  collectionName: 'components_companies';
  info: {
    displayName: 'Companies section';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    companies: Attribute.Relation<
      'companies.companies',
      'oneToMany',
      'api::company.company'
    >;
  };
}

export interface AboutPorgrammingLanguages extends Schema.Component {
  collectionName: 'components_about_porgramming_languages';
  info: {
    displayName: 'Porgramming languages';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    programming_languages: Attribute.Relation<
      'about.porgramming-languages',
      'oneToMany',
      'api::programming-language.programming-language'
    >;
  };
}

export interface AboutContactMe extends Schema.Component {
  collectionName: 'components_contact_me';
  info: {
    displayName: 'Contact me';
  };
  attributes: {
    Title: Attribute.String;
    Email_cta: Attribute.Text;
  };
}

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Title: Attribute.String;
    About: Attribute.Text;
    Brow: Attribute.String;
    dev_image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'projects.projects': ProjectsProjects;
      'long-about.long-about': LongAboutLongAbout;
      'header.hero-header-field': HeaderHeroHeaderField;
      'contact.contact-me': ContactContactMe;
      'companies.companies': CompaniesCompanies;
      'about.porgramming-languages': AboutPorgrammingLanguages;
      'about.contact-me': AboutContactMe;
      'about.about': AboutAbout;
    }
  }
}
