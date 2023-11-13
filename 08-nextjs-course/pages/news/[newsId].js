import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  /**
   * useRouter를 사용하여 동적으로 매개변수 값 추출하기
   */
  const router = useRouter();

  /**
   * 동적 경로 세그면트의 구체적인 값에 접근 가능
   * 1. router의 query 객체 사용
   * 2. [newsId].js의 식별자 값으로 불러오기
   */
  const newsId = router.query.newsId;

  //send a requrest to the backend API
  // to fetch the news item with newsId

  return <h1>Detail Page {newsId}</h1>;
};

export default DetailPage;
