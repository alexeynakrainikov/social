import postsReducer from "./postsReducer";

let store = {
    _state: {
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
    },
    getState () {
      return this._state
    },
    _reRender () {

    },
    subscribe (observer) {
        this._reRender = observer
    },

    dispatch (action) {
        this._state =  postsReducer(this._state, action)
        this._reRender (this._state)
    }
}

export default store