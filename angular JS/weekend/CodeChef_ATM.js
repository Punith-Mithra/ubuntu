var amt = 30
var bal = 120.00

if (amt % 5 === 0) {
   if (amt <= bal - 0.5) {
      console.log((bal - amt - 0.5).toFixed((2)));
   }

} else {
   console.log(bal);
}