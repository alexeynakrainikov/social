import styles from './Forum.module.css'
import Post from "./Post/Post";
import {createRef} from "react";



const Forum = (props) => {
    const ref = createRef()

    const addPost = () => {
        props.addPost()
    }

    let onChangeText = () => {
        let text = ref.current.value
        props.onChangeTextArea(text)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Форум о кактусах и суккулентах</h2>
                <img src="/assets/forumimg.jpg" alt="forumimg"/>
            </div>
            {props.posts.map((el) => {
                return <Post ava={el.ava} name={el.name} text={el.text}/>
            })}

            <div className={styles.input}>
                <textarea onChange={onChangeText} cols="80" rows="5" ref={ref} value={props.newPostText}/>
                <button className={styles.inputButton} type={"submit"} onClick={addPost}>Добавить пост</button>
            </div>

        </div>
    )
}
export default Forum