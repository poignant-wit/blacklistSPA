import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,

    SIGNUP_REQUEST,
    SIGNUP_SEND_CONFIRMATION,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../constants/constants';





export default function (state = {}, action){
    switch (action.type){

        case SIGNIN_REQUEST:
            return action.payload;

        case SIGNIN_SUCCESS:
            return action.payload;

        case SIGNIN_FAILURE:
            return action.payload;

        case SIGNUP_SEND_CONFIRMATION:
            return action.payload;

        case SIGNUP_FAILURE:
            return action.payload;




        default:
            return state;





    }


}