import { useChallenges } from "../hooks/useChallenges";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <a href="https://github.com/r-vilemen" target="_blank">
        <img
          style={{ width: 100, borderRadius: 50 }}
          src="https://github.com/r-vilemen.png"
          alt="Rodrigo Vilemen"
        />
      </a>
      <div>
        <a href="https://github.com/r-vilemen" target="_blank">
          <strong>Rodrigo Vilemen</strong>
        </a>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível: {level}
        </p>
      </div>
    </div>
  );
}
