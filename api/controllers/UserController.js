/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	signup: function (req, res) {
			User.create(req.allParams()).exec(function signupUser(err, created){
				if(err != null)
					return res.view('signup',{message: err});
				Roles.findOne({rolename: sails.config.globalVars.SuperUserRoleName }).exec(function onFindingRole(err, roleTuple){
					if(err != null)
						return res.view('signup',{message: err});
					UserRolesMapping.create({UserId: created.id, RoleId: roleTuple.id}).exec(function onCreateUserRoleMApping(err,record){
						if(err != null)
							return res.view('signup',{message: err});
						req.session.authenticated = true;
						created.password = '';
						req.session.User = created;
						req.session.User.roleList = [roleTuple];
						return res.view('homepage');
				  })
				});
			});

	},


	delete: function (req, res) {
    return res.json({
      	todo: 'Not implemented yet!'
    	});
  	}


};
