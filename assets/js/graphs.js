// https://www.chartjs.org/docs/latest/
var canvas = document.getElementById("pieChart");

var ctx = canvas.getContext('2d');

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;




var options = {
    title: {
        display: true,
        text: 'Reservations by food bank',
        position: 'bottom'
    },
    rotation: -0.7 * Math.PI
};






//reference: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-24.php
function ISO8601_week_no(dt) 
  {
     var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }
$.ajax({
    type: "POST",
    url: window.location.origin + "/dashboardWeeklyReservation",
    dataType: "json",
    contentType: "application/json",
    crossDomain: true,
    success: function (obj) {
        obj = obj.rows;
       
        var todaysDate = new Date();
        var currentWeek = ISO8601_week_no(todaysDate);

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var daysCount = [0,0,0,0,0,0,0];

        for(i=0;i<=obj.length-1;i++)
        {
            var dt = new Date(obj[i].createdAt);
            if(currentWeek==ISO8601_week_no(todaysDate))
            {
                daysCount[dt.getDay()]=daysCount[dt.getDay()]+1;

            }
 
        }
        var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{

            data: daysCount,
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
    
    },
    error:function(e)
    {
        alert("error");

    }
});


$.ajax({
    type: "POST",
    url: window.location.origin + "/dashboardStores",
    dataType: "json",
    contentType: "application/json",
    crossDomain: true,
    success: function (obj) {
        obj = obj.rows;
        dict = {};
        arrStores=[];
        arrValue=[];

        for(i=0;i<=obj.length-1;i++)
        {
            if(dict[obj[i].store] != undefined)
            {
                dict[obj[i].store] = dict[obj[i].store]+1;
            }
            else
            {
                dict[obj[i].store] = 1;
            }
               
            
        }
        var data = {
            labels: Object.keys(dict),
            datasets: [
                {
                    fill: true,
                    backgroundColor: [
                        'black',
                        'white','red','green','yellow','orange'],
                    data: Object.values(dict),
        
                    borderColor:	['black', 'black'],
                    borderWidth: [2,2]
                }
            ]
        };

        var myBarChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });
        
    
    },
    error:function(e)
    {
        alert("error");

    }
});

