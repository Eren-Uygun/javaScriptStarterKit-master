let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150}
]

//State Management => Elimizdeki datayı yönetmek
//Spa'larda data değiştiği zaman bu değişikliğin yapıldığını programa belirtmemiz gerekiyor.

//cart.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})

function addToCard(sepet){
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20});

}

addToCard(cart);

console.log(cart);

let sayi = 10

function sayiTopla(param) {
    param+=1
    
}

sayiTopla(sayi);

console.log(sayi)


//Map bütün dizileri veya nesneler gezer.
//Bu işlemde dizideki nesnelere product adı vererek gezer product ve nesnenin özelliği birlikte çalıştırılabilir.
cart.map(product=>console.log(product.productName));

cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice*product.quantity)
})

cart.filter(product=>product.quantity>2)

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2);


let total = cart.reduce((acc,product)=>acc+product.unitPrice,0);
console.log(total);




