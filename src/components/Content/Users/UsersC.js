import styles from "../Users/Users.module.css";
import React from "react";


class UsersC extends React.Component {

    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    isFollowed = (userID) => {
        this.props.users.map((el) => {
            if (el.id === userID) {
                !el.followed ? this.props.follow(userID) : this.props.unFollow(userID)
            }
        })
    }

    setPage = (number) => {
        this.props.setPage(number)
        this.props.getUsers(number, this.props.pageSize)
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