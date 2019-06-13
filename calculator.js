var slider1 = document.getElementById("load");
var slider2 = document.getElementById("march");
var output1 = document.getElementById("weight");
var output2 = document.getElementById("speed");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  calculate();
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  calculate();
}

function calculate() {
	var elem = document.getElementById("metpBar");
	var load = document.getElementById("load").value;
	var speed = document.getElementById("march").value;
	var bm = 60.0;
	var terrain = 1.0;
	var grade = 0;
  // pandolf=1.5*B3+2*(B3+C3)*(C3/B3)^2+D3*(B3+C3)*(1.5*E3^2+0.35*E3*F3)
  // met=((((AG3*0.0143)/5.05)/B3)*1000)/3.5
  // b = bm(kg)
  // c = load(kg)
  // d = terrain
  // e = speed(m/s)
  // f = grade(%)
	load = Number(load);
	speed = Number(speed);
	var pandolf = 1.5*bm + 2.0*(bm+load)*(load/bm)*(load/bm) + terrain*(bm+load)* 1.5*(speed/3.6)*(speed/3.6) + 0.35*(speed/3.6)*grade;
	var met =((((pandolf*0.0143)/5.05)/bm)*1000)/3.5;
	var width = Math.round(met * 100) / 100;
	if (width > 10){
		elem.style.width = "100%";
	} else {
		elem.style.width = width*10 + "%";
	}
	elem.innerHTML = width + " MET";
}

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
