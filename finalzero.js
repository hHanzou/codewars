function moveZeros(arr) {
  //criação de array de zeros
  console.log(arr)  
  let zarr = []
    zarr = arr.filter(e => e === 0)
    console.log(zarr)
    arr = arr.filter(e => e !== 0)
    console.log(arr)
    
    for(i = 0; i < zarr.length; i++)
    arr.push(0)

    console.log(arr)
  }

moveZeros([1,2,0,1,0,1,0,3,0,1])
// 1, 2, 1, 1, 3, 1, 0, 0, 0, 0
