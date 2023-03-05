//and
function mayorYmenorYpar (num) {
    if(num > 5 && num < 10 && num %2===0) console.log(true);
    else console.log(false);

};
mayorYmenorYpar(5);
mayorYmenorYpar(8);
//or
 function  operadorOR(str) {
    if( str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);

 }
 operadorOR("Henry");
 operadorOR("javascript");
 operadorOR("h");
//not
 function negacion(permiso){
    if (permiso) console.log("tiene permiso");
 }

 negacion(true);
 negacion(false);


