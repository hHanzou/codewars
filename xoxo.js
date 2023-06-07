function XO(str) { 
    if(str.split('').filter(e => e == "o" || e == "O").length !== str.split('').filter(e => e == "x" || e == "X").length){
        console.log(str.split('').filter(e => e == "o" || e == "O").length)
        console.log(str.split('').filter(e => e == "x" || e == "X").length)
        return false
    }else{
        return true
    }
}

console.log(XO('xxo'))