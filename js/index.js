$(document).ready(function () {
  var seisFotos = function () {
    $.ajax({
      async: true,
      crossDomain: true,
      url:
        "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos" +
        "&api_key=f914c5401998c21759c7504171247286" +
        "&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
      method: "GET",
      headers: {},
    }).done(function (data) {
      var item = data.photos.photo;
      for (var i = 0; i < 6; i++) {
        $("#seis-fotos").append(
          '<img src="https://farm' +
            item[i].farm +
            ".staticflickr.com/" +
            item[i].server +
            "/" +
            item[i].id +
            "_" +
            item[i].secret +
            '.jpg"/>'
        );
      }
    });
  };

  (function () {
    seisFotos();
  })();
});
