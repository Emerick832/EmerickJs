import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <a href="/">.me( )</a>
        <div className={styles.treeitems}>
          <a href="/" className={styles.items}>
            .about( )
          </a>
          <a href="/" className={styles.items}>
            .work( )
          </a>
          <a href="/" className={styles.items}>
            .contact( )
          </a>
          <a href="/" className={styles.items}>
            .experience( )
          </a>
        </div>
      </div>
      <div className={styles.titulo}>WebDeveloper</div>
      <div className={styles.corpo}>
        <div className={styles.social}>
          <a href="https://github.com/Emerick832">
            <img src="/github.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/guilherme-emerick-26945816a/">
            <img src="/Linkedin.svg" alt="" />
          </a>
          <a href="">
            <img src="/facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/paypal.svg" alt="" />
          </a>
        </div>
        <div className={styles.corpoBox}>
          <div>About me</div>
          <div>Avatar</div>
          <div>Details</div>
        </div>
      </div>
    </section>
  );
}
