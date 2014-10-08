'use strict';

module.exports = function updatedPlugin (schema, options) {
	//prepare arguments
	options = options || {};
	var path = options.path || 'updated';

	schema.path(path, {
		type: Date, 
		default: Date.now
	});

	schema.pre('save', function (next) {
		//I will replace this with $currentDate in the future
		this.set(path, Date.now());
		next();
	});
};