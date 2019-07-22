var arr = [5, 3, 6, 2, 9, 1];
function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var pivot = arr[arr.length - 1];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    var a = quick(left);
    var b = quick(right);
    a.push(pivot);
    return a.concat(b);
}

quick(arr);