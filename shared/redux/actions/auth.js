import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE  } from '../constants/constants';


function signInRequest(){

    console.log('SIGNINREQ');
    return {
        type: SIGNIN_REQUEST,
        payload:{
            isFetching: true,
            isAuthenticated: false

        }
    }

}



export default function signInUser(){

    console.log('SIGNINUSER');
    return dispatch => {
        dispatch(signInRequest())
    }

}



