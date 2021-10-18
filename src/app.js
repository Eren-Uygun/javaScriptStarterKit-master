console.log("Merhaba");

//Tanımlama yaparken var,let,const gibi keywordlerden yararlanıyoruz.
//Günümüzde let daha kullanılıyor.

/*
var dolarDun = 9.20;
console.log(dolarBugun); //Undefined örneği
var dolarBugun = 9.30;
*/

let dolarDun = 9.20;
let dolarBugun = 9.30;

//Javascript typesafe bir dil değildir. Ne tanımladıysan onla gideceksin.

//Undefined -> tanımlanmamış anlamına gelir. Javascriptde çok karşılaşılan birşeydir. Null ile karıştırılmaması gerekir.

//const constant dan gelir sabit demektir. İlk tanımlanan değer dışında veri alamaz.Sonradan birşey eklenemez.

const euroDun = 11.2;
//euroDun = 11; Bu hatalıdır const değerlere atama sadece ilk hallerindeyken yapılır.



{//Burdaki blog başka bir tanım alanına sahiptir. O yüzden 9.20 görünür, Var ile kullansaydık proje çökecekti.
    let dolarDun = 9.10;
}

console.log(dolarDun);

//Birden fazla veriyi beraber kullanmak için arraylerden(dizilerden) yararlanıyoruz.
//Metinsel değerler çift yada tek tırnak arasında yazılır.

//isimlerme önemli bir konudur.
//isimlendirirken camelCasing kullanılır.Kelimelerin ilk harfi küçük olur.
//Pascal Casing'de ise kelimelerin ilk harfi büyük olur.
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]


//konutKredileri dizisini verir.
console.log(konutKredileri);

//Döngü nedir? : Elindeki bir veriyi dolaşmaya yarıyor. Bir dizinin elemanlarını gezer.

//Burdaki i index'i sembolize eder.Community bu şekilde kullanıyor.
//Programlama dillerinin çoğu saymaya 0'dan başlar.
for(let i=0;i<konutKredileri.length;i++){

   // console.log(konutKredileri[i]); dizideki elemanlara erişir.
    console.log("<li>"+i+"</li>");
}






