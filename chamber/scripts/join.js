const nonProfitDialog = document.querySelector("#non-profit-dialog");
const bronzeDialog = document.querySelector("#bronze-dialog");
const silverDialog = document.querySelector("#silver-dialog");
const goldDialog = document.querySelector("#gold-dialog");

const nonProfitButton = document.querySelector("#learn-more-non-profit");
const bronzeButton = document.querySelector("#learn-more-bronze");
const silverButton = document.querySelector("#learn-more-silver");
const goldButton = document.querySelector("#learn-more-gold");

const closeNonProfitDialog = document.querySelector("#close-non-profit");
const closeBronzeDialog = document.querySelector("#close-bronze");
const closeSilverDialog = document.querySelector("#close-silver");
const closeGoldDialog = document.querySelector("#close-gold");




function openDialogue(buttonId, dialogueId) {
    const button = document.querySelector(`#${buttonId}`);
    const dialogue = document.querySelector(`#${dialogueId}`);
  
    if (button !== null && dialogue !== null) {
      button.addEventListener("click", () => {
        dialogue.showModal();
      });
    }
    else
    {
      console.error(`Error: ${buttonId} or ${dialogueId} element not found.`);
    }
  }
  
  openDialogue("learn-more-non-profit", "non-profit-dialog");
  openDialogue("learn-more-bronze", "bronze-dialog");
  openDialogue("learn-more-silver", "silver-dialog");
  openDialogue("learn-more-gold", "gold-dialog");


closeNonProfitDialog.addEventListener("click", () => {
    nonProfitDialog.close();
});
closeBronzeDialog.addEventListener("click", () => {
    bronzeDialog.close();
});
closeSilverDialog.addEventListener("click", () => {
    silverDialog.close();
});
closeGoldDialog.addEventListener("click", () => {
    goldDialog.close();
});

const submitButton = document.querySelector("#submit");

 submitButton.addEventListener("click", () => {
    const timestamp = new Date().toLocaleString();
    document.querySelector("#timestamp").value = timestamp;
 });