/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	login: function (req, res){

		User.findOne({email: req.param('email'), password: req.param('password')}).exec(function findOneResult (err, found){
			if(err != null){
					return res.view('login',{message: err.message});
				}
			else if(found!=null){
				req.session.authenticated = true;
				return res.redirect('/');
			}
				return res.view('login',{message: 'Incorrect Username or Password...'});

		});
	},

	logout: function (req, res){
		req.session.authenticated = false;
		return res.json({ todo: 'Logout not implemented yet' });
	}

};

