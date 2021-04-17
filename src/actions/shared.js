import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import {getInitialData} from '../utils/api'

export default function handleInitialData() {
    return dispatch => {
        return getInitialData()
        .then(({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}