"use strict";
var calendar;
function openCalendar() {
var propertyWidth = 600;
var propertyHeight = 400;
var winleft = (screen.width - propertyWidth) / 2;
var wintop = (screen.height - propertyHeight) / 2;
var winoption = "Width = 600, Height =400";
winoption += ",left=" + winleft;
    winoption += ",top=" + wintop;
    calendar = window.open("calendar1.html", "open", winoption);
    setTimeout("calendar.close()",5000)
}


function runCalendar() {
    openCalendar();

}


if (window.addEventListener) {
    window.addEventListener("load", runCalendar(), false);

}
else if (window.atatachEvent) {
    window.attachEvent("onload", runCalendar())
}