document.getElementById("fitnessForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let goal = document.getElementById("goal").value;

    // BMI Calculation
    let bmi = (weight / (height * height)).toFixed(2);
    let bmiCategory = "";

    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 25) bmiCategory = "Normal";
    else if (bmi < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    document.getElementById("bmiResult").innerHTML =
        `<p><b>BMI:</b> ${bmi}</p><p><b>Category:</b> ${bmiCategory}</p>`;

    // Fitness Suggestions
    let fitnessPlan = "";
    let dietPlan = "";

    if (goal === "Weight Loss") {
        fitnessPlan = "Cardio (Running, Cycling), Yoga, Home workouts – Beginner to Intermediate.";
        dietPlan = `
        Breakfast: Oats, Fruits<br>
        Lunch: Brown rice, Dal, Veg curry<br>
        Dinner: Roti, Sabzi<br>
        Snacks: Nuts, Fruits`;
    } 
    else if (goal === "Weight Gain") {
        fitnessPlan = "Strength training, Resistance workouts – Intermediate.";
        dietPlan = `
        Breakfast: Milk, Banana, Eggs<br>
        Lunch: Rice, Chicken/Paneer<br>
        Dinner: Roti, Dal, Veg<br>
        Snacks: Peanut butter, Dry fruits`;
    } 
    else if (goal === "Muscle Build") {
        fitnessPlan = "Strength + Cardio, Gym workouts – Advanced.";
        dietPlan = `
        Breakfast: Eggs, Oats<br>
        Lunch: Chicken/Fish, Rice<br>
        Dinner: Paneer, Roti<br>
        Snacks: Protein shakes`;
    } 
    else {
        fitnessPlan = "Yoga, Walking, Light cardio – Beginner.";
        dietPlan = `
        Breakfast: Fruits, Idli<br>
        Lunch: Rice, Veg curry<br>
        Dinner: Light roti meal<br>
        Snacks: Sprouts`;
    }

    document.getElementById("fitnessResult").innerHTML = `<p>${fitnessPlan}</p>`;
    document.getElementById("dietResult").innerHTML = `<p>${dietPlan}</p>`;
});
