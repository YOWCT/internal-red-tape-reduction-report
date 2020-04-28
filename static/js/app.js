// Page JS for the Internal Red Tape Reduction Report
// Created 2020-04-27

var app = app || {};

$(function () {
  $(".irt-print-current").on("click", function (e) {
    window.print();
  });
});
