let a = 0;//a角
let b = 0;//b角
let c = 0;//c角
let badnumber = []
for(let i = 0; i<5; i++){
  b++;
  a = (b-1);
  for(let j = 0;j<5;j++){
    a++;
    if(Number.isInteger(Math.sqrt(a*a + b*b))==true){
      let c = Math.sqrt(a*a + b*b); //ここで角cを決定
        let k = 0
        l = 0
        for(let m = 0;m < badnumber.length;m++){
          if(Number.isInteger(a / badnumber[m]) == true){
            l=1
          }
        }
        if(l == 0){
          console.log(""+ b +","+ a +","+ c);
          badnumber.push(a)
        }
    }
  }
}
