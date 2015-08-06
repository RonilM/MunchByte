/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 
  attributes: {

	  userid: {
	   type: 'string',
	   unique: true,
	   required: true
	  },
	  name: {
	  type: 'string',
	  required: true
	  },
	  email: {
	  type: 'string',
	  email: true,
	  unique: true,
	  required: true
	  },
	  password: {
	  type: 'string',
	  required: true
	  }


  }
};

