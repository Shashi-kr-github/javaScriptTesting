function  timeTesting (n)  {
  if (n < 60000) {
    let x = Math.floor(n / 1000);
    let res = x+  " second";
    return res;
  } else {
    if (n >= 60000) {
      let x = Math.floor(n / 60000);

      let y = n % 60000;

      if (x >= 60) {
        let m = x % 60;
        x = x / 60;
        //console.log(x)
        if(m === 0 && y != 0)
        {
           let res = x + " hours" + " " + y + " seconds"; 
           return res; 
        }
        if(y === 0 && m != 0)
        {
           let res = x + " hours" + " " + m + " minutes";
           return res; 
        }
        if(y === 0 & m === 0)
        {
             let res = x + " hours" ;
             return res;  
        }
        let res = x + " hours"+" " + m + " minutes" + " "+ y + " seconds";
        return res;
      } else {
          y = y / 1000;
          if(y === 0)
          {
            let res = x + " minutes";
            return res;  
          }
        let res = x + " minutes" + " " +y + " seconds";
        return res;
      }
    }
  }
};

console.log(timeTesting(5200));