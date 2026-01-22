//your JS code here. If required.


let form=document.querySelector('form');

form.addEventListener('submit',function(e){
	e.preventDefault();

    let name=document.getElementhttps://www.svgrepo.com/show/345221/three-dots.svgById("name").value.trim();

    let age=document.getElementById("age").value.trim();

	https://www.svgrepo.com/show/345221/three-dots.svg
	if(name=="" || age==""){
		alert("Please enter valid details.");

		return;
	}

	// Call Promise. Because access the data of age and name.

	youVote(age,name)
	.then((res)=>{
		document.write(res);
	})
    .catch((err)=>{
		document.write(err);
	})
})

function youVote(age,name){
	return new Promise((resolve,reject)=>{
		if(age>=18){
			setTimeout(()=>{
				resolve(`Welcome, ${name}. You can vote.`);
			},4000);
			
		}else{
			setTimeout(()=>{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			},4000);
			
		}
	})
}