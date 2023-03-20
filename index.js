//const thankYou = (["Guadalupe", "Ollie", "Aki"], "surprise")

function writeCards(names,event) {

  let messages = [];
  
  for (let i = 0; i < names.length; i++) {

    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  } 
  return messages;
}


//writeCards(["Guadalupe","Ollie", "Aki"], "surprise");

function countDown(number) {
  while (number > -1) {
  console.log(number);
  number -= 1;
  }
}

//countDown(10); 

//"Thank you Ollie for the wonderful surpise gift!"
/*const gifts = ["teddy bear", "drone", "doll"];

function writeCards(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

writeCards(gifts); */