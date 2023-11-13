//our-domain.com/news
import React, { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* 새로고침 없이 렌더링 가능 */}
          <Link href="/news/nextjs-is-a-greate-framework">NextJS Is A Greate Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
