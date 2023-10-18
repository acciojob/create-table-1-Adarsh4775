function insert_Row() {
    //Write your code here
  const newRow = document.createElement("tr");
	const leftCell = document.createElement("td");
	const rightCell = document.createElement("td");

	leftCell.textContent = "New Cell1";
	rightCell.textContent = "New Cell2";
	
	newRow.appendChild(leftCell);
	newRow.appendChild(rightCell);

	const table = document.getElementById("sampleTable");

	table.insertBefore(newRow,table.firstChild);
}

insert_Row();