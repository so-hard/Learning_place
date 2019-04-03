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
    }
    ```