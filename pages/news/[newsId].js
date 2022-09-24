import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  // console.log(router);
  // console.log(router.query);
  console.log(router.query.newsId);

  return <h1>The Details Page</h1>;
};

export default DetailsPage;
