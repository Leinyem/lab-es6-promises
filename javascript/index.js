// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// // Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatos are ready! YES!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

/*getInstruction("mashedPotatoes", 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));*/



// Iteration 2 - using promises

obtainInstruction("steak", 0)
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return obtainInstruction("steak", 1);
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction("steak", 2);
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction("steak", 3);
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction("steak", 4);
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction("steak", 5);
})
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction("steak", 6);
})
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden"); // Mostrar imagen
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
})
.catch((error) => console.log(error));



// Iteration 3 using async/await

async function obtainBroccoli() {

try {

  const step1 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  
  const step3 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  
  const step4 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  
  const step5 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  
  const step6 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  
  const step7 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
  
 
  document.querySelector("#broccoliImg").removeAttribute("hidden"); // show image
  

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  
} 

catch (error) {

  console.log(error);

}

}
obtainBroccoli(); //WE CALL THE FUNCTION!




// Bonus 2 - Promise all
/*Using Promise.all display the cooking steps to make Brussels Sprouts in the correct order.

After the last step, you should display an additional <li> with the text: Brussels sprouts are ready!.

The final result should look like this - with all the cooking steps displaying in the correct order:*/


const arrayOfPromises = brusselsSprouts.map((item)=>{
return new Promise((resolve)=> {

  setTimeout(() => {
      
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${item}</li>`
  }, 1500);
      
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  


})
})

Promise.all(arrayOfPromises)
