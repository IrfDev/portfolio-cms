// Interface automatically generated by schemas-to-ts

import { ProgrammingLanguage } from '../../api/programming-language';
import { ProgrammingLanguage_Plain } from '../../api/programming-language';

export interface PorgrammingLanguages {
  title: string;
  programming_languages: { data: ProgrammingLanguage[] };
}
export interface PorgrammingLanguages_Plain {
  title: string;
  programming_languages: ProgrammingLanguage_Plain[];
}

export interface PorgrammingLanguages_NoRelations {
  title: string;
  programming_languages: number[];
}

