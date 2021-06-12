// Create a root reference
var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("Please input your experiment ID obtained from Goolge form.");
	}else{
		alert("Experiment ID updated.");
		window.location.href = "./instructions.html?id="+name;
	}
	event.preventDefault();
}


