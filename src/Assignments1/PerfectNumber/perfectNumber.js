function isPerfectNumber(){
  //  Kendisi hariç bütün pozitif bölenlerinin toplamı kendisine eşit olan sayılara mükemmel sayı denir.


  //Örnek Mükemmel Sayılar => 6,28,496,8128,33550336,.....
  

    //İlk for döngümüz veri girişini bölümünü sağlamak için kullanılıyor. 1000'e kadar olan sayılar
    for (let index = 1; index < 1000; index++) {

        let sum=0;//Pozitif bölenlerin toplamını tutmak için
        for (let index2 = 1; index2 < index ; index2++) { //ikinci döngümüzde ise mükemmel sayıyı bulmak için dönüyor.

            if(index%index2==0){
                sum+=index2;
            }
            
        }
        if(sum == index){
            sum = 0;
            console.log(index)
        }
        
        
    }

}

isPerfectNumber();