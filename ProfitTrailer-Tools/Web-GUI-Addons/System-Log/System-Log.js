//log menu
$( document ).ready(function() {
	
	var menu = "<ul><li>";
	menu    += "  <a id=\"system-log\" class=\"waves-effect waves-primary system-log\">";
	menu    += "	<i class=\"fa fa-book\"></i>";
	menu    += "	<span> System Log </span>";
	menu    += "  </a>";
	menu    += "</li></ul>";

   
    $("#sidebar-menu").append(menu);

	$("#system-log").click(function() {
	  $.ajax({
	   url:"/monitoring/log",
	   dataType:"text",
	   success:function(data)
	   {
		var log_data = data.substr(2).slice(0, -2).split("\",\"");
		var table_data = '<table class="table table-bordered table-striped">';
		for(var count = log_data.length; count--;)
		{
		 var cell_data = log_data[count].split("\",\"");
		 table_data += '<tr>';
		 for(var cell_count=0; cell_count<cell_data.length; cell_count++)
		 {
		  if(count === 0)
		  {
		   table_data += '<th>'+cell_data[cell_count]+'</th>';
		  }
		  else
		  {
		   table_data += '<td>'+cell_data[cell_count]+'</td>';
		  }
		 }
		 table_data += '</tr>';
		}
		table_data += '</table>';
		$("#dvPageContent").empty().append(table_data);

	   }
	  });
	});	
	
});
