noobGuitarChords.directive('tab', function ($parse) {
	var directiveDefinitionObject = {
		restrict: 'E',
		replace: false,
		scope: {data: '=data'},
		link: function (scope, element, attrs) {
			string_dest = 60;
			fretwire_dest = 80;
			var tab = d3.select(element[0])
						.append("svg:svg")
						.attr("width", string_dest * 5 + 80)   
						.attr("height", fretwire_dest * 4 + 80); 
			x = 0 + 40;
			y = fretwire_dest/2 + 40;

			d3StringFret = [];
			d3StringName = [];
			originalStringScale = [4, 9, 4, 7, 11, 7];
			//draw fretwire
			for(i = 0; i < 5; i++) {
				tab.append("svg:line")
					.attr("x1", x)
					.attr("y1", y + i * fretwire_dest)
					.attr("x2", x + string_dest * 5)
					.attr("y2", y + i * fretwire_dest)
					.style("stroke", "rgb(0, 0, 0)")
					.style("stroke-width", 4);
			}
			//draw string & fret
			for(string_i = 0; string_i < 6; string_i++) {
				d3StringFret[string_i] = [];
				d3StringName[string_i] = tab.append("text")
											.attr('x', x + string_i * string_dest - 10)
											.attr('y', y - fretwire_dest/2)
											.style('font-size', '24px')
											.style('font-weight', 'bold')
											.text(twelveTonesScale2Name[originalStringScale[string_i]]);
				tab.append("svg:line")
						.attr("x1", x + string_i * string_dest)
						.attr("y1", y)
						.attr("x2", x + string_i * string_dest)
						.attr("y2", y + 6 * fretwire_dest)
						.attr("calss", "string")
						.style("stroke", "rgb(0, 0, 0)")
						.style("stroke-width", 4);

				for(fret_i = 1; fret_i < 5; fret_i++) {
					prev_y = y + (fret_i - 1) * fretwire_dest;
					d3StringFret[string_i][fret_i] = tab.append("svg:circle")
														.style("fill", "steelblue")
														.attr("cx", x + string_i * string_dest)
														.attr("cy", prev_y + fretwire_dest/2)
														.attr("visibility", "hidden")
														.attr("r", 10);
				}
			}
			console.log(scope.data);
			scope.data.forEach(function(fret, string){
				if(fret == 'x') {
					d3StringName[string].text('X');
				} else if(fret > 0){
					d3StringFret[string][fret].attr("visibility", "visible");
					scale = originalStringScale[string];
					scale = (scale + fret) % 12;
					d3StringName[string].text(twelveTonesScale2Name[scale]);
				}
			});
		}
	};
	return directiveDefinitionObject;
   });
   
