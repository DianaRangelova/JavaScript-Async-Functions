function helloWorld() {
    console.log("Hello");
    setTimeout(() => console.log("World"), 2000);
}

// = <button onclick="helloWorld()">Hello World</button> in index.html 
// let button = document.querySelector("button");
// button.addEventListener('click', helloWorld);

// With promise
function helloWorldWithPromise() 
{
  console.log("Hello");

  let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve("World");
    }, 2000);
  });

  promise.then(function(result){
    console.log(result);
  })
}

// With async await
async function helloWorldWithAcync() 
{
  console.log("Hello");

  let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve("World");
    }, 2000);
  });

  let result = await promise;
    console.log(result);
}

