/*http://www.algorithmdemos.com/sorting/bucketSort.html*/
function bsort(arr, n) {
    var arr = [0.5, 0.23, 0.1, 0.3, 0.9, 0.2, 0.39]
    var n = arr.length;
    // 1) Create empty buckets
    var b = [[]];
    
    // 2) Put array elements in different buckets
    for (var i=0; i<arr.length; i++)
    {
        var bi = parseInt(n*arr[i]); // Index in bucket
        if(b[bi]==null) {
            b[bi] = [];
        }
        b[bi].push(arr[i]);
    }
 
    // 3) Sort individual buckets
    for (var i=0; i<n; i++)
        insertionSort(b[i]);
 
    // 4) Concatenate all buckets into arr[]
    var index = 0;
    for (var i = 0; i < n; i++)
        if(b[i] != null) {
            for (var j = 0; j < b[i].length; j++)
                  arr[index++] = b[i][j];
        }
    document.getElementById("display").innerHTML = "Output: " + arr;
    console.log(arr);
}

function insertionSort(items) {	
	if(items == null) {
		return null;
	}
    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section
    for (i=0; i < len; i++) {
        value = items[i];
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;
    }
    console.log(items);
    return items;
}