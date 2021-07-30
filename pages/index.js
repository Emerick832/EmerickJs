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
          <div className={styles.corpoItens}>
            <h1 className={styles.corpoTitle}>About Me</h1>
            <h3 className={styles.corpoText}>
              I am a FrontEnd developer, graduated at Brazil wich have 2 yeard
              experience. I have a passion with my job and i love to learn new
              technologys and everything about IT area.
            </h3>
          </div>

          <div className={styles.corpoItens}>
            <img src="/me.jpg" alt="" className={styles.me} />
          </div>
          <div className={styles.corpoItens}>
            <h1 className={styles.corpoTitle}>Details</h1>
            <h3 className={styles.corpoText}>
              <h5 className={styles.corpoText}>
                Name: Guilherme Emerick<br></br>
                Age: 24<br></br>
                Location: Brasília, Brazil<br></br>
              </h5>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
