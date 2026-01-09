import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../lib/constants";

const Footer = () => {
  return (
    <footer
      id="bottom-gradient"
      className="container mx-auto py-6 px-3 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={186} height={48} />
      </Link>
      <p className="text-sm text-center md:absolute left-1/2 md:-translate-x-1/2">
        © 2025 Todos los derechos reservados.
      </p>
      <div className="flex items-center gap-3">
        {footerLinks.map(({ icon, href }, index) => (
          <a
            className="hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={index} width={24} height={24} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
