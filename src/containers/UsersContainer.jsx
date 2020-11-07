import React, { Fragment } from "react"
import Users from "../components/Users/Users"
import { changePage, getUsers, followUser, unfollowUser } from "../actions/usersActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import Loader from "../components/common/Loader/Loader";
import s from "../components/Users/Users.module.css"

const UsersContainer = props => {

    const users = useSelector(state => state.users.users)
    const page = useSelector(state => state.users.page)
    const count = useSelector(state => state.users.count)
    const totalCount = useSelector(state => state.users.totalCount)
    const isFetching = useSelector(state => state.users.isFetching)
    const loadingFollow = useSelector(state => state.users.loadingFollow)
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const onFollow = useCallback((id) => dispatch(followUser(id)), [dispatch])
    const onUnfollow = useCallback((id) => dispatch(unfollowUser(id)), [dispatch])
    const onPageChange = useCallback((index) => dispatch(changePage(index)), [dispatch])

    useEffect(() => {
        dispatch(getUsers(page))
    }, [dispatch, page])

    return(
        <Fragment>
            {isFetching && <Loader className={s.loader} />}
            {!isFetching && <Users
                users={users}
                follow={onFollow}
                unfollow={onUnfollow}
                page={page}
                count={count}
                totalCount={totalCount}
                onPageChange={onPageChange}
                loadingFollow={loadingFollow}
                auth={auth}
            />}
        </Fragment>
    )
}

export default UsersContainer