# 链表操作

## 单链表

### 1.建立Node对象表示节点，包含element以及next属性element属性存放数据，next属性指向下一个节点

```js
 class Node {
     constructor(element) {
         this.element = element;
         this.next = null;
    }
}
```

### 2. 建立LList对象提供对链表进行操作的方法，插入删除移动节点等方法，该对象只有一个属性head用来初始化头节点。

```js
class LList {
    constructor() {
        this,head = new Node(head);
    }
    find() {
        ...
    }
    insert() {
        ...
    }
    remove() {
        ...
    }
    display() {
        ...
    }
    advance() {
        ...
    }
    findPrevious () {
        ...
    }
}
```

### 3. 首先insert方法,将一个节点插入链表，单链表的话往节点前面插比较容易，第一步要找到被插入的节点`currNode`，然后将新节点`newNode`赋值给`currNode.next`,将`currNode.next`赋值给`newNode.next`

```js
find(item) {
    //设置currNode指向头节点
    //通过while循环移动头节点
    let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
}

insert(newElement, item) {
        let NewNOde = new Node(newElement);
        let currNode = this.find(item);
        NewNOde.next = currNode.next;
        currNode.next = NewNOde;
    }
```

### 4. 将单链表的元素前移的方法`advance`，首先找到目标节点`itemNode`的前一个节点`currNode`，将`currNode.next`属性设置为`itemNode.next`，这样就将`itemNode`分离出来了，通过while循环让`currNode`在链表上移动，到达目标节点后`itemNode`赋值给`currNode.next`,将`currNode.next`赋值给`itemNode.next`

```js
    advance(item,n) {
        //找到前一个节点
        let currNode = this.findPrevious(item);
        let itemNode = currNode.next;
        let index = 0;
        currNode.next = itemNode.next;
        while(currNode.next != null&& index<n) {
            currNode = currNode.next;
            index++;
        }
        itemNode.next = currNode.next;
        currNode.next = itemNode
    }
```

## 循环链表