document.getElementById("career").addEventListener("change", function() {
    const num = this.value;
    const job = document.getElementById("income-amount");
    job.textContent = num;
    console.log(job);
    return;
});


function estimated(){//adds value into estimated table
    document.getElementById('student-est').innerHTML = `${}`//call function that produces value for this section here when it's created
}



document.addEventListener("DOMContentLoaded", init);