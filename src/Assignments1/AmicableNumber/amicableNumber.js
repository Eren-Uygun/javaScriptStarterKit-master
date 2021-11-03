function findAmicableSummary(params) {
let sum = 1;
    for (let index = 2; index < params; index++) {

        if(params%index==0){
            sum+=index;
        }
      
    }

    return sum;
    
}

/*Arkadaş Sayılar
İki sayı, birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara
arkadaş sayılar denir. Örnek 220 ve 284
220: 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
284: 1 + 2 + 4 + 71 + 142 = 220
*/


function isAmicable(param1,param2) {

    if(findAmicableSummary(param1) == param2 && findAmicableSummary(param2)==param1){
        console.log(param1+" ve "+param2+" Arkadaş Sayı")
    }else{
        console.log(param1+" ve "+param2+" Arkadaş Sayı Değil")
    }


    
}

isAmicable(220,284)