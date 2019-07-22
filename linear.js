function linear(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
var arr = [5, 3, 6, 2, 9, 1];
linear(arr, 9);