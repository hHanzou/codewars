function longestRepetition(s) {
    return [s.match(/(\w)\1+|(\w)/g).reduce((a,e) => e.length > a.length ? a = e : a ,"").slice(0, 1), s.match(/(\w)\1+|(\w)/g).reduce((a,e) => e.length > a.length ? a = e : a ,"").length]
  }

  console.log (longestRepetition("aasuhkka"))