class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(data) {
    const newNode = new Node(data)
    if(this.head = null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.size += 1
    return newNode
  }

  pop() {
    if(this.head = null) {
      return null
    } else {
      let currentNode = this.head
      let secondToLastNode = this.head
      while (currentNode.next){
        secondToLastNode = currentNode
        currentNode = currentNode.next
      }

      secondToLastNode = null
      this.tail = secondToLastNode
      this.size -= 1
      if(this.size === 0){
        this.head = null
        this.tail = null
      }
      return currentNode
    }
  }

  unshift(data) {
    const newNode = new Node(data)
    if(this.size === 0){
      this.tail = newNode
    }else{
      newNode.next = this.head
    }
    this.head = newNode
    this.size += 1

    return newNode
  }

  shift() {
    if(this.size === 0){
      return null
    }else {
      const nodeToRemove = this.head
      this.head = this.head.next
      this.size -= 1

      if(this.size === 0) {
        this.tail = null
      }

      return nodeToRemove
    }
  }

  get(index) {
    if(index < 0 || index >= this.size){
      return null
    } else {
      let currentNode = this.head
      let count = 0

      while (count < index) {
        currentNode = currentNode.next
        count += 1
      }

      return currentNode
    }
  }

  set(index, data) {
    const currentNode = this.get(index)
    if(currentNode) {
      currentNode.data = data
      return currentNode
    } else {
      return null
    }
  }

  insert(index, data) {
    if(index < 0 || index > this.size){
      return null
    } else if (index === 0){
      this.unshift(data)
    }
  }


}