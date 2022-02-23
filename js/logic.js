console.log("Jai Shree Ganesh");

// toggle - Theme - Section

// Target - switchBtn
let toggleBtn = document.querySelector('.switchBtn  input[type="checkbox"]');

// switchTheme-function-section-start-here
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("dark-theme", "dark");
    }
    // else  condition
    else {
        document.documentElement.setAttribute("dark-theme", "light");
    }
}

// Add event listener
toggleBtn.addEventListener("change", switchTheme, false);



// Calculator Code start Here ==================

// target - input id
let input = document.getElementById("input");

// take-all-inputs by calling-calculate and store all data in data
function calculate(data) {
    input.innerHTML += data;

    // all data remove
    switch (data) {
        case 'AC':
            input.innerHTML = "";
            break;
    }
}


// addition button
function equal() {
    try {
        input.innerHTML = eval(input.innerHTML);
        input.innerHTML = eval(input.innerHTML) === undefined ? 0 : (input.innerHTML);
    }

    // if wrong input show error
    catch (err) {
        // swal("ALERT")
        swal("ALERT \n Please Provide a Valid input !\n + 9 / . 6 - it Will Not Accept this input \n SORRY")
            .then((value) => {
                swal(`\nThank You \n Please try again \n 😧 😌 🧐`);
            });
            }
}


// remove data one-by-one
function Clear() {
    input.innerHTML = input.innerHTML.slice(0, -1);

}


