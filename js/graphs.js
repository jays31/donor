// https://www.chartjs.org/docs/latest/
var canvas = document.getElementById("pieChart");

var ctx = canvas.getContext('2d');

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["Snacks", "Drinks","Fruits","Meat"],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                'black',
                'white','red','green'],
            data: [5, 8,2,11],

            borderColor:	['black', 'black'],
            borderWidth: [2,2]
        }
    ]
};


var options = {
    title: {
        display: true,
        text: 'Reservations per food category',
        position: 'bottom'
    },
    rotation: -0.7 * Math.PI
};


var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});


var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [{

            data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            xAxes: [{
                ticks: {
                    maxRotation: 90,
                    minRotation: 80
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Reservations this week',
            position: 'bottom'
        },
        legend: {
            display: false
        }
    }
});