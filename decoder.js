/*logikanya

    1.buat data tampung persatunya, jika sama maka ditampung
    https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript


    */
   

    function decoder(s){
        s = s.toLowerCase();//works on symbol
       var result = {};
    

        s.split().forEach(function(e) {
        result[e] = {};
        e.split('').forEach(function(c) {
            if(!result[e][c]) { result[e][c]=0; }
            result[e][c]++;
            });
        });


        //result = { apa: { a: 2, p: 1 } }  //works on symbol
    
     var a = result[s]//{ a: 2, p: 1 }//problem on symbol
    

        /*sekarang di looping si s string dengan a objeck,
        jika si property object punya lebih dari 1,
        maka kata ini di rubah ")" , kalo hanya 1
        maka di rubah "(" */


        //saya rubah menjadi array si objeck terlebih dahulu


    var b = Object.keys(a).map((key) => [(key), a[key]]);   
    //[ [ 'a', 2 ], [ 'p', 1 ] ]


    var final = "";

    for (let i = 0; i < s.length; i++) {
       
       for (let j = 0; j < b.length; j++) {
           
            if(s[i] == b[j][0])/*pertemuin huruf sama*/{
                if(b[j][1] == 1){
                final+= "("
                } else if(b[j][1] > 1){
                final+= ")"
                }
            }
        
        }      
        
        
        
    }    
    return final;

}

        
     

    console.log(decoder("din"))//((( correct
    console.log(decoder("redece"))//()()() correct
    console.log(decoder("Success"))//)())()) correct
    console.log(decoder("(( @"))//))(( correct
    
