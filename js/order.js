
$(document).ready(function() {

  Parse.initialize("TAaeZQjEVaG8YcT0h4wg1U3gkb5UCqtsV5xTU51P", "a4m8n9fdg19LfpYdYEZOLms260pDk7IVhgnwNjwQ");

  $('#order').submit(function(e){
    // 1443168000000 in milliseconds
    alert('Huoltovaraus tehty: ' + eventData.title + " start: "
    + moment(eventData.start).format() +" end:" + moment(eventData.end).format());
    e.preventDefault();
    $.getJSON("https://script.google.com/macros/s/AKfycbzA6rnYphXiuedrushdbIoEkH82z91sJ_WCROyfqeIPpAHQQ97m/exec"+"?callback=?",
    {calevent:JSON.stringify(eventData)},
    function (data) {
      //	alert(JSON.stringify(data));
    });

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
      filter: document.getElementById('filter').value,
      date: moment(eventData.start).format(),
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

    // Send data to customer database

    $.getJSON("https://script.google.com/macros/s/AKfycbyjBoerBY9DKmk64ikvBbdhKK-7K99-82n1P-6l5HQMrlft5S2U/exec"+"?callback=?",
    {user:JSON.stringify(data)},
    function (data) {
      //	alert(JSON.stringify(data));
    });

  });

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    lang: 'fi',
    allDaySlot: false,
    weekends: false,
    selectable: true,
    selectHelper: true,
    slotDuration: '02:00:00',
    minTime: "8:00:00",
    maxTime: "18:00:00",
    eventOverlap: false,
    eventDurationEditable: false,

    select: function(start, end) {
      var ntoday = new Date().getTime();
      var eventStart = moment( start ).valueOf();

      if (eventStart < ntoday){
        alert('Et voi valita mennytta ajankohtaa!');
        $('#calendar').fullCalendar('unselect');
        return;
      }


      if(eventData) {
        $('#calendar').fullCalendar('removeEvents', 'huolto');
      }
      eventData = {
        title: 'huolto',
        start: start,
        end: end,
        id: 'huolto'
      };
      $('#calendar').fullCalendar('renderEvent', eventData, true);
      $('#calendar').fullCalendar('unselect');
      //data[i]["backgroundColor"]="#48850B";
      //data[i]["borderColor"]="#336600";

    },

    eventOverlap: function(stillEvent, movingEvent) {
      return true;
    },

    eventClick: function (calEvent, jsEvent, view) {

    },
    eventAfterRender: function (event, element, view) {
      if(event.id == 'huolto'){
        //  element.css('background-color', '#FFB347');

      }
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    className: 'gcal-event',
    ignoreTimezone: false,
    utc: false,
    timezone:'local',
    transmitTZD: true,
    googleCalendarApiKey: 'AIzaSyBG90v86lLbctyjPPfnwcP6qkjRVYd3Aq8',
    //events: 'idfukec862tmei8ev11ilimujc@group.calendar.google.com'
    events: {
      url:  'idfukec862tmei8ev11ilimujc@group.calendar.google.com',
      error: function() {
        $('#script-warning').show();
      },
      success: function(data){
        for(var i=0; i<data.length; i++){//The background color for past events
          //if(moment(data[i].start).isBefore(moment())){//If event time is in the past change the general event background & border color
          data[i]["backgroundColor"]="#FF0000";
          data[i]["borderColor"]="#8B0000";
          //}
        }
      }
    },
    dayRender: function(date, element, view){
      if(date.isBefore(Date.today())){
        $(element).css("background", "beige");
      }
    }
  });



});
