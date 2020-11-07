import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import { getAuthData } from "../actions/authActions";
import Loader from "../components/common/Loader/Loader";
import "../App.css"

const MainContainer = props => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthData())
    }, [dispatch])

    return(
        <>
            {auth.loading && <Loader className="loader" />}
            {!auth.loading && <Main auth={auth} />}
        </>
    )
}

export default MainContainer