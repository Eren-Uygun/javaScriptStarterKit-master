//map,filter,reduce

//Frotend kütüphaneleri veya frontend dillerindeki temel amaç ekrandaki veriyi elimizdeki data'ya göre 
//şekillendirmekdir.

//map bizim için array'i , nesneyi vs for yada foreach gibi gezer ve onlara belirttiğimiz ismi verir.
//Örneğin elimizde dizisi var.
//Map onları gezer ve listedeki her bir eleman için ne yapıcağımızı belirlemeye olanak sağlar.

let products = [
    {id:1,name:"Rx 570",unitPrice:8000},
    {id:2,name:"Rx 580",unitPrice:9000},
    {id:3,name:"Rx 560",unitPrice:6000},
    {id:4,name:"Rx 5700xt",unitPrice:12000},
    {id:5,name:"Rx 6600xt",unitPrice:22000}
]


console.log("<ul>");
products.map(product=> console.log("<li>"+product.name+"</li>"))
console.log("</ul>");


products.map(product=>{
    console.log(product);
    console.log("<li>"+product.name+"</li>");
})


//filter:belirli bir ifadeye göre Filtreme yaparak yeni bir array çıkarır. 0 elemanlı bile olsa sonuç array olarak gelir.

let filteredProducts = products.filter(product=>product.unitPrice>8000)
console.log(filteredProducts);


//reduce: Reduce fonksiyonu, verilen bir koşula göre diziden tek bir eleman almak için kullanılır.

//Her bir ürün için acc(accumulator = > toplam ifadesini simgeler) için acc'ye fiyat ekle , sondaki 0 başlangıç değeri
let cartTotal = products.reduce((acc,product)=>acc+product.unitPrice,0)

console.log(cartTotal);


//Bu örnekde ürünleri filtreledi , 
//her bir ürün için kdv hesabı yaptı , 
//reduce bölümünde ise kdv dahil fiyatlarını topladı.
let cartTotal2 = products.filter(p=>p.unitPrice>10000)
.map(p=>{
    p.unitPrice = p.unitPrice * 1.18
    return p;
})
.reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)



