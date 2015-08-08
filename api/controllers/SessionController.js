/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	login: function (req, res){

		sails.models.user.findOneWithPasswordHash({email: req.param('email'), password: req.param('password')},function findOneResult (err, userData){
			if(err != null){
					return res.view('login',{message: err.message});
				}
			else if(userData!=null){
					UserRolesMapping.find({UserId : userData.id}).exec(function foundRoles(err, mappingTuples){
						if(err != null)
								return res.view('login',{message: err.message});
						var RoleIds = [];
						for(mt in mappingTuples) { RoleIds.push({ id : mappingTuples[mt].RoleId }); }
						Roles.find(RoleIds).exec(function gettingRoleData(err,rolesData){
							if(err != null)
									return res.view('login',{message: err.message});
								req.session.authenticated = true;
								userData.password = '';
								req.session.User = userData;
								req.session.User.roleList=rolesData;
								return res.view('Dashboard/DashboardHome');
						});
					});
			}
				//return res.view('login',{message: 'Incorrect Username or Password...'});

		});
	},

	logout: function (req, res){
		req.session.authenticated = false;
		req.session.destroy();
		return res.view('homepage');
	}

};
