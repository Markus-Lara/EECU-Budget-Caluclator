const careerSelect = document.getElementById("career");
const incomeDisplay = document.getElementById("income-amount");

fetch("careers.json") // Pulls data from the JSON, which has all occupations
    .then(response => response.json())
    .then(data => {

        data.forEach(job => {
            const option = document.createElement("option");

            option.value = job.Salary;
            option.textContent = job.Occupation;

            careerSelect.appendChild(option);
        });

    });

careerSelect.addEventListener("change", function () { // for the salaries

    const salary = Number(this.value);

    incomeDisplay.textContent = "$ " + salary.toLocaleString();

});
