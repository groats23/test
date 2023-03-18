// const age = 10;
// const totalPrice = 220.74;
// const userName = "Chelsy";
// const message = "Willcomen"
// const isOpen = true;
// const shouldConfirm = false;

// console.log("Цена", totalPrice);


// const shouldRenew = confirm("Хотите продлить подписку?");
// console.log(shouldRenew);

// let quantity = prompt("Введите количество товаров")
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);

// let elementWidth = "50.24px";
// elementWidth = Number.parseFloat(elementWidth);
// console.log("elementWidth:", elementWidth);


// let salary = 1300.13213213;
// salary = Number(salary.toFixed(3));



function checkForSpam(message) {
  let result;
  // Change code below this line

message = message.toLowerCase();
if (message.includes('spam') || message.includes('sale')){
  result = true;
} else {
  result = false;
}

  // Change code above this line
  return result;
}

console.log (checkForSpam("Latest technology news"))ж                      //false 
console.log (checkForSpam("JavaScript weekly newsletter"));                 //false 
console.log (checkForSpam("Get best sale offers now!"));                    //true
console.log (checkForSpam("Amazing SalE, only tonight!"));                  //true
console.log (checkForSpam("Trust me, this is not a spam message"));         //true
console.log (checkForSpam("Get rid of sPaM emails. Our book in on sale!")); //true
console.log (checkForSpam("[SPAM] How to earn fast money?"));               //true


 