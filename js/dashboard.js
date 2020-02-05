// Get the modal
var modal = document.getElementById("EnvelopeModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnEnv");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var confirm = document.getElementsByClassName("modal-wrapper")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  confirm.style.display = "none";
  confirmSMS.style.display = "none";
  $('.w-form-done').css('display', 'none');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modalSMS = document.getElementById("SMSModal");

// Get the button that opens the modal
var btnSMS = document.getElementById("myBtnSMS");

// Get the <span> element that closes the modal
var spanSMS = document.getElementsByClassName("close")[1];

var confirmSMS = document.getElementsByClassName("modal-wrapper")[1];

// When the user clicks the button, open the modal 
btnSMS.onclick = function() {
  modalSMS.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSMS.onclick = function() {
  modalSMS.style.display = "none";
  confirmSMS.style.display = "none";
  confirm.style.display = "none";
  $('.w-form-done').css('display', 'none');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSMS) {
    modalSMS.style.display = "none";
  }
}

var purchaseEnv = document.getElementById('purchaseEnv');

purchaseEnv.onclick = function() {
	$('.w-form-done').css('display', 'block');
}

var purchaseSMS = document.getElementById('purchaseSMS');

purchaseSMS.onclick = function() {
	console.log('SMS');
	$('.w-form-done').css('display', 'block');
}

$('.cancel').click(function(){
  $('.w-form-done').css('display', 'none');
});