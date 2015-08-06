/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	signup: function (req, res) {

			User.create(req.allParams()).exec(function signupUser(err, created){
				if(err != null){
					return res.view('signup',{message: err});
				}

				req.session.authenticated = true;
				//console.log(created);
				created.password = '';
				req.session.User = created;
				//console.log(req.session.User);
				return res.redirect('/');
			});

	},

	
	delete: function (req, res) {
    return res.json({
      	todo: 'Not implemented yet!'
    	});
  	}

	
};

