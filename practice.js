function addTwoTo(n) {
  console.log(n)
// str becomes the output of the recursive call
  if (n < 10){
    addTwoTo(n + 2)
  } else {
    return true
  }
}

addTwoTo(0)

// ------------------------------------------------ //

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
  }
}

 
