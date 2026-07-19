function generateContent() {

let topic = document.getElementById("topic").value;

if(topic===""){
alert("Please enter a topic.");
return;
}

document.getElementById("output").innerHTML =
"<h3>Generated Content</h3><p>You selected the topic: <b>" +
topic +
"</b></p>";

}
