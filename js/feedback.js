  $(document).ready(function(){

    // Initialize Parse with your Parse application & javascript keys
    Parse.initialize("TAaeZQjEVaG8YcT0h4wg1U3gkb5UCqtsV5xTU51P", "a4m8n9fdg19LfpYdYEZOLms260pDk7IVhgnwNjwQ");

    // Setup the form to watch for the submit event
    $('#feedback').submit(function(e){
      e.preventDefault();

      // Grab the elements from the form to make up
      // an object containing name, email and message
      var radios = document.getElementsByName('arvosana');
      var arvosanaval = 0;

  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          // do whatever you want with the checked radio
      arvosanaval = radios[i].value;

          // only one radio can be logically checked, don't check the rest
          break;
      }
    }

      var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        arvosana: arvosanaval

    }

        this.reset();

      // Run our Parse Cloud Code and
      // pass our 'data' object to it
      Parse.Cloud.run("feedback", data, {
        success: function(object) {
          $('#response').html('Palaute lahetetty!').addClass('success').fadeIn('fast');
        },

        error: function(object, error) {
          console.log(error);
          $('#response').html('Virhe! Palautetta ei lahetetty!').addClass('error').fadeIn('fast');
        }
      });
    });

  });
