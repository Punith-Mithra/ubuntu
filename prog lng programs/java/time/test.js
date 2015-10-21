debugger;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var arr2 = [4, 6, 9];
var start = 0,
   end = 0;
var arr1;
var mainArr = [];
for (var val in arr2) {
   arr1 = split(arr);
   end = arr.indexOf(arr2[val]);
   console.log(start, end);

   if (end === -1 && val < arr2.length) {
      continue;
   } else if (end === -1 && val === arr2.length - 1) {
      end = arr.length - 1;
   }

   mainArr.push(arr1.splice(start, end - start));
   start = end + 1;
   val = parseInt(val) + 1;
   if (val === arr2.length && end !== arr.length) {
      arr1 = split(arr);
      end = arr.length;
      mainArr.push(arr1.splice(start, end - start));
   }
}
console.log(mainArr);

function split(a) {
   return a.slice(0);
}