import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const name = "minami";

  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>頑張ろう！！！</h1>
        <p className={styles.description}>{name}は知識人になりたい</p>
      </div>

      <Image
        className={styles.bgimg}
        src="/fungi.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
      />
    </section>
  );
}
