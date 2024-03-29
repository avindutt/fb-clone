import styles from '../styles/settings.module.css';
const user = [];
const UserProfile = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
       
          <div className={styles.fieldValue}>{user?.name}</div>
      </div>

     

      <div className={styles.btnGrp}>
        <button className={`button ${styles.editBtn}`}> Add friend </button>
        <button className={`button ${styles.editBtn}`}> Remove friend </button>
      </div>
    </div>
  );
};

export default UserProfile;