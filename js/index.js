"use strict";

function getCurrentFooterYear(){
	let currentYear = (new Date()).getFullYear();
	document.getElementById("current-year").innerHTML = currentYear;
}