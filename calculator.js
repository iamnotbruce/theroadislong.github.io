var slider1 = document.getElementById("load");
var slider2 = document.getElementById("march");
var output1 = document.getElementById("weight");
var output2 = document.getElementById("speed");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  updateMetpbar();
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  updateMetpbar();
}

function calculateMET(bm) {
	var load = document.getElementById("load").value;
	var speed = document.getElementById("march").value;
	var terrain = 1.0;
	var grade = 0;
	load = Number(load);
	speed = Number(speed);
	var pandolf = 1.5*bm + 2.0*(bm+load)*(load/bm)*(load/bm) + terrain*(bm+load)* 1.5*(speed/3.6)*(speed/3.6) + 0.35*(speed/3.6)*grade;
	var met =((((pandolf*0.0143)/5.05)/bm)*1000)/3.5;
	return met;
}

function updateMetpbar() {
	var elem = document.getElementById("metpBar");
	var met = calculateMET(66.5);
	var width = Math.round(met * 100) / 100;
	if (width > 10){
		elem.style.width = "100%";
	} else {
		elem.style.width = width*10 + "%";
	}
	elem.innerHTML = width + " MET";
}

function tte(wt){
	//var metp = 
	var wtt = Math.exp(9-0.8*metp);
	wtt = Math.floor(wtt);
	return wtt;
}

function plot() {
	var ctx = document.getElementById('myChart');
	var myChart = new Chart(ctx, {
    	type: 'bar',
    	data: {
        	labels: ['50kg', '60kg', '70kg', '80kg', '90kg'],
        	datasets: [{
            	label: 'Body Weight',
            	data: [50, 60, 70, 80, 90],
            	backgroundColor: [
                	'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
                	'rgba(255, 206, 86, 0.2)',
                	'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)'
            	],
            	borderColor: [
                	'rgba(255, 99, 132, 1)',
			'rgba(255, 159, 64, 1)',
                	'rgba(255, 206, 86, 1)',
                	'rgba(75, 192, 192, 1)',
			'rgba(54, 162, 235, 1)'
            	],
            	borderWidth: 1
        	}]
    	},
    	options: {
        	scales: {
            	yAxes: [{
                	ticks: {
                    	beginAtZero: true
                	}
            	}]
        	}
    	}
	});
}
