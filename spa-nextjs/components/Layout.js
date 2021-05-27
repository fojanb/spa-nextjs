import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};
export default Layout;
// This component is a boiler plate for our project 
