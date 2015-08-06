/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	login: function (req, res){
		req.session.authenticated = true;
		return res.json({ todo: 'Login not implemented yet' });
	},

	logout: function (req, res){
		return res.json({ todo: 'Logout not implemented yet' });
	}

};

