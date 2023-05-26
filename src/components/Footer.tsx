import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed left-0 bottom-0 px-4 py-2 w-[min(300px,94%) bg-primary-violet bg-opacity-60 backdrop-blur-2xl text-primary-blue rounded-tr-full">
      Developed by{' '}
      <Link
        href="https://github.com/ShivangamSoni/"
        className="font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-primary-blue after:h-[2px] after:w-full after:transition-transform after:scale-0 hover:after:scale-100 focus-visible:after:scale-100"
        target="_blank"
      >
        Shivangam Soni
      </Link>
      &nbsp;|&nbsp;
      <Link
        href="https://github.com/ShivangamSoni/space-touring"
        className="font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-primary-blue after:h-[2px] after:w-full after:transition-transform after:scale-0 hover:after:scale-100 focus-visible:after:scale-100"
        target="_blank"
      >
        Source Code
      </Link>
    </footer>
  );
}
