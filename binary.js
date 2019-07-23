function binarySearch(arr, item) {
    var first = 0;
    var last = arr.length - 1;
    var index = -1;
    var isElement = false;
    var middle;

    while (isElement === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (arr[middle] == item) {
            index = middle;
            isElement = true;
        } else if (arr[middle] > item) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return index;
}
var arr = [1, 2, 4, 6, 8, 9, 7];
