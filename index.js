const  sum =  (a,b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
};

const fib = (n) => {
  if(n < 2) {
    return n;
  }
  else
  {
    return fib(n-1) + fib(n-2)
  }

}

const timeTesting = (n) => {
 if (n < 60000) {
   let x = Math.floor(n / 1000);
   let res = x + " seconds";
   return res;
 } else {
   if (n >= 60000) {
     let x = Math.floor(n / 60000);

     let y = n % 60000;

     if (x >= 60) {
       let m = x % 60;
       x = x / 60;
       //console.log(x)
       if (m === 0 && y != 0) {
         let res = x + " hours" + " " + y + " seconds";
         return res;
       }
       if (y === 0 && m != 0) {
         let res = x + " hours" + " " + m + " minutes";
         return res;
       }
       if ((y === 0) & (m === 0)) {
         let res = x + " hours";
         return res;
       }
       let res = x + " hours" + " " + m + " minutes" + " " + y + " seconds";
       return res;
     } else {
       y = y / 1000;
       if (y === 0) {
         let res = x + " minutes";
         return res;
       }
       let res = x + " minutes" + " " + y + " seconds";
       return res;
     }
   }
 }
}

const password = (str) => {
   if(str.length < 6)
   {
     return "Length less then 6"
   }
   let capital = 0;
   let small = 0;
   let number = 0;
   let special = 0;
   for(let i = 0; i < str.length; i++)
   {
     if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
     {
       capital = 1;
     }
     if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 120) {
       small = 1;
     }
     if (str.charAt(i) == 0 || str.charAt(i) == 1 || str.charAt(i) == 2 || str.charAt(i) == 3 ||
     str.charAt(i) == 4 || str.charAt(i) == 5 ||str.charAt(i) == 6 || str.charAt(i) == 7 ||
     str.charAt(i) == 8 || str.charAt(i) == 9 ) {
       number = 1;
     }
     if (
       str.charAt(i) === ")" ||
       str.charAt(i) === "(" ||
       str.charAt(i) === "{" ||
       str.charAt(i) === "}" ||
       str.charAt(i) === "@" ||
       str.charAt(i) === "$" ||
       str.charAt(i) === "#" ||
       str.charAt(i) === "!" ||
       str.charAt(i) === "^" ||
       str.charAt(i) === "*"
     ) {
       special = 1;
     }
   }
   if(capital === 0)
   {
     return "Upper Case caracter is missing"
   }
   if (small === 0) {
     return "Lower Case caracter is missing";
   }
   if (number === 0) {
     return " Number is missing";
   }
   if (special === 0) {
     return "Special caracter is missing";
   }
   else{
     return 'password is valid';
   }
}
module.exports = {sum , sub , fib, timeTesting, password}


