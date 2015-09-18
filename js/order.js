$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("TAaeZQjEVaG8YcT0h4wg1U3gkb5UCqtsV5xTU51P", "a4m8n9fdg19LfpYdYEZOLms260pDk7IVhgnwNjwQ");

  // Setup the form to watch for the submit event
  $('#order').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var radios = document.getElementsByName('arvosana');
    var palvelualttius_ = 0;
    var tavoitettavuus_ = 0;
    var huoltoarvosana_ = 0;
    var lopputulos_ = 0;
    var viimeistely_ = 0;
    var tasmallisyys_ = 0;
    var ystavallisyys_ = 0;
    var siisteys_ = 0;
    var ammattitaito_ = 0;
    var tiedonkulku_ = 0;
    var hintalaatu_ = 0;
    var arvosana_ = 0;



    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        arvosana_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  var  radios1 = document.getElementsByName('palvelualttius');
    for (var i = 0, length = radios1.length; i < length; i++) {
      if (radios1[i].checked) {
        // do whatever you want with the checked radio
        palvelualttius_ = radios1[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    var radios2 = document.getElementsByName('tavoitettavuus');
    for (var i = 0, length = radios2.length; i < length; i++) {
      if (radios2[i].checked) {
        // do whatever you want with the checked radio
        tavoitettavuus_ = radios2[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('huoltoarvosana');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        huoltoarvosana_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('lopputulos');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        lopputulos_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('viimeistely');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        viimeistely_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('tasmallisyys');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        tasmallisyys_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('ystavallisyys');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        ystavallisyys_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('siisteys');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        siisteys_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('ammattitaito');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        ammattitaito_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('tiedonkulku');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        tiedonkulku_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    radios = document.getElementsByName('hintalaatu');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        hintalaatu_ = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }


    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
      arvosana: arvosana_,
      palvelualttius: palvelualttius_,
      tavoitettavuus: tavoitettavuus_,
      huoltoarvosana:  huoltoarvosana_,
      lopputulos: lopputulos_,
      viimeistely:  viimeistely_,
      tasmallisyys: tasmallisyys_,
      siisteys: siisteys_,
      ammattitaito: ammattitaito_,
      tiedonkulku: tiedonkulku_,
      hintalaatu: hintalaatu_
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
