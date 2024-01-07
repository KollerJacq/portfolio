/*var btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var body =
    "name: " + name + "<br/> email: " + email + "<br/> message: " + message;

});*/

function Send() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var body =
    "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + message;
  console.log(body);

  Email.send({
    SecureToken: "3a857544-a2aa-494b-b723-dabaa264e53e",
    To: "koller.jacqueline@outlook.de",
    From: "koller.jacqueline@outlook.de",
    Subject: "contact form",
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thanks for messaging me! ",
        text: "I'll come back to you soon!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Something went wrong",
        text: "Make sure to fill every form correctly",
        icon: "error",
      });
    }
  });
}
