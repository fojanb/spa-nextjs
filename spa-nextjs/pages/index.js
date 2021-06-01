import Head from "next/head";
import Data from "../components/Data";
import headerStyles from "../styles/Header.module.css";
// import About from "./about";
//index.js is index.html actually
const Home = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>spa-nextjs</title>
        <meta
          charset="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className={headerStyles.description}>
        <span>Welcome to Next.js</span>
      </div>
      <Data entities={data} />
      {/* {data.map(d => <h3>{d.title}</h3>)} */}
      {/* <About /> */}
    </div>
  );
};
export default Home;
// How to fetch data from a API in next.js ?
// There are three ways to fetch data from API :
// 1.getStaticProps() -> will fetch data in build time (npm next build) -> (Faster Approach)
// 2.getServerSideProps() -> will fetch data in each request->(Slower Approach)
// 3.getStaticPaths() -> For dynamic routing
// Always put these functions abov or below the component

export const getStaticProps = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const data = await response.json();
  // getStaticProps will return an object as below :
  return {
    props: {
      data,
    },
  };
};
