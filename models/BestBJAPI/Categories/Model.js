define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Categories", "objectService" : "BestBJAPI"};
	
	var setterFunctions = {
		CategoryId : function(val, state){
			context["field"]  = "CategoryId";
			context["metadata"] = (objectMetadata ? objectMetadata["CategoryId"] : null);
			state['CategoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Name : function(val, state){
			context["field"]  = "Name";
			context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
			state['Name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function Categories(defaultValues){
		var privateState = {};
			context["field"]  = "CategoryId";
			context["metadata"] = (objectMetadata ? objectMetadata["CategoryId"] : null);
			privateState.CategoryId = defaultValues?(defaultValues["CategoryId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CategoryId"], context):null):null;
			context["field"]  = "Name";
			context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
			privateState.Name = defaultValues?(defaultValues["Name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Name"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"CategoryId" : {
					get : function(){
						context["field"]  = "CategoryId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CategoryId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CategoryId, context);},
					set : function(val){
						setterFunctions['CategoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Name" : {
					get : function(){
						context["field"]  = "Name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Name, context);},
					set : function(val){
						setterFunctions['Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.CategoryId = value?(value["CategoryId"]?value["CategoryId"]:null):null;
					privateState.Name = value?(value["Name"]?value["Name"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Categories);
	
	//Create new class level validator object
	BaseModel.Validator.call(Categories);
	
	var registerValidatorBackup = Categories.registerValidator;
	
	Categories.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Categories.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	Categories.relations = relations;
	
	Categories.prototype.isValid = function(){
		return Categories.isValid(this);
	};
	
	Categories.prototype.objModelName = "Categories";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	Categories.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBJAPI", "Categories", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	Categories.clone = function(objectToClone) {
		var clonedObj = new Categories();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return Categories;
});