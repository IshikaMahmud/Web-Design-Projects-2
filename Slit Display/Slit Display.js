document.addEventListener("DOMContentLoaded", function () {
  var wrap = document.querySelector("#wrap");
  var top = document.querySelector(".top");
  var handleDiv = document.querySelector(".handle-div");
  var skew = 0;
  var delt = 0;

  if (wrap.className.indexOf("skew") != -1) {
    skew = 990;
  }
  wrap.addEventListener("mousemove", function (e) {
    delt = (e.clientX - window.innerWidth / 2) * 0.5;
    handleDiv.style.left = e.clientX + delt + "px";
    top.style.width = e.clientX + skew + delt + "px";
  });
});
