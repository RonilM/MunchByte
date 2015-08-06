/**
 * NavigationController
 *
 * @description :: Server-side logic for managing Navigations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	homepage: function(req,res){
		return res.view('homepage');
	},

	signup: function(req,res){
		return res.view('signup',{message: ''});
	},

	login: function(req,res){
		return res.view('login',{message: ''});
	}
	
};

