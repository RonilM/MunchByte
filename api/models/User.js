/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {


  attributes: {

	  name: {
	  type: 'string',
	  required: true
	  },
	  email: {
	  type: 'string',
	  unique: true,
	  required: true
	  },
	  password: {
	  type: 'string',
	  required: true
	  },


  },

  beforeCreate: function (values, cb){
	  	var bcrypt = require('bcrypt');
	    	bcrypt.hash(values.password, sails.config.globalVars.SaltValue, function(err, hash) {
	        	values.password = hash;
	        	return cb();
	    	});
	 },

findOneWithPasswordHash: function (values,callback){
	  	var bcrypt = require('bcrypt');

       	sails.models.user.findOne({email: values.email}).exec(function FindOneResult(err, found){
        	if(err!=null) {
        		return callback(err,found);
        	}
        	else if(found == null) {
        		err = new Error();
    				err.message = "Incorrect Email";
    				return callback(err,found);
        	}
        	else{
	        	bcrypt.compare(values.password, found.password, function(err, res) {

				    if(res == true)
				    	return callback(null,found);
				    else{
				    	err = new Error();
  						err.message = "Incorrect Password";
  						return callback(err,found);
				    	}
				});
			}
		});
}




};
