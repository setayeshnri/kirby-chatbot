import styles from "@/styles/kirby.module.css";

const KirbyAnimation = () => {
  return (
    <div className="relative top-[17vw] left-[4vw] z-10 h-52">
      <div className={styles.body}>
        <div className={styles.face}>
          <div className={styles.eyes}>
            <div className={styles.eyeRight}>
              <div className={styles.eyeBottom} />
            </div>
            <div className={styles.eyeLeft}>
              <div className={styles.eyeBottom} />
            </div>
          </div>

          <div className={styles.cheeks}>
            <div className={styles.cheekLeft} />
            <div className={styles.cheekRight} />
          </div>

          <div className={styles.mouth} />
        </div>
        <div className={styles.armLeft} />
        <div className={styles.armRight} />
        <div className={styles.footLeft} />
        <div className={styles.footRight} />
      </div>
    </div>
  );
};

export default KirbyAnimation;
