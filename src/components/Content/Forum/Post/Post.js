import styles from './Post.module.css'

const Post = ({ava, name, text}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postHeader}>{new Date().toLocaleString()}</div>
            <div className={styles.post}>
                <div className={styles.userData}>
                    <span>{name}</span>
                    <img src={ava} alt="avatar"/>
                </div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    )
}
export default Post