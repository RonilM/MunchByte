/**
* EmployeeList.js
/*
* EmployeeList.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes:{

		FirstName:{
			type:'string'
		},

		LastName:{
			type:'string'
		},

		ContactNumber:{
			type:'string'
		},

		Department:{
			type:'string'
		},

		EmployeeRole:{
			type:'string'
		},

		Active:{
			type:'binary'
		},

		JobType:{
			type:'string'
		},

		UserId:{
			model:'user'
		}
	}
}