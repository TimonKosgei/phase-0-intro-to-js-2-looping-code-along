function writeCards(a,b){
    let messages  = [];
    for (let i = 0; i < a.length; i++){
        let message = `Thank you, ${a[i]}, for the wonderful ${b} gift!`;
        messages.push(message)
    }
    return messages;
}
function countDown(int){
    while(int > -1){
        console.log(int);
        int--;
    }
}
