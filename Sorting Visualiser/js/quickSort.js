var barColor = "green";
var color = "blue";
var bars = document.getElementsByClassName("bar");


async function partition(start,end)
{
    var pivot=parseInt(bars[end].style.height);
    bars[end].style.background="black";
    bars[start].style.background="pink";
    await delay();
    var index=start;

    for(var i=start;i<end;i++)
    {
        if(index!=i)
           bars[i].style.background="yellow";
        await delay();
        if(parseInt(bars[i].style.height)<=pivot)
        {
            await swap(bars[i],bars[index]);
            index++;
        }
        bars[index].style.background="pink";
    }
    await swap(bars[index],bars[end]);
    bars[index].style.background="black";
    bars[end].style.background="yellow";
    await delay();
    
    for(var i=start;i<index;i++)
    {
        bars[i].style.background="yellow";
        await delay();
    }
    for(var i=index+1;i<=end;i++)
    {
        bars[i].style.background="orange";
        await delay();
    }

    for(var i=start;i<=index;i++)
    {
        bars[i].style.background=barColor;
        await delay();
    }
    for(var i=index+1;i<=end;i++)
    {
        bars[i].style.background=barColor;
        await delay();
    }

    return index;
}




async function quickSort(start,end)
{
   if(start<end)
   {
       var partitionIndex= await partition(start,end);
       await quickSort(start,partitionIndex-1);
       await quickSort(partitionIndex+1,end);
   }
}



var quick=document.getElementById("QuickSort");
quick.addEventListener("click",async function(){
    document.getElementById("navbarDropdown").innerText = quick.innerText;
    await disableButtons();
    await quickSort(0,bars.length-1);
    await enableButtons();
});