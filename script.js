function insert_Row() {
const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0);
  
  const leftCell = newRow.insertCell(0);
  const rightCell = newRow.insertCell(1);

  leftCell.textContent = "New Cell1";
  rightCell.textContent = "New Cell2";
}

insert_Row();