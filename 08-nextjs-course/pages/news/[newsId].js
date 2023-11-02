import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  /**
   * useRouter를 사용하여 동적으로 매개변수 값 추출하기
   */
  const router = useRouter();
  const newsId = router.query.newsId;

  //send a requrest to the backend API
  // to fetch the news item with newsId

  return <h1>Detail Page</h1>;
};

export default DetailPage;
