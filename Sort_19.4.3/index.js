class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
    }

    setData() {
        for (let i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (100 + 1))
            // this.dataStore[i] = Math.random()*(100)
        }
    }

    swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }


    show() {
        let restr = "";
        for (let i = 0; i < this.dataStore.length; i++) {
            restr += this.dataStore[i] + " ";
            if (i > 0 & i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    }
    // 冒泡排序 
    // 每次都是相邻的两个数比较
    // 每次都从头开始比较
    bubbleSort() {
        for (let outer = this.numElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
        }
    }


    selectionSort() {
        //min来标记最小元素的位置
        let min,
            len = this.dataStore.length;
        for (let i = 0; i<= len - 2; i++){
            min = i;
            for(let j = i+1; j<=len -1; j++) {
                //每次和最小的元素比较
                if(this.dataStore[j] <  this.dataStore[min]){
                    min = j;
                }
            }
            this.swap(this.dataStore, min, i)
        }
    }
}

let myNums = new CArray(10);
myNums.setData();
console.log(myNums.show());
myNums.selectionSort();
console.log(myNums.show());
