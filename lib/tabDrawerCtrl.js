tabDrawer = angular.module('tabDrawer', [])
tabDrawer.directive('tab', function ($parse) {
	var directiveDefinitionObject = {
		restrict: 'E',
		replace: false,
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
		} 
	};
	return directiveDefinitionObject;
   });
   
tabDrawer.controller("Ctrl", function($scope) {
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
});