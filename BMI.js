const form = document.querySelector("form");
const results = document.querySelector("#results"); // match HTML ID

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    results.className = "";

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Invalid height entry: ${height}`;
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Invalid weight entry: ${weight}`;
        return;
    
        }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
        results.classList.add("underweight");
        results.innerHTML =`${bmi} you are Underweight`;
    }
    else if (bmi >= 18.6 && bmi <= 24.5) {
        results.classList.add("normal");
        results.innerHTML =`${bmi} you are Healthy`;
    }
    else if (bmi >24.5) {
        results.classList.add("overweight");
        results.innerHTML =`${bmi} you are Overweight`;
    }
  
});
