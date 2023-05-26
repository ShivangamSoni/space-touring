import { StaticImageData } from 'next/image';

interface Technology {
  id: string;
  name: string;
  images: {
    portrait: StaticImageData;
    landscape: StaticImageData;
  };
  description: string;
}
