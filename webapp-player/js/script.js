$(document).ready(function(){
	$("#sparkline").sparkline([5,6,7,2,0,2,4,5,7,2,4,12,14,4,2,14,12,7,], {
    type: 'bar',
    height: 190,
    //width:200,
    barWidth: 9,
    fillColor: '#FFF',
    barColor: '#1AB394'});
});
