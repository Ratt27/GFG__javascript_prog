const isRequestSuccessfull = false;

let promise = new Promise((resolve,reject)=>{
  if(isRequestSuccessfull){
   resolve("promise resolved");
  }else{
   const error = new Error("Something Went Wrong");
   reject(error.message);
  }
});

promise.then(response=>console.log(response))
.catch(err=>console.log(err));

function asyncOperation(value) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const result = value * 2;
      resolve(result);
    }, 1000);
  });
}

// Chain multiple 'then' methods
asyncOperation(3)
  .then(result1 => {
    console.log(`Step 1: ${result1}`);
    return result1 + 5;
  })
  .then(result2 => {
    console.log(`Step 2: ${result2}`);
    return result2 * 3;
  })
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });