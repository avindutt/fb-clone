import styles from '../styles/home.module.css';

export const Home = () => {
    return(
<div className= {styles.postsList}>
<div className= {styles.postWrapper}>
<div className={styles.postHeader}>
<div className= {styles.postAvatar}>
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user-pic"></img>
    <div>
     <span className={styles.postAuthor}>Avin</span>
     <span className={styles.postTime}>a minute ago</span>
     </div>
     </div>
     <div className={styles.postContent}>Post content</div>

     <div className={styles.postActions}>
        <div className={styles.postLike}>
            <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="likes-icon"></img>
            <span>5</span>
        </div>

        <div className={styles.postCommentsIcon}>
            <img src="https://cdn-icons-png.flaticon.com/512/5910/5910103.png" alt="comments-icon"></img>
            <span>2</span>
        </div>
     </div>
     <div className={styles.postCommentBox}>
        <input placeholder="Start typing a comment"></input>
     </div>

     <div className={styles.postCommentsList}>
     <div className={styles.postCommentsItem}>
     <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>Bill</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>22</span>
     </div>

     <div className={styles.postCommentContent}>Random comment</div>
     </div>
     </div>
     </div>
     </div>
     </div>
);
};

// export default Home;