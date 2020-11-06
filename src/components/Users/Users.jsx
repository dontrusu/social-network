import React from "react"
import User from "./User/User"
import s from "./Users.module.css"
import Pagination from "./Pagination/Pagination"

const Users = props => {

    const { users, follow, unfollow, count, page, totalCount, onPageChange } = props

    return(
        <div className={s.users}>
            {users.map(user => (
                <User
                    key={user.id}
                    data={user}
                    follow={follow}
                    unfollow={unfollow}
                />
            ))}
            <Pagination 
                count={count} 
                page={page} 
                totalCount={totalCount} 
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default Users