function forLoop(array){
  for (var i = 0; i < 25; i++){
    if(i == 1){
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`) 
    }
  }
  return array
}

function whileLoop(n){
 // var countDown = n;
  while(n > 0){
   console.log(--n); 
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}
 

<<<<<<< HEAD
function doWhileLoop(array) {

  do {

    array.shift();

  }

  while (array.length > 0 && maybeTrue());


  return array;
}
=======
function doWhileLoop(array){
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

>>>>>>> 49cdc59e5bb187fc39d723ea29884cd1aac7fb3a
