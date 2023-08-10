const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const userHeightInput = document.getElementById("height");
const userWeightInput = document.getElementById("weight");
const submitButton = document.getElementById("btn");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");
const error = document.getElementById("error");


submitButton.addEventListener("click", function() {
    error.textContent = ""
    let userName = userNameInput.value.trim();
  let userAge = userAgeInput.value;
  let userHeight = userHeightInput.value;
  let userWeight = userWeightInput.value;

 console.log(userAge);
  if (userName === "") {
    error.textContent = "Please Input Name Field";
    return;
  } else if (userName.length <= 2) {
    error.textContent = "Please Enter More than 3 Characters";
    return;
  }

  if (userAge !== "") {
    userAge = parseInt(userAge);

    if (userAge < 2 && userAge > 100) {
      error.textContent = "You are too old or too young, sorry :( (18 - 100)";
      return;
    }
  } else if (userAge == "") {
    error.textContent = "Please Enter a Valid Age";
    return;
  }
  if (userHeight < 115 || userHeight > 200) {
    error.textContent =
      "You are too short or too tall, sorry :( (115 - 200 cm)";
    return;
  }
  if (userWeight < 15 || userWeight > 500) {
    error.textContent = "Please Enter a valid weight (15-500 kgs)";
    return;
  }
  let resultString = bmiResults(userWeight, userHeight, userAge);
  let userBMI = bmiCalcuator(userWeight, userHeight);
  result.textContent = `Hello ${userName}, your Body Mass Index is ${userBMI}. This is considered ${resultString}.`;
  resetFields();
  // result.textContent = `Hello ${userName}, your age is ${userAge}. Your are a ${userGender}. Your height is ${userHeight} and your
  //     weight is ${userWeight}.`;
});

resetButton.addEventListener("dblclick", function () {
  resetFields();
  result.textContent =
    "Hello ___, your age is ___. Your are a ____. Your height is ____ and your weight is ____.";
});

function resetFields() {
  error.textContent = "";
  userNameInput.value = "";
  userAgeInput.value = "";
  userHeightInput.value = "";
  userWeightInput.value = "";
}


function bmiCalcuator(weight, height) {
  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);
  return bmi.toFixed(1);
}

function bmiResults(weight, height, age) {
  let userBMI = bmiCalcuator(weight, height);
  // How to update to switch case: https://stackoverflow.com/questions/71698685/calculate-bmi-javascript-switch
  if (age < 20) {
    // CHILD
    if (userBMI <= 18.4) {
      return "Underweight";
    } else if (userBMI >= 18.5 || userBMI <= 24.9) {
      return "Normal";
    } else if (userBMI >= 25 || userBMI <= 39.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else {
    // ADULT
    if (userBMI < 16) {
      return "Severely Underweight";
    } else if (userBMI >= 16 || userBMI <= 18.4) {
      return "Underweight";
    } else if (userBMI >= 18.5 || userBMI <= 24.9) {
      return "Normal";
    } else if (userBMI >= 25 || userBMI <= 29.9) {
      return "Overweight";
    } else if (userBMI >= 30 || userBMI <= 34.9) {
      return "Moderately Obese";
    } else if (userBMI >= 35 || userBMI <= 35.9) {
      return "Severely Obese";
    } else {
      return "Morbidly Obese";
    }
  }
}

