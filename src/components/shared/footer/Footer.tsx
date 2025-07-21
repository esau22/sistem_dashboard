import Logo from "@/components/ui/logo/Logo";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export const footerData = {
  menus: [
    {
      title: "Pagedone",
      links: ["Home", "About", "Pricing"],
    },
    {
      title: "Products",
      links: ["Figma UI", "Icons", "Blocks"],
    },
    {
      title: "Support",
      links: ["Soporte", "Términos", "Privacidad"],
    },
  ],
  socialIcons: [
    { icon: FaFacebook, name: "Facebook", link: "#" },
    { icon: FaInstagram, name: "Instagram", link: "#" },
    { icon: FaLinkedin, name: "LinkedIn", link: "#" },
    { icon: FaWhatsapp, name: "Whatsapp", link: "#" },
    { icon: FaTiktok, name: "Tiktok", link: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo y descripción */}
          <div className={styles.logoSection}>
            <Logo />
            <p className={styles.description}>
              Trusted in more than 100 countries & 5 million customers. Have any
              query?
            </p>
            <button className={styles.contactButton}>Contact</button>
          </div>

          {footerData?.menus.map((item, index) => (
            <div className={styles.menu} key={index}>
              <h4 className={styles.menuTitle}>{item?.title}</h4>
              <ul className={styles.menuList}>
                {item.links.map((link, i) => (
                  <Link key={i} href={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))}

          {/* Suscripción */}
          <div className={styles.subscribe}>
            <h4 className={styles.menuTitle}>Subscribe</h4>
            <p className={styles.description}>
              Receive updates, deals, tutorials & more
            </p>
            <button className={styles.subscribeButton}>Subscribe →</button>
          </div>
        </div>

        {/* Footer inferior */}
        <div className={styles.bottom}>
          <span>
            {new Date().getFullYear()} All rights reserved | Build with ❤ by
          </span>
          <div className={styles.socials}>
            {footerData.socialIcons.map((icon) => (
              <Link key={icon.name} href={icon.link}>
                <icon.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
