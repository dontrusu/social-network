import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import { setUserData } from "../actions/authActions";
import { getAuth } from "../controllers/MainController/MainController";

const MainContainer = props => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        getAuth()
        .then(data => {
            dispatch(setUserData(data.data))
        })
        .catch(error => console.log(error.response))
        .finally(() => {})
    }, [dispatch])

    return(
        <Main auth={auth} />
    )
}

export default MainContainer