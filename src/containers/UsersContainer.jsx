import React, { Fragment } from "react"
import Users from "../components/Users/Users"
import { follow, unfollow, setUsers, changePage, toggleIsFetching } from "../actions/usersActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import Loader from "../components/common/Loader/Loader";
import s from "../components/Users/Users.module.css"
import { getUsers } from "../controllers/Users/UserController";

const UsersContainer = props => {

    const users = useSelector(state => state.users.users)
    const page = useSelector(state => state.users.page)
    const count = useSelector(state => state.users.count)
    const totalCount = useSelector(state => state.users.totalCount)
    const isFetching = useSelector(state => state.users.isFetching)

    const dispatch = useDispatch();

    const onFollow = useCallback((id) => dispatch(follow(id)), [dispatch])
    const onUnfollow = useCallback((id) => dispatch(unfollow(id)), [dispatch])
    const onPageChange = useCallback((index) => dispatch(changePage(index)), [dispatch])
    const setIsFetching = useCallback(value => dispatch(toggleIsFetching(value)), [dispatch])

    useEffect(() => {
        setIsFetching(true)
        getUsers(page)
        .then(data => {
            dispatch(setUsers(data))
        })
        .catch(error => console.log(error.response))
        .finally(() => {setIsFetching(false)})
    }, [dispatch, setIsFetching, page])

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
            />}
        </Fragment>
    )
}

export default UsersContainer