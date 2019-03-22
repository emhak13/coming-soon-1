var email = document.getElementById('email');

// pure JS for material labels
email.addEventListener("keyup", addingClass);

function addingClass() {
  if(email.value === "") {
    email.classList.remove('has-value')
  }
  else {
    email.classList.add('has-value')
  }
}

// hide content when modal opens
$(document).ready(function() {
  $(".read_more, .open-modal").on("click", function() {
    $(".inner-part, footer").css({
      opacity: "0"
    });
  });

  // show content when modal is closed
  $(".modal").on("hidden.bs.modal", function() {
    $(".inner-part, footer").css({
      opacity: "1"
    });
  });
});

// turns enter key to click
email.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("subBtn").click();
  }
});

//removing hashtag from link
$('#subBtn').on('click', function(e) {
  $(this).removeAttr('href');
  $(this).css({
    color: '#fff'
  })
});

// email validation
document.getElementById("subBtn").addEventListener("click", validateEmail);
function validateEmail() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var errorMsg = document.getElementById("error_msg");
  if (email.value === "" || !re.test(email.value)) {
    errorMsg.innerHTML = "Please enter a valid email address";
    email.style.borderBottom = "1.5px solid #FF1744";
    errorMsg.style.color = "rgb(183,28,28)";
    return false;
  } else {
    errorMsg.innerHTML = "Thanks, you are subscribed";
    email.style.borderBottom = "1.5px solid #28A745";
    errorMsg.style.color = "#28A745";
  }
}
