import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.hero-header-field': HeaderHeroHeaderField;
    }
  }
}
