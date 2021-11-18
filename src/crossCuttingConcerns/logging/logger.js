
export default class BaseLogger{
    log(data){
        console.log("Default Logger : " + data)
    }
}
//Extend ettiğimiz zaman base logger'daki özelliklere sahip oluyoruz.
//Default logger'dan extend ettiğimiz zaman log metodunu override ediyoruz yani türkçe tabiriyle eziyoruz.
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" +data)
    }
}