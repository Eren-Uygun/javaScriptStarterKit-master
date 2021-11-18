export default class UserService{
    //export => Dışarıdan import edilmesi için
    //default => js filebased oldugundan user service import edildiği zaman default olarak UserService import edilir.

    constructor(loggerService){
        this.users=[]
      //  this.users = getCustomersFromDb(); Normal bir programda böyle olabilir.
      this.loggerService = loggerService;
    }

    add(user){
        //console.log("Kullanıcı eklendi." +user);
        this.users.push(user);
        this.loggerService.log(user);
    }

    list(){
       // console.log("Kullanıcılar listelendi.");
       return this.users;
    }
    getById(id){
        //console.log("Kullanıcı getirildi.");
        return this.users.find(x=>x.id === id)
    }

}