import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import {getInitialData} from '../utils/api'
import { setAuthedUser } from './authe_user'
import {showLoading, hideLoading} from 'react-redux-loading'


const AUTHED_ID = "johndoe"
export default function handleInitialData() {
    return dispatch => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}