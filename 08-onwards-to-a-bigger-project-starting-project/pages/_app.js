import "../styles/globals.css";
import Layout from "../components/layout/Layout";

/**
 * Component : 렌더링 될 실제 페이지 콘텐츠 저장
 * pageProps : 페이지가 받는 특수 프로퍼티
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
