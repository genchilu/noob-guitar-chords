string_dest = 60;
fretwire_dest = 80;
var tab = d3.select("#tab")
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
	for(fret_i = 0; fret_i < 5; fret_i++) {
		prev_y = y ;
		if(fret_i == 0) {
			d3StringName[string_i] = tab.append("text")
										.attr('x', x + string_i * string_dest - 10)
										.attr('y', prev_y - fretwire_dest/2)
										.style('font-size', '24px')
										.style('font-weight', 'bold')
										.text(twelveTonesScale2Name[originalStringScale[string_i]]);
		} 
		if(fret_i > 0) {
			prev_y = y + (fret_i - 1) * fretwire_dest;
			d3StringFret[string_i][fret_i] = tab.append("svg:circle")
												.style("fill", "steelblue")
												.attr("cx", x + string_i * string_dest)
												.attr("cy", prev_y + fretwire_dest/2)
												.attr("visibility", "hidden")
												.attr("r", 10);
		}
		tab.append("svg:line")
				.attr("x1", x + string_i * string_dest)
				.attr("y1", prev_y)
				.attr("x2", x + string_i * string_dest)
				.attr("y2", y + fret_i * fretwire_dest)
				.attr("calss", "string")
				.attr("id",  string_i * 10 + fret_i)
				.style("stroke", "rgb(0, 0, 0)")
				.style("stroke-width", 4)
				.on("mouseover", function(){
					d3.select(this)
						.style("stroke", "rgb(255, 0, 0)")
						.style("stroke-width", 6);
				})
				.on("mouseout", function(){
					d3.select(this)
						.style("stroke", "rgb(0, 0, 0)")
						.style("stroke-width", 4);
				});
	}
}

function redraw_string_position(opt) {
	if(opt.fret_i > 0){ 
		for(fret_i = 1 ; fret_i < 5 ; fret_i ++) {
			d3StringFret[opt.string_i][fret_i].attr("visibility", "hidden");
		}
		d3StringFret[opt.string_i][opt.fret_i].attr("visibility", "visible");
		scale = originalStringScale[opt.string_i];
		scale = (scale + opt.fret_i) % 12;
		d3StringName[opt.string_i].text(twelveTonesScale2Name[scale]);
	}
}
