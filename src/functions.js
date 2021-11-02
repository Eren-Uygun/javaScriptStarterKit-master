
// function addToCart(productName) {
//     console.log("Sepete Eklendi"+productName);
// }

// // addToCart("Parfüm");
// // addToCart("Elma");
// // addToCart("Karpuz");
// // addToCart();

// //Undefined => javascript'de tanımlanmamış değerdir.Bellek'de bir değer içermez. Null'dan farklıdır.
// //Null bellekde oluşturulmuş adresi olan bir nesnedir ancak içi boştur.


// //Aşağıdaki fonksiyonda fonksiyonda gönderdiğimiz değer default bir değer alır.
// //Boş gönderilirse default değer gider.

// // function addToCart(productName="Kiraz") {
// //     console.log("Sepete Eklendi "+productName);

// // }

// // addToCart("Parfüm");
// // addToCart("Elma");
// // addToCart("Karpuz");
// // addToCart();

// // function addToCart(productName="Kiraz",quantity) {
// //     console.log("Sepete Eklendi. "+"Ürün Adı :"+productName + " adet : "+quantity);

// // }


// function addToCart(quantity,productName="Kiraz") {
//     console.log("Sepete Eklendi. "+"Ürün Adı :"+productName + " adet : "+quantity);

// }

// // addToCart("Parfüm");
// // addToCart("Elma");
// // addToCart("Karpuz");
// // addToCart();
// addToCart(10);

// //addToCart("Limon");

// //Fonksiyonlardaki parametreler sırasıyla yerleştir.
// //Fonksiyonlarda mantık hatalarını önlemek amacıyla default değerler sona yazılmalıdır.

// //Arrow function oluşturmak için
// //bir değişkene fonsiyon atayıp fonksiyon olarak çağırabiliriz.

// let sayHello =  ()=>{
//     console.log("Hello World");

// }

// sayHello()

// let sayHello2 = function(){
//     console.log("Hello World 2");
// }

// sayHello2()


// //Birden fazla parametri aynı anda göndermek doğru değildir.//bunun yerine göndericeğimiz özellikleri bir nesne yaratıp özellik olarak ekleyebiliriz.
// //Nesneyi fonksiyona gönderdiğimizde o nesnenin özelliklerine erişebiliriz.
// // function addToCart2(productName,quantity,unitPrice){

// // }

// // addToCart2("Elma",5,10)
// // addToCart2("Armut",2,20)
// // addToCart2("Limon",3,15)


// function addToCart3(product) {
//     console.log(product) // Product nesnesini yazdırdık.
//     console.log("Ürün : "+product.productName) //Gönderdiğimiz product nesnesinin productName özelliğine erişiyoruz.//Gönderdiğimiz nesnede productName özelliği var ise çalışır.
//     console.log("Fiyat : "+product.unitPrice)
//     console.log("Adet : "+product.quantity)
    
// }


// //Obje notasyonu

// //Verimizi kapsüllüyoruz(Encapsulation)
// let product1 = {
//     productName:"Elma",
//     unitPrice:10,
//     quantity:5
// }

// addToCart3(product1);

// let product2 = {
//     productName:"Elma",
//     unitPrice:10,
// //     quantity:5
// // }

// // let product3 = {
// //     productName:"Elma",
// //     unitPrice:10,
// //     quantity:5
// // }

// // product2 = product3;

// // //product2 ye  product3'ü tanımlar isek nesneleri eşitlemiş oluruz.

// // product2.productName="Karpuz";

// // console.log(product3.productName)


// //Özellikle sayısal veriler değer tip dir.
// //Değişkenler 2 ye ayrılır.
// //Değer tip ve referans tip

// //Sayısal veriler değer tip
// //Diziler ve nesneler,objeler ise referans tip

// //Değişken tanımladıgımızda bellekde alanlar oluşur.
// //Stack ve heap =>

// //Değer tiplerde atama yaparsan direkt olarak değer değişir.
// //



// //Birden fazla ürün göndereceğimiz varsayalım.
// function addToCart4(x){
//     console.log(products);
// }


// //Product Array'i tanımlamak.

// let products = [
//     {productName:"Elma",unitPrice:10,quantity:5},
//     {productName:"Karpuz",unitPrice:15,quantity:3},
//     {productName:"Kiraz",unitPrice:8,quantity:15},
// ]

// // 3 adet obje tanımlamış olduk

// addToCart4(products)


//Rest - Spread  - Destructing


//Bu işlemlerin sonu yok
// function add(number1,number2) {
//     console.log(number1+number2)
    
// }

// function add2(number1,number2,number3) {
//     console.log(number1+number2+number3)
    
// }

// function add3(number1,number2,number3,number4) {
//     console.log(number1+number2+number3+number4)
    
// }


// function add(...numbers){
    //nesnelre array formatında tutulur.
//     console.log(numbers)
// }

// function add(...numbers){ //rest operatörü (...) önüne işareti alır.//Resti fonksiyonun sonuna bırakın.
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         //console.log(numbers[i])
//         total = total+numbers[i]

//     }
//     console.log(total)
// }

// add(20,30)
// add(20,30,40)
// add(20,30,40,50)

// function add(...numbers,birsey){ //Bu şekilde yazılırsa proje patlar. Herşeyi numbersa atadığı için
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         //console.log(numbers[i])
//         total = total+numbers[i]

//     }
//     console.log(total)
//     console.log(birsey)
// }

// add(20,30)
// add(20,30,40)
// add(20,30,40,50)

// function add(birsey,...numbers){ //rest operatörü (...) önüne işareti alır.//Resti fonksiyonun sonuna bırakın.
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         //console.log(numbers[i])
//         total = total+numbers[i]
    

//     }
//     console.log(birsey)
//     console.log(total)
// }

// add(20,30)
// add(20,30,40)
// add(20,30,40,50)




// let numbers = [30,10,500,600,120] //Backend'den apiden veya db den geldiğini varsayar isek

// console.log(Math.max(...numbers))




// let regions = ["İç Anadolu","Marmara","Karadeniz"] //Elimizde böyle bir array oldugunu varsayalım. Ve bunu parçalayalım.

// let [icAnadolu,marmara] = ["İç Anadolu","Marmara","Karadeniz"]

// //console.log(regions)
// //İlk değeri ilk değişkene tanımlamış olduk.
// console.log(icAnadolu)
// console.log(marmara)



//Destructuring
// let [icAnadolu,marmara] = [
//     {name:"İç Anadolu",population="20M"},
//     {name:"Marmara",population="30M"},
//     {name:"Karadeniz",population="10M"},
// ]

// console.log(icAnadolu.population)
// console.log(marmara.name)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.population)
console.log(marmara.name)


let productName,unitPrice,quantity = ({ 
    productName:productName,
    unitPrice:unitPrice,
    quantity:quantity
}  = {productName:"Elma",unitPrice:10,quantity:5})

console.log(productName)
    



















