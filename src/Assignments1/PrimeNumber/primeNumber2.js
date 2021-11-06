function isPrimeNumber() {
    //Asal Sayılar sadece 1'e ve kendisine bölünebilen sayılardır.

    // ilk döngümüz 1000'e kadar gidecek elemanlarımız için oluşuturulan döngü
    for(let i = 2;i<=1000;i++){
        let sayac = 0;//Bölen sayımızı tutacak değişken
        for(let j=1;j<=i;j++){//1000'e kadar gidecek sayılarımızı bölecek döngü
            if(i%j===0){
                sayac++;
            }
        }
        if(sayac===2){
              //Asal olabilmesi için kendisine ve 1'e bölünebilmesi gerekiyor. Yani 2 sayıya bölünebilmeli
            console.log("Asal Sayı: "+i);
        }else{
               //2 den fazla sayıya bölünebiliyorsa yani kendinden başka sayılarada bölünebiliyorsa asal değildir.
            console.log("Asal Olmayan Sayı: "+i)
        }
    }
    
}

isPrimeNumber();