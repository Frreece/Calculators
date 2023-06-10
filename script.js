function calculateHypotenuse() {
    var weightInputs = document.getElementsByClassName("weight");
    var gradeInputs = document.getElementsByClassName("grade");
    var totalPercent = 0;
    var totalGrade = 0;
    for(var i = 0; i < weightInputs.length; i++) {
        var weight = Number(weightInputs[i].value);
        var grade = Number(gradeInputs[i].value);

        if (weight > 0 && grade >= 0) {
            totalGrade += ((weight/100) * grade);
            totalPercent += weight;
        }
    }
    var targetGrade = Number(document.getElementById("Target-Grade").value);
 
    var percentLeft = 100 - totalPercent;
    console.log("totalGrade:", totalGrade);
    console.log("targetGrade:", targetGrade);
    console.log("percentLeft:", percentLeft);

    var ans = (targetGrade - totalGrade)/(percentLeft/ 100);
    var max = totalGrade + percentLeft;
    document.getElementById("Final-Grade").value = ans;
    document.getElementById("Min-Grade").value = totalGrade;
    document.getElementById("Max-Grade").value = max;
  }
  
  document.getElementById("calculate").addEventListener("click", calculateHypotenuse);
  document.getElementById("Add-Button").addEventListener("click", addGradeSection);

  function addGradeSection() {
    var container = document.querySelector(".input-container");
  
    var newSection = document.createElement("div");
    newSection.classList.add("grade-section");
  
    var weightLabel = document.createElement("label");
    weightLabel.setAttribute("for", "grade-weight");
    weightLabel.textContent = "Weight: ";
  
    var weightInput = document.createElement("input");
    weightInput.setAttribute("type", "number");
    weightInput.classList.add("weight");
    weightInput.setAttribute("placeholder", "Enter weight %");
  
    var gradeLabel = document.createElement("label");
    gradeLabel.setAttribute("for", "grade-value");
    gradeLabel.textContent = "Grade: ";
  
    var gradeInput = document.createElement("input");
    gradeInput.setAttribute("type", "number");
    gradeInput.classList.add("grade");
    gradeInput.setAttribute("placeholder", "Enter grade %");

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        container.removeChild(newSection);
    });
  
    newSection.appendChild(weightLabel);
    newSection.appendChild(weightInput);
    newSection.appendChild(gradeLabel);
    newSection.appendChild(gradeInput);
    newSection.appendChild(removeButton);

  
    container.insertBefore(newSection, document.getElementById("Add-Button"));
  }


  let display = document.getElementById("display");

  function addToDisplay(value) {
    display.value += value;
  }
  
  function clearDisplay() {
    display.value = "";
  }
  
  function backspace() {
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    let result = eval(display.value);
    display.value = result;
  }
  
