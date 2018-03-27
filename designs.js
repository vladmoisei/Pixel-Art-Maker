// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// Initiate variable for heght, weight
	const inputHeight = document.querySelector('#inputHeight').value;
	const inputWeight = document.querySelector('#inputWeight').value;

	// Function for making row for the weight given
	function makeRow(){
		let rowHTML = "";
		for (let i = 0; i < inputWeight; i++){
			rowHTML += "<td></td>";
		};
		return rowHTML;
	}

	// Function for making rows for the height given
	function makeRows(){
		let rowsHTML = "";
		for (let i = 0; i < inputHeight; i++){
			rowsHTML += "<tr>" + makeRow() + "</tr>\n";
		};
		return rowsHTML;
	}

	return makeRows();
}

//Click event listener for submit button
document.querySelector('#sizePicker').addEventListener('submit', function (e){
	e.preventDefault(); //prevent page to reload

	//Add grid
	document.querySelector('#pixelCanvas').innerHTML = makeGrid();

    //Add click event for each cell to change background-color
    document.querySelectorAll('td').forEach(e => e.addEventListener("click", function() {
    	let color = document.querySelector('#colorPicker').value;
		this.style.backgroundColor = color;
    }));
});