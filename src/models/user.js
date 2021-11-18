export default class User {
  //Constructor => Yapıcı oluşturucu metotdur. Class çalıştırıldığı anda ilk olarak bu bölüm çalışır.
  //Prototyping
  constructor(id, firstName, lastName, city) {
    //This bu class demektir. This'de yani bu class'a prototyping yoluyla özellik ekliyoruz.
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    // console.log("User Oluştu.");
  }
}
