const newUser = document.querySelector("#new-user");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#mail");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#password");

const inputs = [
  firstNameInput,
  lastNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
];

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    input.value = e.target.value;
    console.log(input.value);
  });
});

function getUserInfo() {
  axios
    .get("http://https://frontend-take-home.fetchrewards.com/form")
    .then((res) => {
      const user = res.data[0];

      const {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirmPassword,
        occupation,
        state,
      } = user;
    });

  function postInfo() {
    let body = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      occupation: occupationInput.value,
      state: stateInput.value,
    };

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", body)
      .then((res) => console.log(1, res))
      .catch((err) => console.log(err));
  }

  profileForm.addEventListener("submt", (e) => {
    e.preventDefault();
    postInfo();
  });

  getUserInfo();
}
