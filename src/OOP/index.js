export class Customer{
    //Public erişim belirleyicisinin javascript'deki kullanımı export'dur.
    //Javascript'de class kullanımı c# ve java gibi zengin değildir.
    //Javascript'de sınıflarda alan oluşturmak için prototip yapı kullanılır.
    constructor(id,customerNumber){
        //bu verilere birşey atamassan undefined gelir.
        //this burda instance anlamına gelir.
        //Burada da prototyping yapıyoruz. Instance'a id ve instance'a customerNumber özellikleri ekledik.
        this.id=id;
        this.customerNumber=customerNumber;

    }
}


//Class çağırılırken c# ve java gibi dillerde olduğu gibi değil yani Customer customer = new Customer();
//Şeklinde değil, let customer = new Customer() şeklinde tanımlıyoruz.

//this burda => let customer 'a karşılık gelir.
let customer = new Customer(1,"111333");
//Prototyping: bir nesneye başka bir özellik ekleyerek onu eklemiş oluyoruz.
customer.name = "Test Tester" //instance için yapılan prototyping
console.log(customer); //Customer nesnesi getirir.

Customer.birsey = "birşey"; // Class için yapılan prototyping 

console.log(Customer.birsey);

console.log(customer.customerNumber);

//Saf Js'de class diye birşey yok. Fonksiyon var.
//Buradaki class'lar arka planda fonksiyona dönüştürülüyor.

//Temel müşteri yapısından nesne türetmek için java'daki gibi extend kullanıyoruz.

//Super fonksiyonu ile Customer'a erişiyoruz.
//Super ile id ve customerNumber alanlarını base sınıf Customer'da instance aldırıyoruz.

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
            this.firstName = firstName;

        

    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
            this.companyName = companyName;

        
    }
}



