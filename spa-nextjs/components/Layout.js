import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
// This component is a 'boiler plate' for our project. 
//It will wrap around all of our components.
