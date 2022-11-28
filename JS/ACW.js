//HEADER

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {

    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    })
  }
  // end if innerWidth
});
// DOMContentLoaded  end

// HEADER OVER

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-light', 'shadow');
  } else {
    nav.classList.remove('bg-light', 'shadow');
  }
});



function contactForm() {
  var name = document.getElementById('validationName').value;
  if (name == null || name == '') {
    document.getElementById('name-mandatory').style.display = "block";
  }

  var mail = document.getElementById('validationEmail').value;
  if (mail == null || mail == '') {
    document.getElementById('email-mandatory').style.display = "block";
  }

  var contact = document.getElementById('validationPhonenumber').value;
  if (contact == null || contact == '') {
    document.getElementById('phone-mandatory').style.display = "block";
  }

  var org = document.getElementById('validationOrg').value;
  if (org == null || org == '') {
    document.getElementById('org-mandatory').style.display = "block";
  }

  var msg = document.getElementById('validationMsg').value;
  if (msg == null || msg == '') {
    document.getElementById('msg-mandatory').style.display = "block";
  }
}