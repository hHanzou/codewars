function tribonacci(sig,n){
    for(i = sig.length; i < n; i++)
     sig.push(sig[i-3]+sig[i-2]+sig[i-1])
    return sig.slice(sig,n)
  }

  let cafe = tribonacci([1,1,1], 10)
  console.log(cafe)