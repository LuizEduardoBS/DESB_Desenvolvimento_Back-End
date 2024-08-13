let n1 = 20, n2 = 50;
let res1, res2

function soma(){
    res1 = n1 + n2;
    console.log(res1);
    n1 = 15;
    n2 = 40;
    res1 = n1 + n2;
    console.log(res1);
}
function multip(){
    res2 = n1 * n2;
    console.log(res2);
}
 
soma();
multip();