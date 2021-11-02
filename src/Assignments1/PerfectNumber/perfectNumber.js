function isPerfectNumber(){
  

    //İlk for döngümüz veri girişini bölümünü sağlamak için kullanılıyor. 1000'e kadar olan sayılar
    for (let index = 1; index < 1000; index++) {

        let sum=0;
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