function fullName (){
    let name="Gün"
    let lastName ="Güzeli"
    let space=" "
    let fullName= name+space+lastName
    console.log(fullName)
}
fullName()

function addNumbers(){
    let ziffern1=1
    let ziffern2=2
    let sum=ziffern1+ziffern2
   return sum

}
console.log(addNumbers())

function rectangle(length,width){
    let rectanglearea=length*width
    return rectanglearea;

}
console.log(
rectangle(3,4)
)

const hsp = (a,b,c,x,y)=> {
let hspsnc=a*x+b*y+c;
return hspsnc

}
console.log(hsp(2,4))