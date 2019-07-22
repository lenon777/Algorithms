var arr = [5, 3, 6, 2, 9, 1];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    var a = 0;
    var b = 0;
    while (a < left.length && b < right.length) {
        if (left[a] < right[b]) {
            result.push(left[a]);
            a++;
        } else {
            result.push(right[b]);
            b++;
        }
    }
    return result.concat(left.slice(a)).concat(right.slice(b));

}