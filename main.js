var inviteList= document.querySelector("#invited-hedgehogs")
  var inviteButton= document.querySelector("#invite-btn")
// var name= document.querySelector("#hedgie-name")
// var hoglets= document.querySelector("#hoglets")
// var allergies= document.querySelector("#allergies")
// var inviteButton= document.querySelector("#invite-btn")

function inviteHedgie(event) {
  var name= document.querySelector("#name")
  var hoglets= document.querySelector("#hoglets")
  var allergies= document.querySelector("#allergies")
  event.preventDefault();
  inviteList.innerHTML +=
   `
    <div class="single-invite" "delete">
      <p class="name">${name.value}</p>
      <p class="hoglets">${hoglets.value}</p>
      <p class="allergies">${allergies.value}</p>
      <button class="uninvite">UNINVITE</button>
    </div>`;
  // inviteList.addEventListener("click", uninviteHedgie);
};

inviteButton.addEventListener("click", inviteHedgie);

inviteList.addEventListener("click", uninviteHedgie);

function uninviteHedgie(event) {
  if (event.target.classList.contains("uninvite")){
    console.log("I was clicked");
   event.target.parentElement.remove()
   }
  }
