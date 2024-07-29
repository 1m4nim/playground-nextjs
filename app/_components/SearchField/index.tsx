import Image from "next/image";
import styles from "./inex.module.css";

export default function SearchField() {
  return (
    <form className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.png"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}
