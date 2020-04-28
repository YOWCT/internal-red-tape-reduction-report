// Page JS for the Internal Red Tape Reduction Report
// Created 2020-04-27

var app = app || {};

app.toggleImage = function (targetId) {
  var elem = $("#" + targetId);
  var isVisible = $(elem).data("target-visible") == "1";

  if (isVisible) {
    // Hide the image
    $("#" + targetId + " .irt-image-img").hide();
    $("#" + targetId + " .irt-toggle-image").text("Show image");
    $(elem).data("target-visible", "0");
  } else {
    // Show the image
    $("#" + targetId + " .irt-image-img").show();
    $("#" + targetId + " .irt-toggle-image").text("Hide image");
    $(elem).data("target-visible", "1");
  }
};

$(function () {
  $(".irt-print-current").on("click", function (e) {
    window.print();
  });

  $(".irt-toggle-image").on("click", function (e) {
    var elem = $(e.currentTarget);
    var target = $(elem).data("target-img");
    app.toggleImage(target);
  });
});
