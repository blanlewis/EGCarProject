//------------------------------------- Get the modal and button elements-------------
var modal = document.getElementById("myModal");                       // enter the fields pop-up(blank-field).
var modal1 = document.getElementById("myModal1");                     // thank you pop-up.
var btn = document.getElementById("myBtn");                           //Contact-us submit button.
var modalpopupparagraph = document.getElementById("modal-popup");     //pragragraph of myModal
//------------------------------------- Get the modal and button elements-------------

//-----------------------------------gets code of thank you model-----------------------
var modalpopupparagraph1 = document.getElementById("modal-popup1");   //pragragraph of myModal1


var closeOnClickModal = document.getElementById("btn-close1");         //button of myModal
var closeOnClickModal2 = document.getElementById("btn-close2");        //button of myModal1

closeOnClickModal.onclick = function () {                              //to close myModal on Okay button click
    modal.style.display = "none";
    event.preventDefault();
};

closeOnClickModal2.onclick = function () {                            //to close myModal on Okay button click
    modal1.style.display = "none";
    event.preventDefault();
};
//-----------------------------------gets code of thank you model-----------------------


// ----------------------When the user clicks anywhere outside of the modal, close it--------
window.onclick = function (event) {                                    //to close myModal on Okay button click
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.onclick = function (event) {                                    //to close myModal1 on Okay button click
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};
// ----------------------When the user clicks anywhere outside of the modal, close it--------


// -----------------Access elements input field from contact us form-----------------
var firstNameInput = document.getElementById("first-name");            //elements of first name
var lastNameInput = document.getElementById("last-name");              //elements of last name
var mobileInput = document.getElementById("mobile");                   //elements of mobile
var emailInput = document.getElementById("email");                     //elements of email
var submitButton = document.getElementById("myBtn");                   //elements of Submit
var successMesssageDisplay = document.getElementById("success-message-display");//no use now
// -----------------Access elements input field from contact us form-----------------

//------------------- Validate email format using regex------------------
submitButton.addEventListener("click", function () {
    event.preventDefault();
    var firstNameValue = firstNameInput.value;                         //values of first name
    var lastNameValue = lastNameInput.value;                           //values of last name
    var mobileValue = mobileInput.value;                               //values of mobile
    var emailValue = emailInput.value;                                 //values of email


    //Validation for contact form
    if (firstNameValue.trim() === "" && lastNameValue.trim() === "" && mobileValue.trim() === "" && emailValue.trim() === "") {
        modal.style.display = "block";                                 //Displays the hardcoded one i.e Enter the fields in myModal paragraph
    } else
        if (firstNameValue.trim() === "") {
            modal.style.display = "block";                             //if the first name field is empty 
            modalpopupparagraph.innerHTML = "Enter the first name &#x1F914;";

        }
        else if (firstNameValue && !/^[A-Z][a-z]*$/.test(firstNameValue)) {
            modal.style.display = "block";                             //if the first name field doesnt match the regex
            modalpopupparagraph.innerHTML = "The first name should start with a capital letter followed by lowercase letters &#x1F61E;";
        }
        //Same as above
        else if (lastNameValue.trim() === "") {
            modal.style.display = "block";
            modalpopupparagraph.innerHTML = "Enter the last name &#x1F914;";
        }
        else if (lastNameValue && !/^[A-Z][a-z]*$/.test(lastNameValue)) {
            modal.style.display = "block";
            modalpopupparagraph.innerHTML = "The last name should start with a capital letter followed by lowercase letters &#x1F61E;";
        }

        else if (mobileValue.trim() === "" || !mobileValue.match(/^\d{10}$/)) {
            modal.style.display = "block";
            modalpopupparagraph.innerHTML = "Enter the mobile number, 10 digit mobile number &#x1F620;";
            // modalpopupparagraph.innerHTML = `<p>Enter the mobile number</p>`;
        }
        else if (emailValue.trim() === "" || !emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            modal.style.display = "block";
            modalpopupparagraph.innerHTML = "Enter the valid gmail &#x1F620;";
            // modalpopupparagraph.innerHTML = `<p>Enter the valid gmail</p>`;
        }
        else {
            modalpopupparagraph1.innerHTML = "Thank You Dear " + firstNameValue + " " + lastNameValue + "&#x1F64F &#x1F60A;";
            modal1.style.display = "block";
        }
});
// ----------------------------JS PAYMENT POPUP-----------------------------------------------------

//-----------------------------------------------SUCCESSS-----------------------------------------
var payNowButtons = document.querySelectorAll('.card1 button'); // This line of code selects all the <button> elements inside elements with the class "card1" and stores them in the variable "payNowButtons".

// Function to hide the payment form
function hidePaymentForm() {
    var paymentForm = document.querySelector('.payment-form');
    paymentForm.style.display = 'none';
}

// Function to show the success message popup
function showSuccessPopup() {

    var cardNumber = document.getElementById("cardNumber");
    var cardNumberValue = cardNumber.value;
    console.log(cardNumberValue);


    var cardNumberPattern = /^\d{16}$/;

    if (!cardNumberPattern.test(cardNumberValue)) {
        console.log("Valid card number:" + cardNumberValue);
    }


    var successPopup = document.querySelector('.success-popup');
    successPopup.style.display = 'block';
    setTimeout(function () {
        successPopup.style.display = 'none';
    }, 3000);
}

// Get all the "Pay Now" buttons and attach a click event listener to each of them
var payNowButtons = document.querySelectorAll('.card1 button');
for (var i = 0; i < payNowButtons.length; i++) {
    payNowButtons[i].addEventListener('click', function () {
        var price = this.parentElement.querySelector('h2').textContent;
        showPaymentForm(price);
    });
}

// Get the payment form and attach a submit event listener
var paymentForm = document.getElementById('cardForm');
paymentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    showSuccessPopup();
});

// Get the "Cancel" button and attach a click event listener
var cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission (optional)
    hidePaymentForm();
});


//--------------------------------SUCCESS------------------



//---------------------------------shadow-------------------


// Function to show the payment form and set the dark shadow
function showPaymentForm(amount) {
    var paymentForm = document.querySelector('.payment-form');
    var payingAmount = document.getElementById('paying-amount');
    payingAmount.textContent = amount;
    paymentForm.style.display = 'block';


    // JavaScript code to set the background color for the element with class "main-services"
    var mainServicesElement = document.querySelector('.main-services');



}

// Function to hide the payment form and remove the dark shadow
function hidePaymentForm() {
    var paymentForm = document.querySelector('.payment-form');
    paymentForm.style.display = 'none';

    // Remove the dark shadow class from the body element
    document.body.classList.remove('dark-shadow');
}
//---------------------------------shadow-------------------


            //----------------------------JS PAYMENT POPUP-----------------------------------------------------
