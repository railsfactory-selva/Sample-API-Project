var template = require('./template.marko');
var api_request = require('./api_request.js');

var fetch_api = function(req,res){
	url = 'http://localhost:3000/user_todos.json'
  	return api_request.request(url,'GET').then(function(response){
  		try{
  			var data = {'response': response, 'code': 200}
			debugger;
  		}
  		catch(e){
  			var data = {'response': 'Something went wrong, please try again later!', 'code': 500}
  		}
  		finally{
  			return data
  		}
	})
}

module.exports = function(req,res){
	template.stream({
		ip_address : '127.0.0.1',
		device_type : 'Desktop', 		
		locale : 'en-IN',		
		is_ip_blocked: 'Internal',
		user_data: fetch_api(req,res) 
	})
	.pipe(res);
}