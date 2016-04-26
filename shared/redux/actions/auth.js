import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,

    SIGNUP_REQUEST,
    SIGNUP_SEND_CONFIRMATION,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../constants/constants';


import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';
import {reset} from 'redux-form';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';


/*===============ACTION CREATORS FOR SIGNIN===================*/

function signInRequest() {
    return {
        type: SIGNIN_REQUEST,
        payload: {
            isFetching: true,
            isAuthenticated: false
        }
    }
}

function signInSuccess() {
    return {
        type: SIGNIN_SUCCESS,
        payload: {
            isFetching: false,
            isAuthenticated: true
        }
    }
}

function signInFailure() {
    return {
        type: SIGNIN_FAILURE,
        payload: {
            isFetching: false,
            isAuthenticated: false
        }
    }
}

/*--------------SIGNIN API CALL--------------*/

export function signInUser(credentials) {
    return dispatch => {
        dispatch(signInRequest(credentials));
        return fetch(`${baseURL}/api/signin`, {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then((res) => res.json())
            .then(res => {
            localStorage.setItem('token', res.token);
            dispatch(signInSuccess(res.token))
        });

    }
}


/*===============ACTION CREATORS FOR SIGNUP=================*/

function signUpRequest() {
    return {
        type: SIGNUP_REQUEST,
        payload: {
            isFetching: true,
            isRegistered: false
        }
    }
}

function signUpConfirmation(info) {
    return {
        type: SIGNUP_SEND_CONFIRMATION,
        payload: {
            isFetching: false,
            isRegistered: false,
            sendConfirmation: true,
            info
        }
    }
}

function signUpFailure(info) {
    return {
        type: SIGNUP_FAILURE,
        payload: {
            isFetching: false,
            isRegistered: false,
            info
        }
    }
}


export function signUpUser(credentials) {


    return dispatch => {
        dispatch(signUpRequest(credentials));
        return fetch(`${baseURL}/api/signup`, {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => {

                if(!res.ok) return dispatch(signUpFailure());
                return res.json()

            })
            .then(res => {
                console.log(res);
                if (!res.success)  return dispatch(signUpFailure(res.info));
                    return dispatch(signUpConfirmation(res.info));
            });

    }

}



