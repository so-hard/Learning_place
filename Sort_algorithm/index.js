class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
        this.gaps = [5, 3, 1];
    }

    setData() {
        for (let i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (1000 + 1))
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

    showRunTime(fun) {
        this.setData();
        let start = new Date().getTime();
        fun.call(nums);
        let stop = new Date().getTime();
        console.log(`用时${stop - start}`);
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
        for (let i = 0; i <= len - 2; i++) {
            min = i;
            for (let j = i + 1; j <= len - 1; j++) {
                //每次和最小的元素比较
                if (this.dataStore[j] < this.dataStore[min]) {
                    min = j;
                }
            }
            this.swap(this.dataStore, min, i)
        }
    }

    insertion() {
        let temp, inner, outer,
            len = this.dataStore.length;
        for (outer = 1; outer <= len - 1; outer++) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && this.dataStore[inner - 1] > temp) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                inner--;
            }
            this.dataStore[inner] = temp;
        }
        return this.dataStore;
    }

    shellSort() {
        let i, j;
        for (let g = 0; g < this.gaps.length; ++g) {
            for (i = this.gaps[g]; i < this.numElements; i++) {
                let temp = this.dataStore[i];
                for (j = i;
                    j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
                    j -= this.gaps[g]) {
                    this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                }
                this.dataStore[j] = temp;
            }
        }
    }

    shellSortT() {
        let h = 1;
        while (h < this.numElements) {
            h = 3 * h + 1
        }
        while (h >= 1) {
            for (let i = h; i < this.numElements; i++) {
                for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h];j-=h) {
                    this.swap(this.dataStore, j, j - h)
                }
            }
            h = (h - 1) / 3
        }
        // console.log(h);
    }
}
var numElements = 50000;
var nums = new CArray(numElements);
nums.showRunTime(nums.shellSortT);
nums.showRunTime(nums.shellSort);
// nums.shellSortT()

