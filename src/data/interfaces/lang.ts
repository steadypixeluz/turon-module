export interface Lang {
  ru: string;
  en: string;
  uz: string;
  zh: string,
}

export const LangObj = {
  ru: '',
  uz: '',
  en: '',
  zh: '',
};

export interface PhoneAndEmail {
  position?: number;
  value?: string;
  is_active?: boolean;
  title?: Lang;
}
export interface Social {
  position?: number;
  value?: string;
  icon?: string;
  title?: string;
}
export class User {
  position?: number;
  value?: string;
  is_active?: boolean;
  title?: Lang;
}

export interface Address {
  position?: number;
  value?: string;
  is_active?: boolean;
  title?: Lang;
  point?: string;
}
export interface Work {
  position?: number;
  value?: Lang;
  title?: Lang;
}
