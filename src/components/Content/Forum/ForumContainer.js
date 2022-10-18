import {addPostActionCreator, addTextActionCreator} from "../../../redux/postsReducer";
import Forum from "./Forum";
import {connect} from "react-redux";

//
// const ForumContainer = (props) => {
//
//     const addPost = () => {
//         props.dispatch(addPostActionCreator())
//     }
//
//     const onChangeTextArea = (text) => {
//         props.dispatch(addTextActionCreator(text))
//     }
//
//     return (
//         <Forum posts={props.posts}
//                newPostText={props.newPostText}
//                addPost={addPost}
//                onChangeTextArea={onChangeTextArea}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.forum.posts,
        newPostText: state.forum.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangeTextArea: (text) => {
            debugger
            dispatch(addTextActionCreator(text))
        }
    }
}

const ForumContainer = connect(mapStateToProps, mapDispatchToProps)(Forum)

export default ForumContainer