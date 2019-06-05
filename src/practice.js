document.addEventListener('DOMContentLoaded', () => {

// // ************************************************
// // LINKED LIST ------------------------------------
//   let linkedListContent = document.querySelector('.linked-list')
//
//   class Node {
//     constructor(data, next = null, prev = null) {
//       this.data = data
//       this.next = next
//     }
//   }
//
//   class LinkedList {
//     constructor() {
//       this.head = null
//     }
//
//   // INSERT NEW NODE AT *BEGINNING* OF SEQUENCE
//     prepend(node) {
//       let oldHead = this.head
//       this.head = node
//       this.head.next = oldHead
//
//   // // ***** alternative way *****
//   //     node.next = this.head;
//   //     this.head = node;
//   //     return this.head;
//     }
//
//   // INSERT NEW NODE AT *END* OF SEQUENCE
//     append(node) {
//       if (!this.head) {
//         this.head = node
//       } else {
//         let currentHead = this.head
//
//         while (currentHead.next !== null) {
//           currentHead = currentHead.next
//           // console.log(currentHead.data)
//         }
//
//         currentHead.next = node
//       }
//     }
//
//     get(index) {
//
//     }
//
//     iterateThru() {
//       let current = this.head
//       while (current) {
//         // console.log(current.data);
//         let headLi = document.createElement("li")
//         headLi.innerText = current.data
//         linkedListContent.append(headLi)
//         current = current.next
//       }
//     }
//   }
//
//   const node4 = new Node("d")
//   const node3 = new Node("c", node4)
//   const node2 = new Node("b", node3)
//
//   let alphabetList = new LinkedList()
//   alphabetList.head = node2
//
//
//   const node5 = new Node("e")
//   alphabetList.append(node5)
//
//   const node1 = new Node("a", node2)
//   alphabetList.prepend(node1)
//
//
//   alphabetList.iterateThru()
// // ------------------------------------------------


// ************************************************
// TREE -----------------------------
  let treeContent = document.querySelector('.tree')

  class Node {
    constructor(data) {
      this.data = data
      this.children = []
    }

    add(data) {
      const node = new Node(data)
      this.children.push(node)
    }

    remove(data) {
      // reassigning the children of given node
      // by filtering out the child node whose data property matches argument
      this.children = this.children.filter(childNode => {
        childNode.data !== data
      })
    }
  }

  class Tree {
    constructor() {
      this.root = null
    }

    traverseBF(func) {
      const arr = [this.root]

      while (arr.length) {
        // .shift to temporarily take out the first element in arr
        const node = arr.shift()

        // arr.push(node.children) **WRONG**
        // arr.push(...node.children) **ANOTHER CORRECT WAY**
        // cannot push node.children into arr because node.children is already an array
        // and we don't want a nested array DO WE--?!
        for (let child of node.children) {
          arr.push(child)
        }

        func(node)

        // **********************************************
        // console.log(node.data);
        // **********************************************
      }
    }

    traverseDF(func) {
      const arr = [this.root]

      while (arr.length) {
        // takes out first node in arr
        const node = arr.shift()

        // adds children of node to the BEGINNING of arr
        arr.unshift(...node.children)

        func(node)
      }
    }
  }

  let node1 = new Node("Single Dad Danny")
  const tree = new Tree()
  tree.root = node1

  node1.add("Tommy Boy")
  node1.add("Billy Bob")

  let child1 = node1.children.filter(child => {
    return child.data === "Tommy Boy"
  })


  child1[0].add("Sally")
  child1[0].add("Molly")

  function addYeahhh(node) {
    return node.data + " YEAHHH!!!"
  }

  tree.traverseBF(addYeahhh)


  treeContent.innerHTML += `
  <p>${node1.data}</p>
  <p>${node1.children[0].data}</p>
  <p>${node1.children[1].data}</p>
  <p>${child1[0].children[0].data}</p>
  <p>${child1[0].children[1].data}</p>
  `

// ------------------------------------------------

})



 


 
