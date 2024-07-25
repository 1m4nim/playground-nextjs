import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/member1.png",
        width: 240,
        height: 240,
      },
      name: "にこにこ",
      position: "CEO",
      profile: "いつもにこにこしていて優しい",
    },
    {
      id: "2",
      image: {
        url: "/member2.png",
        width: 240,
        height: 240,
      },
      name: "はいから",
      position: "COO",
      profile: "いつもおしゃれで、時代を先駆けていく",
    },
    {
      id: "3",
      image: {
        url: "/member3.png",
        width: 240,
        height: 240,
      },
      name: "スミス・テリー",
      position: "CTO",
      profile: "「常に思考」がモットーの仕事のできる超人",
    },
  ],
};

export default function Page() {
  return (
    // <div style={{ margin: 20 }}>
    //   <h1>メンバーページ</h1>
    // </div>

    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((members) => (
            <li key={members.id} className={styles.list}>
              <Image
                src={members.image.url}
                alt=""
                width={members.image.width}
                height={members.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{members.name}</dt>
                <dd className={styles.position}>{members.position}</dd>
                <dd className={styles.profile}>{members.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
