// Create a root reference
var name = window.location.href.split('=')[1];
var storageRef = firebase.storage().ref();
var form = document.getElementById("form");
form.addEventListener('submit', uploadVideo());
var id_indicator = document.getElementById("id_indicator");
id_indicator.innerText = name;

function uploadVideo(){
	return function curried_function(event){
		if(name === ""){
			alert("Please input your ID");
		}else{
			var file = document.getElementById("vid").files[0];
			var ref = storageRef.child(name+'/'+Date.now()+'/');
			var upload = document.getElementById("upload");
			upload.innerText = "Uploading...Please don't close the browser"
			ref.put(file).then((snapshot) =>{
			alert("Finished upload. Thank you very much!");
			upload.innerText = "Finished upload. Thank you very much!."
			});
			event.preventDefault();

		}


	}
}



