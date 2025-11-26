import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialProps {
  name: string;
  text: string;
  stars: number;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}
