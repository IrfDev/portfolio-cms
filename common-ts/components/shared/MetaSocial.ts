// Interface automatically generated by schemas-to-ts

import { Media } from '../../common/Media';
import { Media_Plain } from '../../common/Media';

export enum SocialNetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',}

export interface MetaSocial {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: { data: Media };
}
export interface MetaSocial_Plain {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: Media_Plain;
}

export interface MetaSocial_NoRelations {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: number;
}
