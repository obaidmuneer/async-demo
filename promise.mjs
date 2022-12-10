//Promise
//Hold the eventual result of an asynchronus operation when its complete
// it can either result in a value or error
///promise basicaly promises you that it will give you the result of an asynchrous operation

let random = Math.random().toFixed();
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (random > 0) {
      resolve(1);
    } else {
      reject(new Error("message"))
    }
  }, 2000);
});

p.then((res) => console.log(res));
p.catch((err) => console.log(err.message));
