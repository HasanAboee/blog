import styles from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/image/site/DSC02928 copy.jpg"
          alt="this is Hasan picture"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi ,Im Hasan Abouie</h1>
      <p>My blog is about fronEnd</p>
    </section>
  );
}
export default Hero;
