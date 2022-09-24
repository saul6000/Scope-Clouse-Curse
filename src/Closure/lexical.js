const myGlobal=0;
function myfunction(){
    const myNumber=1
    console.log(myGlobal);
    function parent(){//function interna
      const inner = 2;
    console.log(myNumber,myGlobal);
    function child(){
        console.log(inner);
        console.log(myNumber);
        console.log(myGlobal)
    }   
    return child()
 }
 return parent();
}

myfunction();