import styles from "@/styles/kirby.module.css";

const KirbyAnimation = () => {
  return (
    <div className="!fixed top-[17vw] left-[4vw] z-10 h-52 max-lg:hidden">
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
      <div
        className="w-[30vw] h-[10vw] relative top-[1vw]  rounded-[619px]"
        style={{
          background:
            "radial-gradient(44.51% 45.05% at 50% 50%, rgba(25, 25, 25, 0.13) 53.21%, rgba(217, 217, 217, 0.00) 100%)",
        }}
      ></div>
    </div>
  );
};

export default KirbyAnimation;
