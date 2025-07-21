import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className={styles.logo}>
        Dashboard
        <span className={styles.underline} />
      </h1>
    </Link>
  );
};

export default Logo;
