var barColor = "green";
var color="blue";

async function selectionSort()
{
    var bars=document.getElementsByClassName("bar");

    for(var i=0;i<bars.length-1;i++)
    {
        var minIndex=i;
        bars[i].style.background="black";
        await delay();
        for(var j=i+1;j<bars.length;j++)
        {
            bars[j].style.background="yellow";
            await delay();
            if(parseInt(bars[j].style.height)<parseInt(bars[minIndex].style.height))
               {
                   if(minIndex!=i)
                     bars[minIndex].style.background="yellow";
                   minIndex=j;
                   bars[j].style.background="black";
               }
        }
       swap(bars[i],bars[minIndex]); 
       for(var k=0;k<=i;k++)
         {
             bars[k].style.background=barColor;
         }
        for(var k=i+1;k<bars.length;k++)
        {
            bars[k].style.background=color;
        }
    }
    bars[bars.length-1].style.background=barColor;
}




var selection=document.getElementById("SelectionSort");
selection.addEventListener("click",async function(){
    document.getElementById("navbarDropdown").innerText=selection.innerText;
    await disableButtons();
    await selectionSort();
    await enableButtons();
});