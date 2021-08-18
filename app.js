const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");
const errorMsg = document.querySelector("#error-msg");
const noOfNote = document.querySelectorAll(".no-of-note");
const tableDisplay = document.querySelector("#hide-show-table");
const nextErrorMsg = document.querySelector("#error-msg-next");
const returnChange = document.querySelector("#return-change")
const nextBtn = document.querySelector("#next-button");
const cashGivenHeading = document.querySelector("#heading-2");

const totalNote = [2000, 500, 100, 20, 10, 5, 1];
nextBtn.addEventListener("click", dataNext)
hidePart();
function dataNext() {
    cashGiven.style.display = "block";
    cashGivenHeading.style.display = "block";
    checkBtn.style.display = "block";
    if (Number(billAmount.value) > 0) {
        nextErrorMsg.style.display = "none";
    } else {
        cashGiven.style.display = "none";
        cashGivenHeading.style.display = "none";
        checkBtn.style.display = "none";
        nextErrorMsg.innerText = "Enter the valid amount";
    }

}
function hidePart() {
    cashGiven.style.display = "none";
    cashGivenHeading.style.display = "none";
    checkBtn.style.display = "none";
    returnChange.style.display = "none";
    tableDisplay.style.display = "none";
}

checkBtn.addEventListener("click", dataCheck)
function dataCheck() {
    hideMessage();
    returnChange.style.display = "block";
    tableDisplay.style.display = "block";
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const returnAmount = (Number(cashGiven.value) - Number(billAmount.value));
            calculateNote(returnAmount);

        } else {
            returnChange.style.display = "none";
            tableDisplay.style.display = "none";
            displayMessage("cash given amount should be greater than bill amount")
        }


    } else {
        returnChange.style.display = "none";
        tableDisplay.style.display = "none";
        displayMessage("amount should be greater than 0")
    }



    function calculateNote(returnAmount) {
        for (let i = 0; i < totalNote.length; i++) {
            const numberOfNotes = Math.floor(returnAmount / totalNote[i]);
            returnAmount = returnAmount % totalNote[i]
            noOfNote[i].innerText = numberOfNotes;

        }
    }

    function hideMessage() {
        errorMsg.style.display = "none";
    }

    function displayMessage(msg) {
        errorMsg.style.display = "block";
        errorMsg.innerText = msg;
    }
}