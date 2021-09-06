var barColor = "green";
var color="blue";

async function bubbleSort()
{
    var bars=document.getElementsByClassName("bar");
    for(var i=0;i<bars.length-1;i++)
    {
        for(var j=0;j<bars.length-1-i;j++)
        {
            bars[j].style.background="Yellow";
            bars[j+1].style.background="Yellow";
            await delay();

            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height))
            {
               await delay();
               swap(bars[j],bars[j+1]);
            }
            bars[j].style.background=color;
            bars[j+1].style.background=color;
        }
       bars[bars.length-1-i].style.background=barColor; 
    }
    bars[0].style.background=barColor;
}

var bubble=document.getElementById("BubbleSort");
bubble.addEventListener("click",async function(){
    document.getElementById("navbarDropdown").innerText=bubble.innerText;
    await disableButtons();
    await bubbleSort();
    await enableButtons();
});