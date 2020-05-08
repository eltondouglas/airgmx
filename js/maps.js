function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-22.618827234831404, -42.57636812499999),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

  }

