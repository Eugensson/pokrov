import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer items-center p-2 bg-neutral/70 text-neutral-content">
      <aside className="items-center grid-flow-col text-xs md:text-sm mx-auto md:mx-0">
        <p>Copyright&copy;2024 - All right reserved by Pokrov.</p>
      </aside>
      <nav className="grid-flow-col md:place-self-center md:justify-self-end mx-auto md:mx-0">
        <Link
          href="https://facebook.com/pokrov.ltd/"
          target="_blank"
          aria-label="Посилання на сторінку Facebook"
          className="btn btn-ghost"
        >
          <FaFacebookF className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Посилання на сторінку Instagram"
          className="btn btn-ghost"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="Посилання на сторінку LinkedinIn"
          className="btn btn-ghost"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
