export interface Faculty {
  name: string;
  designation: string;
  image: string;
  description: string;
}

export interface LogoData {
  image: string;
  title: string;
  description: string;
}

export interface SectionData {
  title: string;
  description: string;
  logos: LogoData[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}
