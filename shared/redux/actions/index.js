export function testAction(text){
    console.log(text);

    return {
        type: 'TEST',
        payload:  [{id: 4, title: 'tdcdcdci'}, {id: 4, title: 'tdcdcdci'}]
    }

}