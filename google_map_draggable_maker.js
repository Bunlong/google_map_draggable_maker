// -------------------------------------------------------------------
// @author Bunlong <bunlong.van@gmail>
// Created :  6 Jun 2014 by Bunlong
// -------------------------------------------------------------------

MapDraggableMarker = function(element, lat, lng, zoom, coordsLenght, elementLat, elementLng) {
  this.element = element;
  this.lat = lat;
  this.lng = lng;
  this.zoom = zoom;
  this.coordsLenght = coordsLenght;
  this.elementLat = elementLat;
  this.elementLng = elementLng;

  this.map = new google.maps.Map(element, {
    zoom: this.zoom,
    center: new google.maps.LatLng(this.lat, this.lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.lat, this.lng),
    draggable: true
  });
}

MapDraggableMarker.prototype.addListenerToMarker = function() {
  var self = this;
  
  google.maps.event.addListener(this.marker, 'dragend', function(evt) {
    self.elementLat.val(evt.latLng.lat().toFixed(self.coordsLenght));
    self.elementLng.val(evt.latLng.lng().toFixed(self.coordsLenght));
  });
}

MapDraggableMarker.prototype.init = function() {
  this.addListenerToMarker();
  this.map.setCenter(this.marker.position);
  this.marker.setMap(this.map);
}