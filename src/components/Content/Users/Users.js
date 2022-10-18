import styles from "../Users/Users.module.css";



let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             ava: "/assets/ava.jpg",
    //             name: "Alexey",
    //             city: "EKB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 2,
    //             ava: "/assets/ava.jpg",
    //             name: "Dima",
    //             city: "EKB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 3,
    //             ava: "/assets/ava.jpg",
    //             name: "Petr",
    //             city: "EKB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 4,
    //             ava: "/assets/ava.jpg",
    //             name: "Gena",
    //             city: "Moscow",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 5,
    //             ava: "/assets/ava.jpg",
    //             name: "Misha",
    //             city: "Moscow",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 6,
    //             ava: "/assets/ava.jpg",
    //             name: "Alexey",
    //             city: "Moscow",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 7,
    //             ava: "/assets/ava.jpg",
    //             name: "Vasya",
    //             city: "SPB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 8,
    //             ava: "/assets/ava.jpg",
    //             name: "Oksana",
    //             city: "SPB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 9,
    //             ava: "/assets/ava.jpg",
    //             name: "Sveta",
    //             city: "SPB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 10,
    //             ava: "/assets/ava.jpg",
    //             name: "Masha",
    //             city: "SPB",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 11,
    //             ava: "/assets/ava.jpg",
    //             name: "Alexey",
    //             city: "Minsk",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //         {
    //             id: 12,
    //             ava: "/assets/ava.jpg",
    //             name: "Petr",
    //             city: "Minsk",
    //             status: "was 1 week ago",
    //             followed: true
    //         },
    //
    //     ])}


    const isFollowed = (userID) => {
        props.isFollowed(userID)
    }

    return <div >
        {
            props.users.map((el) => <div >
                <div className={styles.user}>
                    <div className={styles.userData}>
                        <span>{el.name}</span>
                        <img src={el.ava} alt="avatar"/>
                    </div>
                    <div className={styles.textWrapper}>
                        <div className={styles.text}>Город: {el.city}</div>
                        <div className={styles.text}>{el.status}</div>
                        {
                            !el.followed? <button className={styles.button + ' ' + styles.followButton} onClick={() => {isFollowed(el.id)}}> Добавить в друзья
                            </button> : <button className={styles.button + ' ' + styles.unfollowButton} onClick={() => {isFollowed(el.id)}}> Удалить из друзей
                            </button>
                        }
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users