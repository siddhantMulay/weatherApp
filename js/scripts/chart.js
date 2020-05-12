var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["9am", "10am", "11am", "12pm", "1pm", "2pm"],
        datasets: [{
            data: [24, 27, 28, 30, 45, 30],
            fill: false,
            borderColor: '#2196f3',
            backgroundColor: '#2196f3',
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: {
                top: 15,
                bottom: 15
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                }
            }],

            xAxes: [{
                ticks: {
                    padding: 10
                },
                gridLines: {
                    drawBorder: false,
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: true,
    }
});