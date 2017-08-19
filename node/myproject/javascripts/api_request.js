var node_request = require('request');

module.exports = (function(){
	var makeRequest = function(request_url,method,post_data){
		return new Promise(function(resolve, reject) {
			var start_time =  new Date();
			if(method == "GET"){
				request_url = request_url+'&device_type=Desktop';
			}
			else if(method == "POST"){
				post_data.device_type = 'Desktop';
			}
			node_request({
				method: method,
	    		url: request_url,
	    		form: post_data||""
				},function (error, response, body) {
			       	if (!error && (response.statusCode < 500)) {
			         	inter_time = new Date();
			         	try{
			         		var parsed_response = JSON.parse(response.body)
			         	}
			         	catch(error){
			         		var parsed_response = {code: false, message: "Oops something went wrong", error:"API JSON Parse error"}	
			         	}
			         	finally{
			         		resolve(parsed_response);
			     		}
			     	}
			       	else{
			       		//Reject is not used as it was not required
			         	resolve({code: false, message: "Oops something went wrong", error:"500 from API"});
			     	}
		    	}
		    )
	    })
	}
	var request = function(request_url,method,post_data){
		return makeRequest(request_url,method,post_data);
	}		
	return {
		request : request
	}
})();