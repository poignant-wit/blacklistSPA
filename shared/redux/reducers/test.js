 const initialState = [
        {id: 1, title: 'title1'},
        {id: 2, title: 'title2'},
        {id: 3, title: 'title3'},
        {id: 4, title: 'tdcdcdci'},
    ];






export default function (state = initialState, action){
    switch (action.type){

        case 'TEST':
            return action.payload;
        default:
            return state;





    }


}