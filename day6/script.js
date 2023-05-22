//1.while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
/*
for(let i=0;i <=10;i++){
    console.log(i)
}

let i=0
while( i<=10){
    console.log(i)
    i++

}

let j = 0
do {
console.log(j)
j++
} while (j <= 10)  
// 2.while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
for(let i=10;i >=0;i--){
    console.log(i)
}

let k=10
while( k>=0){
    console.log(k)
    k--

}

let m = 10
do {
console.log(m)
m--
} while (m >= 0)  
// 3.0'dan n' e kadar giden bir for döngüsü kurun.
let n=5;
for(let i=0;i<=n;i++){}
Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.

    #
    ##
    ###
    ####
    #####
    ######
    #######
     */
let rows =7;
let yildiz ="";

    for(let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++){
            yildiz+="*";}
yildiz+="\n";
    }
    console.log(yildiz)
/*
    var b,a;
for(b=1;b<=10;b++)
{
for(a=1;a<=i;a++)
{
document.write(“*“);
}
document.write(“<br>“);

};*/

for(let i=0;i<=10;i++){
    let carp=i*i;
    console.log(`${i}x${i}=${carp}`)
}
/*0x0=0
script.js:72 1x1=1
script.js:72 2x2=4
script.js:72 3x3=9
script.js:72 4x4=16
script.js:72 5x5=25
script.js:72 6x6=36
script.js:72 7x7=49
script.js:72 8x8=64
script.js:72 9x9=81
script.js:72 10x10=100
 */
for(let i=0;i<=10;i++){
    let bir=i;
    let iki =i**2;
    let uc=i**3
    console.log(`${bir} ${iki }  ${uc }`)
}
let i=0
do{
    console.log(i)
    i=i+2;
}while(i<=100)
let m=1
do{
    console.log(m)
    m=m+2;
}while(m<=100)
let ssay = [];
for (let i = 0; i <= 100; i++) {
  ssay.push(i);
}
const numbers = ssay;
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
  
  let sum1=0
  for(const num of numbers){
    sum1=sum1+num;
  }
  console.log(sum1)