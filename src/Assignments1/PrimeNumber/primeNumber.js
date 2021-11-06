function isPrime(...params) {

  //Asal Sayılar sadece 1'e ve kendisine bölünebilen sayılardır.

  let count; //Bölen sayısı için

  //Gönderilen elemanları gezecek döngü
  for (let index = 0; index < params.length; index++) {
    count = 0;
    //Dizide gezilecek elemanları bölecek sayılar
    for (let i = 2; i <= params[index]; i++) {
      if (params[index] % i == 0) {
        count++;//Dizide gezilen eleman i'deki değere tam bölünürse sayımız artacak.
      }
    }

    
    if (count == 2) {
        //Asal olabilmesi için kendisine ve 1'e bölünebilmesi gerekiyor. Yani 2 sayıya bölünebilmeli
      console.log("PrimeNumbers: " + params[index]);
    } else if (count > 2) {
        //2 den fazla sayıya bölünebiliyorsa yani kendinden başka sayılarada bölünebiliyorsa asal değildir.
      console.log("NonPrime Numbers: " + params[index]);
    }else if(count === 0){
        console.log("Non Numeric")
    }
  }
}

isPrime(2, 5, 8, 21, 13, 4,999,997,"test",500);
