
// sorting arrays
const ascendingOrder = arr => {
  return arr.sort((a,b) => a - b) //or sort((a,b) => a > b)
}

const descendingOrder = arr => {
  return arr.sort((a,b) => b - a) //or sort((a,b) => a < b)
}