var p1_name=prompt("Enter the NAME of first person");
var p2_name=prompt("Enter the NAME of second person");

var s1=0;
var s2=0;

var N1=document.getElementById("n1");
var N2=document.getElementById("n2");
N1.textContent=p1_name +" "+"-"+" "+s1;
N2.textContent=p2_name +" "+"-"+" "+s2;

var boxes=document.getElementsByClassName("box");
var x=0;
for(var i=0;i<boxes.length;i++)
{
	boxes[i].addEventListener("click",function()
{   
	
	if(x%2==0 && this.textContent=="")
	{   x++;
		this.textContent="X";
	}
    if(x%2 !=0 && this.textContent=="")
    	{
    		x++;
    		this.textContent="O";
    	}
});
}



N1.addEventListener("click",function()
{   s1++;
    N1.textContent=p1_name + " "+"-"+" " + s1;
})

N2.addEventListener("click",function()
{   s2++;
    N2.textContent=p2_name + " "+"-"+" " + s2;
})

var rset=document.querySelector(".reset");
rset.addEventListener("click",function()
{
	for(var i=0;i<boxes.length;i++)
	{
		boxes[i].textContent="";
	}
	s1=0;
	s2=0;
	N1.textContent=p1_name + " "+"-"+" " + s1;
	N2.textContent=p2_name + " "+"-"+" " + s2;
})

var ngame=document.querySelector(".newgame");
ngame.addEventListener("click",function()
{
	for(var i=0;i<boxes.length;i++)
	{
		boxes[i].textContent="";
	}
	
})
var k=0;
var Teme =document.querySelector(".theme");
Teme.addEventListener("click",function()
{
	k++;
	if(k%2 !=0)
		{
			document.body.style.background="white";

		}
	else
	{
		document.body.style.background="black";
	}
})


