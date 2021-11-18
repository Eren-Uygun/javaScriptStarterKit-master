import BaseLogger, { ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("this compo worked")

//let logger1 = new BaseLogger();
//let logger1 = new ElasticLogger();
let logger1 = new MongoLogger();

let userService = new UserService(logger1);

let user = new User(1,"Eren","Uygun","İstanbul");
let user1 = new User(2,"Enes","Arıcıoğlu","Konya");

userService.add(user);
userService.add(user1);
userService.getById(1);
userService.list();

let customer = {id:1,firstName:"Eren"};
customer.lastName = "Uygun";

//Bu olaya prototyping diyoruz.
//Nesneye sonradan özellik eklemiş oluyoruz.
//console.log(customer.lastName);
console.log(userService.list())
console.log(userService.getById(1))



