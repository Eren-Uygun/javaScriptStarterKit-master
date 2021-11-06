/*Arkadaş Sayılar
İki sayı dan birinin kendisi hariç bölenleri toplamı diğer sayıya eşitse bu sayılara
arkadaş sayılar denir. 
Örnek 220 ve 284
220: 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
284: 1 + 2 + 4 + 71 + 142 = 220
*/


function isAmicable(param1,param2) {
    let count = 0;
    for(let i = 1; i<param1;i++){
        if(param1 % i === 0){
            count+=i;
        }
    }
    if(count === param2){
        console.log("Arkadaş Sayılar :" + param1 +" - "+param2)
    }else{
        console.log("Arkadaş Sayılar değildir :" + param1 +" - "+param2)
    }
}

isAmicable(220,284)
isAmicable(1184,1210)
isAmicable(2620,2924)

isAmicable(221,284)

