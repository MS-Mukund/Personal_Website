function NavHover(Elem)
{
    // changes the color to GREEN
    Elem.style.color = "#14f15e";     
}

function NavOut(Elem)
{
    // changes color back to WHITE
    Elem.style.color = "white";
}


function ButtonHover(Elem)
{
    Elem.style.color = "rgba(255, 158, 231, 0.986)";
}

function ButtonOut(Elem)
{
    Elem.style.color = "white";
}

function LinkHover(Elem)
{
    Elem.style.backgroundColor = "rgb(228, 215, 40)";
}

function LinkOut(Elem)
{
    Elem.style.backgroundColor = "transparent";
}

function ClinkHover(Elem)
{
    Elem.style.color = "brown";
}

function ClinkOut(Elem)
{
    Elem.style.backgroundColor = "transparent";
    Elem.style.color = "black";
}

var NameArr = new Array();
var SkillDict = {};  
var profDict = {}; 

function AppendRow() {      //for the dynamic addition of table
    // retrieving the data      
    var name = document.getElementById("name").value;
    var skill = document.getElementById("skill").value;
    var table = document.getElementById("FormTable");
    var prof = document.getElementById("level").value;
  
    // storing the data 
    NameArr.push(name);
    SkillDict[name] = skill;
    profDict[name] = prof;
    
    // creating a row
    var Numrows = table.rows.length;
    var row = table.insertRow(Numrows);  // inserts empty row
    
    // inserting the cells
    row.insertCell(0).innerHTML= name;    // fills first cell
    row.insertCell(1).innerHTML= skill;
    row.insertCell(2).innerHTML= prof; 
}

//////////////////////////////////////////

var ptr = 0;
function Display()
{
    var NumSlide = document.getElementsByClassName("pics");

    for ( var i = 0; i < NumSlide.length; i++ )
    {
        NumSlide[i].style.display = "none";  // Hide ALL images
    }
    NumSlide[ptr].style.display = "block";    // Display ONLY the 'ptr' image
}

function Increment()
{
    ptr++;    // picture number - 0 1 2 3 4, 0 1 2 3 4 
    ptr %= 5;   
    Display(ptr);
}

function Decrement()
{
    ptr--;      // picture number
    ptr += 5;
    ptr %= 5;
    
    Display();
}

