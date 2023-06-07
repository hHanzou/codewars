var number = function (busStops) {
    let r = 0
    busStops.forEach(e => r += e[0] - e[1])
    return r
}
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))