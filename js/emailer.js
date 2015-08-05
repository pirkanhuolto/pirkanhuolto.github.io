$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("TAaeZQjEVaG8YcT0h4wg1U3gkb5UCqtsV5xTU51P", "a4m8n9fdg19LfpYdYEZOLms260pDk7IVhgnwNjwQ");

  // Setup the form to watch for the submit event
  $('#contact').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    }
    this.reset();

    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("main", data, {
      success: function(object) {
        $('#response').html('Viesti lähetetty!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Virhe! Viestiä ei lähetetty!').addClass('error').fadeIn('fast');
      }
    });

  });


});
