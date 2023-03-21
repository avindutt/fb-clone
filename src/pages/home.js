import PropTypes from 'prop-types';

import styles from '../styles/home.module.css';

export const Home = ({posts}) => {
    console.log(posts)
    return (
    <div className= {styles.postsList}>
        {posts.map((post) => (
            <div className= {styles.postWrapper} key = {`post-${post._id}`}>
            <div className={styles.postHeader}>
            <div className= {styles.postAvatar}>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user-pic"></img>
                <div>
                    <span className={styles.postAuthor}>{post.user.name}</span>
                    <span className={styles.postTime}>a minute ago</span>
                </div>
                </div>
            <div className={styles.postContent}>{post.user.content}</div>

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
            </div>
         </div>
    </div>
    ))}
     </div>
);
};

//this is done in case someone passed a string as props instead of array and in that case
// map function won't work. So doing this will throw an error and we can debug it afterwards. 

Home.propTypes = {
    posts: PropTypes.array.isRequired
}

// export default Home;