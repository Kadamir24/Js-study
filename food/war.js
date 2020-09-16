
// function findShort(s){
//     let shortest = s.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur);
//     return shortest.length;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));




var myArray = [7, 8, 9, 1, 2];
myArray = processArray(myArray, function (a) {
  return a + 5;
});

function processArray(arr, callback) {
    // TODO
    let newarr = [];
    arr.forEach( (el) => {
      newarr.push(callback(el));
    });
    return newarr;
}

console.log(myArray);