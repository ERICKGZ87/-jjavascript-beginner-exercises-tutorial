var total = prompt("How many km are left to go?");

function recorrido(total) {
  let result;
  if (total >=100) 
  {
    result = "Are we there yet?";
  } 
  else if (total >=50) 
  {
    result = "We'll be there in 5 minutes";
    
  }
  else if (total<=50)
  {

    result = "I'm parking, I see you right now";
  }

  return result;
}

let distance = recorrido(total);
console.log(distance);
