// Define the structure of a Faculty member for the FromTnPSection component
export interface Faculty {
  name: string;
  designation: string;
  image: string;
  description: string;
}

// Define the structure of a Logo for the WhyKGECSection component
export interface LogoData {
  image: string;
  title: string;
  description: string;
}

// Define the structure of Section data for the WhyKGECSection component
export interface SectionData {
  title: string;
  description: string;
  logos: LogoData[];
}

// Define the structure of a Testimonial for the TestimonialSection component
export interface Testimonial {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}
