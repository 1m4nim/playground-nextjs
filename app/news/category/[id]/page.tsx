import { getCategaryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import { get } from "http";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_components/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  //   const { contents: news } = await getNewsList();

  const category = await getCategaryDetail(params.id).catch(notFound);

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[eruals]${category.id}`,
  });

  //   return <NewsList news={news} />;

  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
    </>
  );
}
