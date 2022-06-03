var button = document.getElementById("button");
button.addEventListener("click",displayDetails);
var row = 1;
var x=0;
var list1 = [];
var list2 = [];

function displayDetails(){ 

       var sath = document.getElementById("name").value;

    var sun = document.getElementById("skill").value;

    var table= document.getElementById("table");

    var newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

}