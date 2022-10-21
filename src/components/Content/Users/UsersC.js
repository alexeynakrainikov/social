import styles from "../Users/Users.module.css";
import React from "react";
import {usersAPI} from "../../../api/api";


class UsersC extends React.Component {
    // setUsers = () => {
    //     if (this.props.users.length === 0) {
    //         this.props.setUsers([
    //             {
    //                 id: 1,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Alexey",
    //                 city: "EKB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 2,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Dima",
    //                 city: "EKB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 3,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Petr",
    //                 city: "EKB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 4,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Gena",
    //                 city: "Moscow",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 5,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Misha",
    //                 city: "Moscow",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 6,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Alexey",
    //                 city: "Moscow",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 7,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Vasya",
    //                 city: "SPB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 8,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Oksana",
    //                 city: "SPB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 9,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Sveta",
    //                 city: "SPB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 10,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Masha",
    //                 city: "SPB",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 11,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Alexey",
    //                 city: "Minsk",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //             {
    //                 id: 12,
    //                 ava: "/assets/ava.jpg",
    //                 name: "Petr",
    //                 city: "Minsk",
    //                 status: "was 1 week ago",
    //                 followed: true
    //             },
    //
    //         ])}
    // }

    componentDidMount() {

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    isFollowed = (userID) => {
        this.props.users.map((el) => {
            if (el.id === userID) {
                !el.followed ?
                    usersAPI.follow(userID).then(response => {
                            if(response.data.resultCode === 0) {
                                this.props.isFollowed(userID)
                            }
                        })
                    : usersAPI.unFollow(userID).then(response => {
                            if(response.data.resultCode === 0) {
                                this.props.isFollowed(userID)
                            }
                        })
            }
        })
    }

    setPage = (number) => {
        this.props.setPage(number)
        usersAPI.getUsers(number, this.props.pageSize).then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return <div >
            <div className={styles.pages}>
                {
                    pages.map(el => <span className={this.props.currentPage === el && styles.activePage} onClick={() => this.setPage(el)}>{el}</span>)
                }
            </div>
            {
                this.props.users.map((el) => <div >
                    <div className={styles.user}>
                        <div className={styles.userData}>
                            <span>{el.name}</span>
                            {el.photos.small != null
                                ? <img src={el.photos.small} alt="avatar"/>
                                : <img src="/assets/ava.jpg" alt="avatar"/>}
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.text}>{el.status}</div>
                            {
                                !el.followed? <button className={styles.button + ' ' + styles.followButton} onClick={() => {this.isFollowed(el.id)}}> Добавить в друзья
                                </button> : <button className={styles.button + ' ' + styles.unfollowButton} onClick={() => {this.isFollowed(el.id)}}> Удалить из друзей
                                </button>
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default UsersC