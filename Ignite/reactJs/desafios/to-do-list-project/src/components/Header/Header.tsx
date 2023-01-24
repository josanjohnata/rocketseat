import todoLogo from "../../assets/rocket.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Rocket" />
        <h1>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </h1>
      </header>
    </>
  );
}

export default Header;
