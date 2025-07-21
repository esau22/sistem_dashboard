"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "@/components/ui/logo/Logo";
import { usePathname } from "next/navigation";

const links = [
  { name: "Inicio", href: "/" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.actions}>
            <Link href={"/auth"} className={styles.button}>
              Iniciar Sesión
            </Link>
            <button
              className={styles.burger}
              onClick={handleNav}
              aria-expanded={menuOpen}
              aria-controls="navbar-menu"
            >
              <span className={styles.srOnly}>
                {" "}
                {menuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
              </span>

              {menuOpen ? (
                <MdClose className={styles.burgerIcon} />
              ) : (
                <MdMenu className={styles.burgerIcon} />
              )}
            </button>
          </div>

          <div className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
            <ul className={styles.menuList}>
              {links?.map((item) => (
                <Link
                  key={item.href}
                  href={item?.href}
                  className={`${styles.link} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
