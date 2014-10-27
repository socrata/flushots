//Get the flu shot event data from the socrata data set
var Socrata = function(endpoint){
	this.url = endpoint;
	this.data; 
};
//Add methods to to Socrata prototype
Socrata.prototype = {
	setData: function (data) {
		this.data = data;
	}, 
	getColumns: function (){
		var fields = [];
		var columns = Object.keys(this.data[0]);
		for (var i = 0, x = columns.length; i < x; i++){
			fields.push({name: columns[i]});
		}
		return fields;
	},
	getRows: function (){
		var rows = [];
		for (var i = 0, x = this.data.length; i < x; i++){
			rows.push(this.data[i]);
		}
		return rows;
	}
};