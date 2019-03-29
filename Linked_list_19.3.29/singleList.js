class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LList {
    constructor() {
        this.head = new Node("head");
    }



    find(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //找到要插入的节点currNOde
    //创建一个新节点NewNode，
    //将currNode的next属性赋值给NewNode
    //将NewNode赋值给currNode的next属性这样
    insert(newElement, item) {
        let NewNOde = new Node(newElement);
        let currNode = this.find(item);
        NewNOde.next = currNode.next;
        currNode.next = NewNOde;
    }

    display() {
        let currNode = this.head;
        while(currNode.next != null){
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    advance(item,n) {
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
    //找到前一个节点
    findPrevious(item) {
        let currNode = this.head;
        while(currNode.next !=null && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        let preNode = this.findPrevious(item);
        preNode.next = preNode.next.next;
    }
}
let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russ", "Conway");
cities.insert("Hell","Russ");
cities.insert("Deep","Hell");
cities.insert("Deepw","Conway");
cities.display();
cities.advance("Conway",2);
cities.display();
// console.log(cities);