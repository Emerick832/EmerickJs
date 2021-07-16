import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <a href="/">.me( )</a>
        <div className={styles.treeitems}>
        <a href="/" className={styles.items}>.about( )</a>
        <a href="/" className={styles.items}>.work( )</a>
        <a href="/" className={styles.items}>.contact( )</a>
        <a href="/" className={styles.items}>.experience( )</a>
      </div>
      </div>      
    </section>
  );
}
