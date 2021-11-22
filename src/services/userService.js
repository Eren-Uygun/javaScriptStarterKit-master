import { users } from "../data/users.js";

export default class UserService{
    //export => Dışarıdan import edilmesi için
    //default => js filebased oldugundan user service import edildiği zaman default olarak UserService import edilir.
//  this.users = getCustomersFromDb(); Normal bir programda böyle olabilir.
constructor(loggerService) {
    this.employees = []
    this.customers = []
    this.errors = []
    this.loggerService = loggerService
}


load() {
    for (const user of users) {
        switch (user.type) {
            case "customer":
                this.customers.push(user)
                break;
            case "employee":
                this.employees.push(user)
                break;
            default:
                this.errors.push("Wrong user type")
                break;
        }
    }
}

    add(user){
        //console.log("Kullanıcı eklendi." +user);
        //this.users.push(user);
        this.loggerService.log(user);
    }

    list(){
       // console.log("Kullanıcılar listelendi.");
      // return this.users;
    }
    getById(id){
        //console.log("Kullanıcı getirildi.");
       // return this.users.find(x=>x.id === id)
    }

}