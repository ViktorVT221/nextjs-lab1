// src/components/Menu/Menu.tsx
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuItem}>Home</div>
      <div className={styles.menuItem}>Articles</div>
      <div className={styles.menuItem}>Profile</div>
    </nav>
  );
}
