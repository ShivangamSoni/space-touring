import { StaticImageData } from 'next/image';

interface Crew {
  id: string;
  name: string;
  image: StaticImageData;
  role: string;
  bio: string;
}
