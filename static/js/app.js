// Page JS for the Internal Red Tape Reduction Report
// Created 2020-04-27

var app = app || {};

app.text = {
  showImage: "Show image",
  hideImage: "Hide image",
};

app.toggleImage = function (targetId) {
  var elem = $("#" + targetId);
  var isVisible = $(elem).data("target-visible") == "1";

  if (isVisible) {
    // Hide the image
    $("#" + targetId + " .irt-image-img").hide();
    $("#" + targetId + " .irt-toggle-image").text(app.text.showImage);
    $(elem).data("target-visible", "0");
    $(elem).addClass("d-print-none");
  } else {
    // Show the image
    $("#" + targetId + " .irt-image-img").show();
    $("#" + targetId + " .irt-toggle-image").text(app.text.hideImage);
    $(elem).data("target-visible", "1");
    $(elem).removeClass("d-print-none");
  }
};

app.hideAllImages = function () {
  $(".irt-image .irt-image-img").hide();
  $(".irt-image .irt-toggle-image").text(app.text.showImage);
  $(".irt-image").data("target-visible", "0");
  $(".irt-image").addClass("d-print-none");
  Cookies.set("showImages", "0");
};

app.showAllImages = function () {
  $(".irt-image .irt-image-img").show();
  $(".irt-image .irt-toggle-image").text(app.text.hideImage);
  $(".irt-image").data("target-visible", "1");
  $(".irt-image").removeClass("d-print-none");
  Cookies.set("showImages", "1");
};

$(function () {
  // Initial page load config
  if (Cookies.get("showImages") === undefined) {
    // First run, so hide all images and set the cookie to 0
    // (Cookies are set inside the hideAllImages & showAllImages functions)
    app.hideAllImages();
    // console.log("initial load, hiding images");
  } else if (Cookies.get("showImages") === "0") {
    app.hideAllImages();
    // console.log("cookie setting = hiding images");
  } else {
    // console.log("cookie setting = showing images");
  }

  // Button click assignments:
  $(".irt-print-current").on("click", function (e) {
    window.print();
  });

  $(".irt-toggle-image").on("click", function (e) {
    var elem = $(e.currentTarget);
    var target = $(elem).data("target-img");
    app.toggleImage(target);
  });

  $(".irt-hide-all-images").on("click", function (e) {
    app.hideAllImages();
  });

  $(".irt-show-all-images").on("click", function (e) {
    app.showAllImages();
  });
});
