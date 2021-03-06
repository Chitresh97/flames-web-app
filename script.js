console.log("Script running");

function findCommonCharacters(firstName, secondName) {
  let firstNameLength = firstName.length;
  let secondNameLength = secondName.length;
  let count = 0;
  if (firstNameLength < secondNameLength) {
    let temp = firstName;
    firstName = secondName;
    secondName = temp;
    firstNameLength = firstName.length;
    secondNameLength = secondName.length;
  }

  console.log(firstName, secondName);
  for (let i = 0; i < firstNameLength; i++) {
    for (let j = 0; j < secondNameLength; j++) {
      if (firstName.charAt(i) == secondName.charAt(j)) {
        console.log(firstName.charAt(i));
        count = count + 2;
        secondName =
          secondName.substring(0, j) +
          secondName.substring(j + 1, secondName.length);
        console.log(secondName);
        break;
      }
    }
  }
  return count;
}
function findFlames() {
  document.getElementById("printCaption").innerHTML = "";
  const firstName = document.getElementById("firstname").value;
  const secondName = document.getElementById("secondname").value;

  if (firstName == secondName) {
    if (firstName == "" || secondName == "") {
      alert("Name fields can't be empty");
    } else alert("First and second name can't be same!");
  }
  const firstNameLength = firstName.length;
  const secondNameLength = secondName.length;
  let flames = "FLAMES";

  let commonCharacters = findCommonCharacters(firstName, secondName);
  let remainingCharacters =
    firstNameLength + secondNameLength - commonCharacters;
  console.log(commonCharacters);
  console.log(remainingCharacters);

  let temp = remainingCharacters;

  while (temp > flames.length) {
    temp = temp - flames.length;
  }

  for (let i = 0; i < 5; i++) {
    while (temp > flames.length) {
      temp = temp - flames.length;
    }
    flames =
      flames.substring(0, temp - 1) + flames.substring(temp, flames.length);
    if (temp > flames.length) {
      temp = remainingCharacters - flames.length;
    }

    console.log(flames);
  }

  let status = null;
  let caption = null;
  switch (flames) {
    case "F":
      status = "You are just Friends!";
      break;
    case "L":
      status = "You guys are deeply in Love!";
      break;
    case "A":
      status = "Haaw! Affair";
      break;
    case "M":
      status = "Congrats! You guys will get Married.";
      break;
    case "E":
      status = "Enemies for life!";
      break;
    case "S":
      status = "Yikes! Siblings";
      break;
  }
  document.getElementById("prediction").className += "predictionStyling";
  document.getElementById("printStatus").innerHTML = status;
  if (caption != null) {
    document.getElementById("printCaption").innerHTML = caption;
  }
}
