import Head from "next/head";
// import About from "./about";
//index.js is index.html actually
const Home = () => {
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
      <div>Welcome to Next.js</div>
      {/* <About /> */}
    </div>
  );
};
export default Home;
