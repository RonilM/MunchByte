/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	login: function (req, res){

		sails.models.user.findOneWithPasswordHash({email: req.param('email'), password: req.param('password')},function findOneResult (err, found){
			if(err != null){
					return res.view('login',{message: err.message});
				}
			else if(found!=null){
				req.session.authenticated = true;
				found.password = '';
				req.session.User = found;
				//console.log(req.session.User);
				return res.view('Dashboard/DashboardHome');
			}
				return res.view('login',{message: 'Incorrect Username or Password...'});

		});
	},

	logout: function (req, res){
		req.session.authenticated = false;
		req.session.destroy();
		return res.view('homepage');
	}

};

