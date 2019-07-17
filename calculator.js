var slider1 = document.getElementById("load");
var output1 = document.getElementById("weight");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  	output1.innerHTML = this.value;
  	updateMetpbar();
	plot();
}

/*
var slider2 = document.getElementById("march");
var output2 = document.getElementById("speed");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  	output2.innerHTML = this.value;
  	updateMetpbar();
  	plot();
}
*/

function calculateMET(bm) {
	var load = document.getElementById("load").value;
	load = Number(load);
	//var speed = document.getElementById("march").value;
	//speed = Number(speed);
	var speed = 5.3;
	var terrain = 1.0;
	var grade = 0;
	var pandolf = 1.5*bm + 2.0*(bm+load)*(load/bm)*(load/bm) + terrain*(bm+load)* 1.5*(speed/3.6)*(speed/3.6) + 0.35*(speed/3.6)*grade;
	var met =((((pandolf*0.0143)/5.05)/bm)*1000)/3.5;
	return met;
}

function updateMetpbar() {
	var elem = document.getElementById("metpBar");
	var met = calculateMET(66.5);
	var width = Math.round(met * 10) / 10;
	if (width > 10){
		elem.style.width = "100%";
	} else if (width < 2.1){
		elem.style.width = "21%"
	} else {
		elem.style.width = width*10 + "%";
	}
	elem.innerHTML = width + " MET";
}

function tte(wt){
	var metp = calculateMET(wt);
	metp = Math.round(metp * 10) / 10;
	var wtt = Math.exp(9.34-0.751*metp);
	wtt = Math.floor(wtt);
	if (wtt > 225){
		wtt = 225;
	}
	return wtt;
}

var myChart;
function plot() {
	if(myChart){
	// if the chart is not undefined (e.g. it has been created)
      	// then just update the underlying labels and data for each
      	// dataset and re-render the chart
		//myChart.data.datasets[0].data = [tte(52.0), tte(59.6), tte(61.1), tte(65.5), tte(72.6), tte(88.3)];
		myChart.data.datasets[0].data = [tte(52.0), tte(59.6), tte(65.5), tte(72.6), tte(88.3)];
        	myChart.update();
	} else {
	// otherwise, this is the first time we are loading so create the chart
	var ctx = document.getElementById('myChart');
	myChart = new Chart(ctx, {
    	type: 'radar',
    	data: {
        	//labels: ['52.0kg', '59.6kg', '61.1kg', '65.5kg', '72.6kg', '88.3kg'],
		labels: ['52.0kg', '59.6kg', '65.5kg', '72.6kg', '88.3kg'],
        	datasets: [{
            	//data: [tte(52.0), tte(59.6), tte(61.1), tte(65.5), tte(72.6), tte(88.3)],
		data: [tte(52.0), tte(59.6), tte(65.5), tte(72.6), tte(88.3)],
            	backgroundColor: [
                	'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
                	'rgba(255, 206, 86, 0.2)',
                	'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)'
			//'rgba(75, 0, 130, 0.2)'
            	],
            	borderColor: [
                	'rgba(255, 99, 132, 1)',
			'rgba(255, 159, 64, 1)',
                	'rgba(255, 206, 86, 1)',
                	'rgba(75, 192, 192, 1)',
			'rgba(54, 162, 235, 1)'
			//'rgba(75, 0, 130, 1)'
            	],
            	borderWidth: 1
        	}]
    	},
    	options: {
		legend: {
        		display: false
    		},
		responsive: true,
  		maintainAspectRatio: false,
        	scales: {
			xAxes: [{
				scaleLabel: {
        				display: true,
        				labelString: 'Body Weight (kg)'
      				}
            			}],
            		yAxes: [{
				scaleLabel: {
        				display: true,
        				labelString: 'Work Tolerance (min)'
      				},
                		ticks: {
                    			beginAtZero: true
                			}
            			}]
        		}
    		}
	});
	}
}
