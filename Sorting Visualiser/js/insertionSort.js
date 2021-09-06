var barColor = "green";
var color="blue";

async function insertionSort()
{
    var bars=document.getElementsByClassName("bar");
   
    bars[0].style.background=barColor;
    for (var i =1; i<bars.length;i++)
    {
        var key = bars[i].style.height;
        var j = i-1;
        bars[i].style.background="black";
        await delay();
        while (j >= 0 && (parseInt(bars[j].style.height) > parseInt(key)))
        {
            bars[i].style.background="black";
            bars[j].style.background="yellow";
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            await delay();
            for(var k=0;k<i;k++)
            {
                bars[k].style.background=barColor;
            }
        }
        bars[j+1].style.background="black";
        await delay();
        bars[j+1].style.height = key;
        bars[i].style.background=barColor;
        bars[j+1].style.background=barColor;
    }
}

var insertion=document.getElementById("InsertionSort");
insertion.addEventListener("click",async function(){
    document.getElementById("navbarDropdown").innerText=insertion.innerText;
    await disableButtons();
    await insertionSort();
    await enableButtons();
});