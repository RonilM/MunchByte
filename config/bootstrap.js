/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  // It's very important to trigger the cb() callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  console.log("Bootstrapping...\n");

  Roles.find().exec(function countRoles(err, tuples){
    if(err != null)
      return cb(err);
    var InitialRolesData = [
    {rolename: sails.config.globalVars.SuperUserRoleName, description: '', id:1},
    {rolename: sails.config.globalVars.EmployeeManagerRoleName, description: '',id:2},
    {rolename: sails.config.globalVars.MenuManagerRoleName, description: '',id:3},
    {rolename: sails.config.globalVars.InventoryManagerRoleName, description: '',id:4},
    {rolename: sails.config.globalVars.VirtualKitManagerRoleName, description: '',id:5},
    {rolename: sails.config.globalVars.DeliveryManagerRoleName, description: '',id:6}
    ];

    Roles.findOrCreate(InitialRolesData).exec(function createRoles(err, record){
      if(err!=null)
        return cb(err);
      console.log("bootstrap.js: Adding absent roles:\n");
      return cb();
    });
  });
};
