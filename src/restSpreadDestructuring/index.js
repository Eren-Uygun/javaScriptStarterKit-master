//Array tanımlamak
//Dizilerin indeksleri 0'dan başlar.
let products = ["Tenis Topu","Futbol Topu","Basketbol Topu","Masa Tesini Topu"];


//Bu şekilde diziye ulaşabiliriz.
console.log(products);

let products2 = [product,{id:3,name:"raket"},"Ankara",{city:"istanbul"}];

//Veriler bize obje notasyonu ile gelir.(Örn. JSON)
console.log(products2);

//Javascript dünyasında değişkenlere fonksiyon atanabilir.
//rest -> geriye kalanlar demek Aşağıdaki örneğe göre id ve geriye kalan olarakda products
//rest'in -> c#'daki karşığı params
//rest'in -> Java'daki karşığı varArgs
let showProducts = function (id,...products) {
    console.log(id);
    console.log(products);
    //Products undefined geldi, products ile boş bir array geldi.
    //Rest'de gönderilen değerler array olarak döner.
  //  console.log(products[0]) //Dizinin ilk elmanını okuruz.indeks 0'dan başlar.
}
//showProducts(10,"Elma","Armut","Karpuz")
showProducts(10,"Elma","Armut","Karpuz")

//typeof en son aldığını değerin türüne bakarız. Aşağidaki örnekde nesne tipi fonksiyon çıkıyor.
//console.log(typeof showProducts);

showProducts(1,...products);

//...values: number[]): number -> rest istiyor.

console.log(Math.max(1,2,3,5,10,50,100)) //Bu sayılarda en büyüğünü verir.

//console.log(Math.max([1,2,3,5,10,50,100])) //Bu bölüm NaN gönderir.Çünkü sayısal değer değil array tipi gönderdik.

let array =[1,2,3,4,5,6,7,10,27,35,48,57,61,77,92,999,11,21]
console.log(Math.max(...array))

//Spread kelime anlamı ayrıştırmak demektir.

let array1 =[1,2,3,4,5,6,7,10,27,35,48,57,61,77,92,999,11,21]
console.log(...array1)

let points = [1,2,3,4,50,60,21,34,41];
console.log(...points)

//String'ler aslında Char[] dir.Karakter dizileri
console.log("ABC","D","EFG","H");

//Spread operayonu yani ayrıştırma operasyonu yapıyoruz. ...verilen stringler
console.log(..."ABC","D",..."EFG","H") //Çıktısı A B C D E F G H

let testArray = [...["ABC"],..."CBA","H","E"]
console.log(testArray); //Çıktısı (6) ['ABC', 'C', 'B', 'A', 'H', 'E'] olur.

//Destructuring -> Parçalara ayırmak

/*
let populations =[10000,20000,30000] 
//Populations dizisini sırasıyla verilen değişkenlere aktarır.
let[small,medium,large] = populations //Populations'da verilen değer neyse onu parçalar.

//değişkenlerin çıktıları sırasıyla
console.log(small); //10000
console.log(medium); //20000 
console.log(large); //30000
*/

//Bölünmesi gereken veriler olduğunda sadece bölünecek veri'de değil
//atanacak verilerdede destructing yapılır.
let populations1 =[10000,20000,30000,[40000,100000]] 
let[small,medium,large,[veryHigh,maximum]] = populations1

console.log(small); //10000
console.log(medium); //20000 
console.log(large); //30000
console.log(veryHigh);
console.log(maximum);

//Bu örnekde Elma ve armut dışarı çıkar ancak aynı değişkene aktarılır.Bu nesne Destructuring için
//uygun değildir.

//Bölünecek parametreler arasındada  destructuring yapılarak verilerin düzgün şekilde aktarılması sağlanır.

let testArray3 = [["Elma","Armut"],"Pırasa","Domates"]
let[[param1,param4],param2,param3] = testArray3;
console.log(param1);//Elma,Armut
console.log(param2);//Pırasa
console.log(param3);//Domates
console.log(param4)


//Fonksiyonun içinde([]) böyle bir kullanım yapılıyor ise destructing olarak algılıyor
//React useState([]) gibi

function someFunction([small1],number){
    console.log(small1);

}

someFunction(populations1);

//Object destructing

let category = {id:1,name:"Beverage"}
console.log(category.id);
console.log(category["name"]); //Name alanına bu şekilde de erişebiliyoruz.

let {id,name} = category;

console.log(id);
console.log(name); 