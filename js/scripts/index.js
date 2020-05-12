
// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end

// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.XYChart);

// // Add data
// chart.data = [{
//     "date": new Date(2018, 3, 20, 9, 0),
//     "value": 21
// }, {
//     "date": new Date(2018, 3, 20, 10, 0),
//     "value": 22
// }, {
//     "date": new Date(2018, 3, 20, 11, 0),
//     "value": 24
// }, {
//     "date": new Date(2018, 3, 20, 12, 0),
//     "value": 30
// }, {
//     "date": new Date(2018, 3, 20, 13, 0),
//     "value": 21
// }, {
//     "date": new Date(2018, 3, 20, 14, 0),
//     "value": 27
// }];

// // Create axes
// var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
// dateAxis.renderer.grid.template.location = 0.5;
// dateAxis.renderer.minGridDistance = 40;

// var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.renderer.grid.template.disabled = true;
// valueAxis.renderer.labels.template.disabled = true;

// // Create series
// var series = chart.series.push(new am4charts.LineSeries());
// series.tooltipText = "{date}\n[bold font-size: 17px]value: {valueY}[/]";
// series.dataFields.valueY = "value";
// series.dataFields.dateX = "date";
// series.strokeWidth = 2

// var bullet = series.bullets.push(new am4charts.CircleBullet());
// bullet.circle.fill = am4core.color("#fff");
// bullet.circle.strokeWidth = 3;

