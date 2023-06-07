// function longest(s1, s2) {
//     return s1 = (s1 + s2).toString().split('').filter((e, i, a) => a.indexOf(e) === i).sort().toString().replace(/\W+/g, '')
// }
function longest(s1, s2) {
    return [... new Set(s1+s2)].sort().join('')
    //set cria um array sem repetições
}
console.log(longest('abc','cde'))