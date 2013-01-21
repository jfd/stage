(function () {

  "use strict";



  function getJSON (path, C) {
    var req;

    req = new XMLHttpRequest();
    req.open("GET", path, true);
    req.send();

    req.onreadystatechange = function () {
      var graph;

      if (this.readyState == 4) {
        graph = JSON.parse(req.responseText);
        return C(graph);
      }
    }

    return req;
  }


  document.querySelector(".host").innerHTML = location.host;

  getJSON("/info/", function (context) {
    document.querySelector(".stage-version").innerHTML = context.version;
  });

})();