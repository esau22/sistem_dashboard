import Image from "next/image";
import styles from "./Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.container}>
        <div className={styles.bannerGrid}>
          {/* Left */}
          <div className={`${styles.section} ${styles.sideSection}`}>
            <Image
              src="/banner/banner_1.png"
              alt="Left"
              width={300}
              height={600}
            />
          </div>

          {/* Middle */}
          <div className={`${styles.section} ${styles.middleSection}`}>
            <Image
              className={styles.middleImage}
              src="/banner/banner_2.png"
              alt="Top"
              width={150}
              height={100}
            />

            <div>
              <h3 className={styles.title}>
                ultimate <br />
                <span>sale</span>
              </h3>
              <p className={styles.subtitle}>new collection</p>
              <Link href="/products" className={styles.button}>
                shop now
              </Link>
            </div>

            <Image
              className={styles.middleImage}
              src="/banner/banner_3.png"
              alt="Bottom"
              width={150}
              height={100}
            />
          </div>

          {/* Right */}
          <div className={`${styles.section} ${styles.sideSection}`}>
            <Image
              src="/banner/banner_4.png"
              alt="Right"
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
