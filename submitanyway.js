SubmitAnyway = window.SubmitAnyway || {};

SubmitAnyway = function() {
	
	//filter form elements with same name
	merge = function(els) {
		var ret = [{}];
		var merged = [];
		$.each(els, function(i,el){
			console.log("name=" + el.name + ", type=" + el.type);
			var type = el.type;
			var name = el.name;
			if (merged.indexOf(name) < 0 && (type === "radio" || type === "checkbox")) {
				merged.push(name);
				$('input[name="' + name + '"]:checked').each(function() { //.serialize() ?
					var tmpEl = {"name": name, "value" : this.value};
					ret.push(tmpEl);
				});
			}
			else if (merged.indexOf(name) < 0 && type === "select-multiple") {
				merged.push(name);
				$('select[name="msel-dis2"] :selected').each(function() {
					var tmpEl = {"name": name, "value" : this.value};
					ret.push(tmpEl);
				});
			}
			
		});
		return ret;
	}
	
	//the main handler
	submitanyway = function(selector) {
		console.log("submitanyway");
	    $(selector).submit(function(ev) {
			ev.preventDefault();
			var id = this.id;
		      
			//get values of form elements with data-submitanyway attributes
			//and add them to form
			var params = merge($("[data-submitanyway]"));
			//console.log("params=", params);
			if (params != null && params.length > 0) {
				$.each(params, function(i,param){
					//console.log("adding x-temp: name=" + param.name + ", value=" + param.value);
				    $('<input />').attr('type', 'hidden')
					.attr('name', param.name)
					.attr('value', param.value)
					.attr('x-temp', null)
					.appendTo('#' + id);
				});
			}
		
			this.submit();
			//TODO: delete hidden x-temp elements if submit was done with ajax
	    });
	}
	
	return {
		"submitanyway" :  submitanyway
	}

}();
