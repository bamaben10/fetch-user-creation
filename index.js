var objPeople = [
  {
    firstName: "ben",
    lastName: "sal",
    password: "codify",
    email: "sam@codify.com",
    password: "Bama",
  },
];

function getInfo() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("password");

  for (let i = 0; i < objPeople.length; i++) {
    if (
      (firstName =
        objPeople[i].firstName &&
        lastName == objPeople[i].lastName &&
        password == objPeople[i].password &&
        email == objPeople[i].email)
    ) {
      return;
    }
  }
  console.log("You have successfully created a user login");
}
