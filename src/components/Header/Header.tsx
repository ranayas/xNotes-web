import Wrapper from '../Wrapper/Wrapper';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Wrapper>
        <a href="#top" className={styles.header__logo}>
          xNotes
        </a>
      </Wrapper>
    </div>
  );
};

export default Header;
