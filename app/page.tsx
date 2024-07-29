import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_components/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
// import { News } from "@/app/_libs/microcms";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;a
//   };

//   publishedAt: string;
//   createdAt: string;
// };

// const data: {
//   contents: News[];
// } = {
//   contents: [
//     {
//       id: "1",
//       title: "新着情報です",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2024/07/22",
//       createdAt: "2024/07/22",
//     },
//     {
//       id: "2",
//       title: "新しい菌類がみつかりました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2024/07/22",
//       createdAt: "2024/07/22",
//     },
//     {
//       id: "3",
//       title: "test",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2024/07/22",
//       createdAt: "2024/07/22",
//     },
//   ],
// };

export default async function Home() {
  // const sliceData = data.contents.slice(0, 2);
  const name = "1m4nim";

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>はじめてのNext.js</h1>
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
        <NewsList news={data.contents} />

        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
