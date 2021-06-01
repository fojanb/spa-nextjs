import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
// My source ---> Vercel Docs
// Next.js Agenda :
// 1-Getting setup with create-react-app
// 2-Files and Folders
// 3-Pages and Routing
// 4-Head
// 5-Layouts and CSS modules
// 6-Nav Component and Link
// 7-Create a Header
// 8-Styled JSX (Inline Styling)
// 9-Custom Document
// 10-Data Fetching
// 11-getStaticProps() ----> Static Generation Mode (Fast) (Default mode in Next.js)
// 12-Showing Data
// 13-Nested Routing
// 14-getServerSideProps() ----> Server Side Rendering Mode (Slow)
// Or instead of (14) I can use (11)+(15) together.
// 15-getstaticPaths() ----> Dynamic path
// 16-Export a Static Website
// 17-API Routes
// 18-Using the API Data
// 19-Custom Meta Component
// 20-Routing (Hard coded and dynamic) --> next/link (Client Side Navigation)
//                                     --> next/router (API routing)
// I have already know that *Why* Next.js is useful and *How* to use it
