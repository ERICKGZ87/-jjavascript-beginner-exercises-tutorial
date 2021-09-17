var total = prompt('How many km are left to go?');

// Your code below:


//
//if (parseFloat(total)>=100){
 // console.log('Are we there yet')
//}
//else if (parseFloat(total)>50){

//console.log('Well be there in 5 minutes')
//}
//else if (parseFloat(total)<50){
  //console.log('Im parking, I see you right now')
  
//}

function recorrido(total){
  let result;
if (parseFloat(total)>=100 ){
  result = 'Are we there yet';
}

else {
  result = 'Well be there in 5 minutes';
  return result;
}
console.log(total)






  