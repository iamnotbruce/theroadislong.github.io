/*
var RGBChange = function() {
	$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};

var r = $('#R').slider()
		.on('slide', RGBChange)
		.data('slider');
var g = $('#G').slider()
		.on('slide', RGBChange)
		.data('slider');
var b = $('#B').slider()
		.on('slide', RGBChange)
		.data('slider');
*/
var slider1 = document.getElementById("load");
var slider2 = document.getElementById("march");
var output1 = document.getElementById("weight");
var output2 = document.getElementById("speed");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  calculate(slider1.value,slider2.value);
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  //calculate();
}

function calculate(sval1,sval2) {
  var elem = document.getElementById("metpBar"); 
  var width = 1;
  var weight = 60;
  var terrain = 1;
  var grade = 0;
  var pandolf = 1.5*weight+2*(weight+sval1)*(sval1/weight)*(sval1/weight)+terrain*(weight+sval1)*(1.5*(sval2/3.6)*(sval2/3.6)+0.35*(sval2/3.6)*grade)
  	width =((((pandolf*0.0143)/5.05)/weight)*1000)/3.5
	width = Math.round(width * 100) / 100
	elem.width = width * 10;
	elem.innerHTML = width * 1 + ' MET';
}
