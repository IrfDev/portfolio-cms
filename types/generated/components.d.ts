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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    projects: Attribute.Relation<
      'projects.projects',
      'oneToMany',
      'api::project.project'
    > &
      Attribute.Required;
  };
}

export interface LongAboutLongAbout extends Schema.Component {
  collectionName: 'components_long-about';
  info: {
    displayName: 'Long About';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface LayoutLayout extends Schema.Component {
  collectionName: 'components_layout_layouts';
  info: {
    displayName: 'Info site';
    description: '';
  };
  attributes: {
    site_title: Attribute.String & Attribute.Required;
    CV: Attribute.Media<'files'>;
  };
}

export interface HeaderHeroHeaderField extends Schema.Component {
  collectionName: 'components_header_hero_header_fields';
  info: {
    displayName: 'Hero Header field';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    cta_button: Attribute.String & Attribute.Required;
    main_image: Attribute.Media<'images'> & Attribute.Required;
    secondary_image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContactContactMe extends Schema.Component {
  collectionName: 'components_get_in_touch';
  info: {
    displayName: 'Get in touch ';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    brow: Attribute.String & Attribute.Required;
    social_links: Attribute.Relation<
      'contact.contact-me',
      'oneToMany',
      'api::social-link.social-link'
    > &
      Attribute.Required;
  };
}

export interface CompaniesCompanies extends Schema.Component {
  collectionName: 'components_companies';
  info: {
    displayName: 'Companies section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    companies: Attribute.Relation<
      'companies.companies',
      'oneToMany',
      'api::company.company'
    > &
      Attribute.Required;
  };
}

export interface AboutPorgrammingLanguages extends Schema.Component {
  collectionName: 'components_about_porgramming_languages';
  info: {
    displayName: 'Porgramming languages';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    programming_languages: Attribute.Relation<
      'about.porgramming-languages',
      'oneToMany',
      'api::programming-language.programming-language'
    > &
      Attribute.Required;
  };
}

export interface AboutContactMe extends Schema.Component {
  collectionName: 'components_contact_me';
  info: {
    displayName: 'Contact me';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    email_cta: Attribute.Text & Attribute.Required;
  };
}

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    about: Attribute.Text & Attribute.Required;
    brow: Attribute.String & Attribute.Required;
    dev_image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'projects.projects': ProjectsProjects;
      'long-about.long-about': LongAboutLongAbout;
      'layout.layout': LayoutLayout;
      'header.hero-header-field': HeaderHeroHeaderField;
      'contact.contact-me': ContactContactMe;
      'companies.companies': CompaniesCompanies;
      'about.porgramming-languages': AboutPorgrammingLanguages;
      'about.contact-me': AboutContactMe;
      'about.about': AboutAbout;
    }
  }
}
