const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const paypalRadio = document.getElementById("paypal");
  const creditCartRadio = document.getElementById("creditCart");
  const contactDiv = document.getElementById("contact-information");
  const orderDiv = document.getElementById("order-summary");

  // add event listener to radio buttons
  paypalRadio.addEventListener("click", toggleDivs);
  creditCartRadio.addEventListener("click", toggleDivs);

  function toggleDivs() {
    // check if at least one radio button is selected
    if (paypalRadio.checked || creditCartRadio.checked) {
      // show the divs
      contactDiv.style.display = "block";
      orderDiv.style.display = "block";
    } else {
      // hide the divs
      contactDiv.style.display = "none";
      orderDiv.style.display = "none";
    }
  }

let currentImage = 0;

thumbnails[currentImage].classList.add('active');

function showImage(index) {
  const thumbnailImg = thumbnails[index].querySelector('img');
  mainImage.src = thumbnailImg.src;
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  thumbnails[index].classList.add('active');
  currentImage = index;
}

function nextImage() {
  currentImage++;
  if (currentImage >= thumbnails.length) {
    currentImage = 0;
  }
  showImage(currentImage);
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = thumbnails.length - 1;
  }
  showImage(currentImage);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', e => {
    e.preventDefault();
    showImage(index);
  });
});
const zoneCodeSelect = document.getElementById("zoneCode");
const flagDiv = document.getElementById("flag");

zoneCodeSelect.addEventListener("change", function() {
  const selectedOption = zoneCodeSelect.options[zoneCodeSelect.selectedIndex];
  const country = selectedOption.getAttribute("data-country");
  if (country) {
    flagDiv.innerHTML = `<img src="https://www.countryflags.io/${country}/flat/64.png">`;
  } else {
    flagDiv.innerHTML = "";
  }
});
function showInfo() {
  var radioGroup1 = document.getElementsByName("group1");
  var radioGroup2 = document.getElementsByName("group2");
  var firstName = document.getElementsByName("firstName")[0].value;
  var lastName = document.getElementsByName("lastName")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var phone = document.getElementsByName("phone")[0].value;
  var couponCode = document.getElementsByName("couponCode")[0].value;
  
  
  var selectedOption1 = "";
  for (var i = 0; i < radioGroup1.length; i++) {
    if (radioGroup1[i].checked) {
      selectedOption1 = radioGroup1[i].value;
      break;
    }
  }
  
  var selectedOption2 = "";
  for (var i = 0; i < radioGroup2.length; i++) {
    if (radioGroup2[i].checked) {
      selectedOption2 = radioGroup2[i].value;
      break;
    }
  }
  
  var infoString = "Order Cuantity: " + selectedOption1 + "\n" +
                   "Paymen method: " + selectedOption2 + "\n" +
                   "First Name: " + firstName + "\n" +
                   "Last Name: " + lastName + "\n" +
                   "Email: " + email + "\n" +
                   "Phone: " + phone + "\n" +
                   "Coupon Code: " + couponCode;
  
  alert(infoString);
}
function showContactInfo() {
  var group2Inputs = document.getElementsByName("group2");
  var contactInfoDiv = document.getElementById("contact-information");

  for (var i = 0; i < group2Inputs.length; i++) {
    if (group2Inputs[i].checked) {
      contactInfoDiv.style.display = "block";
      return;
    }
  }

  contactInfoDiv.style.display = "none";
}