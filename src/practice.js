document.addEventListener('DOMContentLoaded', () => {

  let domContent = document.querySelector('.dom-content')

  class Node {
    constructor(data, next = null, prev = null) {
      this.data = data
      this.next = next
    }
  }

  class LinkedList {
    constructor() {
      this.head = null
    }

  // INSERT NEW NODE AT *BEGINNING* OF SEQUENCE
    prepend(node) {
      let oldHead = this.head
      this.head = node
      this.head.next = oldHead

  // // ***** alternative way *****
  //     node.next = this.head;
  //     this.head = node;
  //     return this.head;
    }

  // INSERT NEW NODE AT *END* OF SEQUENCE
    append(node) {
      if (!this.head) {
        this.head = node
      } else {
        let currentHead = this.head

        while (currentHead.next !== null) {
          currentHead = currentHead.next
          // console.log(currentHead.data)
        }

        currentHead.next = node
      }
    }

    get(index) {

    }

    iterateThru() {
      let current = this.head
      while (current) {
        // console.log(current.data);
        let headLi = document.createElement("li")
        headLi.innerText = current.data
        domContent.append(headLi)
        current = current.next
      }
    }
  }



  const node4 = new Node("d")
  const node3 = new Node("c", node4)
  const node2 = new Node("b", node3)

  let alphabetList = new LinkedList()
  alphabetList.head = node2


  const node5 = new Node("e")
  alphabetList.append(node5)

  const node1 = new Node("a", node2)
  alphabetList.prepend(node1)




  alphabetList.iterateThru()



})



 


 
