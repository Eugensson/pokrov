import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Social = () => {
  return (
    <ul className="flex gap-5">
      <li>
        <Link
          href="https://facebook.com/pokrov.ltd/"
          target="_blank"
          aria-label="Посилання на сторінку у Facebook"
          className="flex justify-center items-center p-2 border-2 rounded-md border-gray-500 hover:border-primary hover:text-primary"
        >
          <FaFacebookF className="w-5 h-5" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Посилання на сторінку у Instagram"
          className="flex justify-center items-center p-2 border-2 rounded-md border-gray-500 hover:border-primary hover:text-primary"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="Посилання на сторінку у LinkedinIn"
          className="flex justify-center items-center p-2 border-2 rounded-md border-gray-500 hover:border-primary hover:text-primary"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </Link>
      </li>
    </ul>
  );
};

export default Social;
