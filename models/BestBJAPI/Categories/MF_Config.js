define([],function(){
	var mappings = {
		"CategoryId" : "CategoryId",
		"Name" : "Name",
	};
	Object.freeze(mappings);
	
	var typings = {
		"CategoryId" : "string",
		"Name" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"CategoryId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "BestBJAPI",
		tableName : "Categories"
	};
	Object.freeze(config);
	
	return config;
})
