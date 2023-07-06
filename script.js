function displayData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date  = document.getElementById("date").value;
    var password  = document.getElementById("password").value;
    var checkbox  = document.getElementById("checkbox").value;
    var file = document.getElementById("file").value;

    var output = document.getElementById("submitted-data");
    output.innerHTML = "<strong>Name:</strong> " + name + "<br><strong>Email:</strong> " + email + "<br><strong>Phone:</strong> " + phone+"<br><strong>date:</strong>"+date+"<br><strong>password:</strong>"+password;
}