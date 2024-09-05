// Interface automatically generated by schemas-to-ts

import { Media } from '../../common/Media';
import { Media_Plain } from '../../common/Media';

export interface Layout {
  site_title: string;
  CV?: { data: Media };
}
export interface Layout_Plain {
  site_title: string;
  CV?: Media_Plain;
}

export interface Layout_NoRelations {
  site_title: string;
  CV?: number;
}

