var barColor = "green";
var color = "blue";
var bars = document.getElementsByClassName("bar");


async function mergeBoth(l, mid, r) {
    var left = [];
    var right = [];

    for (var i = l; i <= mid; i++)
    {
        left.push(bars[i].style.height);
        bars[i].style.background="yellow";
        await delay();
    }      

    for (var j = mid + 1; j <= r; j++)
    {
        right.push(bars[j].style.height);
        bars[j].style.background="orange";
        await delay();
    }
     
    await delay();
    var n = left.length;
    var m = right.length;
    var k = l;
    var i = 0, j = 0;

    while (i < n && j < m) {
        if (parseInt(left[i]) <= parseInt(right[j])) {
            bars[k].style.height = left[i];
            bars[k].style.background=barColor;
            i++;
        }
        else {
            bars[k].style.height = right[j];
            bars[k].style.background=barColor;
            j++;
        }
        await delay();
        k++;
    }

    while (i < n) {
        bars[k].style.height = left[i];
        bars[k].style.background=barColor;
        await delay();
        k++;
        i++;
    }
    while (j < m) {
        bars[k].style.height = right[j];
        bars[k].style.background=barColor;
        await delay();
        k++;
        j++;
    }
    await delay();
}



async function mergeSort(l, r) {
    if (l < r) {
        var mid = Math.floor((l + r) / 2);
        await mergeSort(l, mid);
        await mergeSort(mid + 1, r);
        await mergeBoth(l, mid, r);
    }
}


var merge = document.getElementById("MergeSort");
merge.addEventListener("click", async function () {
    document.getElementById("navbarDropdown").innerText = merge.innerText;
    await disableButtons();
    await mergeSort(0, bars.length - 1);
    await enableButtons();
})

