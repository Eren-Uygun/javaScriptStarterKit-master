function isPrime(...params){
    
    for (let index = 0; index < params.length; index++) {
        
        if(params[index]%2==0 ){
            console.log("PrimeNumbers : "+params[index])
        }else if(params[index]%2==1){
            console.log("NonPrimeNumbers : "+params[index])
        }else{
            console.log("Girdiğiniz değer sayısal bir değer değil :" + params[index])
        }
        
    }
    
}


isPrime(2,5,8,21,13,4,"test");