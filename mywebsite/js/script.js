$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippets.html";
var courseHtml = "snippets/course-snippets.html"
var aboutHtml = "snippets/about-snippets.html"
var contactHtml="snippets/contact-snippets.html"
var htmlcategory = "snippets/htmlcategory-snippets.html"
var csscategory = "snippets/csscategory-snippets.html"



// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loading-png.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
});

dc.loadhomepage = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };

dc.loadMenuCategories = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  courseHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };

dc.loadaboutpage = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  aboutHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };

  dc.loadcontactpage = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  contactHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };

dc.loadhtmlcategory = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  htmlcategory,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };

dc.loadcsscategory = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
  csscategory,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
     
  },
  false);
    };


global.$dc = dc;

})(window);

// setTimeout(function, 9000);