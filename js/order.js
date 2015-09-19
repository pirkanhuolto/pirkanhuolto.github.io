$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("TAaeZQjEVaG8YcT0h4wg1U3gkb5UCqtsV5xTU51P", "a4m8n9fdg19LfpYdYEZOLms260pDk7IVhgnwNjwQ");

  // Setup the form to watch for the submit event
  $('#order').submit(function(e){
    e.preventDefault();

    var date_ = 0;
    var huolto_ = "huolto";


    var  radiosPerus = document.getElementsByName('perus');
      for (var i = 0, length = radiosPerus.length; i < length; i++) {
        if (radiosPerus[i].checked) {
          // do whatever you want with the checked radio
          huolto_ = radiosPerus[i].value;

          // only one radio can be logically checked, don't check the rest
          break;
        }
      }

      var  radiosLaaja = document.getElementsByName('laaja');
        for (var i = 0, length = radiosLaaja.length; i < length; i++) {
          if (radiosLaaja[i].checked) {
            // do whatever you want with the checked radio
            huolto_ = radiosLaaja[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
          }
        }


    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      postaddress: document.getElementById('postaddress').value,
      address: document.getElementById('address').value,
      date: document.getElementById('date').value,
      huolto: huolto_

    }
    this.reset();

    // Run Parse Cloud Code
    Parse.Cloud.run("order", data, {
      success: function(object) {
        $('#response').html('Tilaus lähetetty!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Virhe! Tilausta ei lähetetty!').addClass('error').fadeIn('fast');
      }
    });

  });


});
