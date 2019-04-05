# 排序算法

## 冒泡排序

1. 对一组`无序的数组`，进行两两比较，根据大小交换位置，直到最后将最大(小)的数据交换到数据尾部变成`有序数组`，从而完成一次冒泡。

2. 重复上面的步骤,直到所有的元素变为有序数  

    ```js
    function bubbleSort(arr) {
        let len = arr.length
        for (let i = len; i >= 2; i--) {
            for (let j = 0; j <= len - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
             }
            }
        }
    return arr
    }
    ```

## 选择排序

1. 从数组的开头开始，将第一个元素和其他的元素比较，将最小的元素放在开头。

2. 然后从第二元素开始和后面的元素进行比较，将最小的元素放在第二个位置。

3. 重复上面过程，直到排序完成

    ```js
    function selectionSort(arr) {
        //min来标记最小元素的位置
        let min, len = arr.length;
        for (let i = 0; i<= len - 2; i++){
            for(let j= i+1; j<=i -1; j++) {
                if(arr[j] <= arr[i]){
                    min = j;
                }
            }
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
        return arr
    }
    ```

## 插入排序

1. 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。具体看下面git

    ![demo](source/insertionSort.gif)

2. 将要比较的元素赋值给`temp`,将已经排序好的元素跟`temp`进行比较,如果大于`temp`就将该元素右移动,为`temp`让出位置.

    ```js
        function (arr) {
            let temp, j,
                len = arr.length;
            for (let i = 1; i <= len - 1; i++){
                temp = arr[i];
                j= i;
                while(j > 0 && arr[j - 1] > temp){
                    arr[j] = arr[j - 1]
                    j--;
                }
                arr[j] = temp;
            }
            return arr;
        }