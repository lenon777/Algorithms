function bubbleSort(arr){
    var current;
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                current = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = current;
            }
        }
    }
    return arr;
}

var arr = [4,1,2,4,7,9,0,3];