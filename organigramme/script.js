google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{v:'HUGO', f:'HUGO<div style="color:red; font-style:italic">Président</div>'},
     '', 'CEO'],
     [{v:'NORA', f:'NORA<div style="color:red; font-style:italic">Ingénieure commerciale</div>'},
     'HUGO', ''],
    [{v:'MARINE', f:'MARINE<div style="color:green; font-style:italic">Commerciale</div>'},
     'NORA', 'VP'],
     [{v:'MARLENE', f:'MARLENE<div style="color:green; font-style:italic">Secrétaire</div>'},
     'HUGO', 'VP'],
    ['IMENE', 'MARINE', ''],
    ['ION', 'MARINE', ''],
    ['CHRISTOPHE', 'MARINE', '']
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml:true});
}