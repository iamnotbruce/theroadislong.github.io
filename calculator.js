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
  var bm = 60;
  var terrain = 1;
  var grade = 0;
  // pandolf=1.5*B3+2*(B3+C3)*(C3/B3)^2+D3*(B3+C3)*(1.5*E3^2+0.35*E3*F3)
  // met=((((AG3*0.0143)/5.05)/B3)*1000)/3.5
  // b = bm(kg)
  // c = load(kg)
  // d = terrain
  // e = speed(m/s)
  // f = grade(%)
  var pandolf = 1.5*bm+2*(bm+sval1)*(sval1/bm)*(sval1/bm)+terrain*(bm+sval1)*(1.5*(sval2/3.6)*(sval2/3.6)+0.35*(sval2/3.6)*grade)
  	width =((((pandolf*0.0143)/5.05)/bm)*1000)/3.5
	width = Math.round(width * 100) / 100
	elem.width = width * 10;
	elem.innerHTML = width * 1 + ' MET';
}
