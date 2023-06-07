const solution = (str, end) => str.includes(end) && end[end.split('').length - 1] == str[str.split('').length - 1] || end == '' ? true : false
let cu = solution('abcde', 'cfe')
console.log(cu)
  