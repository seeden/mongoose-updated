'use strict';

module.exports = function updatedPlugin (schema, options) {
	//prepare arguments
	options = options || {};
	
	var path = options.path || 'updated',
		pathOptions = options.pathOptions || {};

	pathOptions.type = Date;
	pathOptions.default = Date.now;


	schema.path(path, pathOptions);

	schema.pre('save', function (next) {
		//I will replace this with $currentDate in the future
		this.set(path, Date.now());
		next();
	});
};