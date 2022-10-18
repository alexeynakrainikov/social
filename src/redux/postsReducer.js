
let initialState = {
    posts: [
        {
            ava: "/assets/ava.jpg",
            name: "alexey",
            text: "здесь должен быть текст сообщения"
        },
        {
            ava: "/assets/ava.jpg",
            name: "dima",
            text: "здесь когда то будет текст сообщения"
        },
        {
            ava: "/assets/ava.jpg",
            name: "misha",
            text: "здесь был текст сообщения"
        }
    ],
    newPostText: "WTF?"
}

const postsReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {
                    ava: "/assets/ava.jpg",
                    name: "misha",
                    text: state.newPostText
                }],
                newPostText: ''
            };
        }
        case 'ADD-TEXT-SYMBOL': {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export const addTextActionCreator = (text) => {
    return {type: 'ADD-TEXT-SYMBOL',
            text: text}
}

export default postsReducer