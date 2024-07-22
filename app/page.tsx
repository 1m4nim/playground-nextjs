import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };

  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "新着情報です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/07/22",
      createdAt: "2024/07/22",
    },
    {
      id: "2",
      title: "新しい菌類がみつかりました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/07/22",
      createdAt: "2024/07/22",
    },
    {
      id: "3",
      title: "test",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/07/22",
      createdAt: "2024/07/22",
    },
  ],
};

export default function Home() {
  const name = "minami";

  return (
    <>
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

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <ul>
          {data.contents.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/biology.webp"
                  alt="蝶"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.data}>
                      <Image
                        src="/clock.png"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
