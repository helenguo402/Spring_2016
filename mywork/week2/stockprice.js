var stockPrice = 10; //assume dollars

while (stockPrice >= 10){

    stockPrice = confirm("What's ADDA's stock price now?"); //won't work - why? Spend 2 minutes discussing this with your partner

    if (stockPrice < 10){
        alert('Sell!!!');
    }
}

//Answer:
//wrap confirm in parseInt

//on a side note: isNaN(""); //checks if a value is a number or not - why not isNumber?... JavaScript
