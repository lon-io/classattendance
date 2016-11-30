/**
 * Created by lon on 10/10/16.
 */

var admin = new Role({
    title: 'Admin',
    slug: 'admin'
});
var redactor = new Role({
    title: 'Redactor',
    slug: 'redactor'
});
var user = new Role({
    title: 'User',
    slug: 'user'
});

// var createRoles = function(){
//     admin.save(function (err) {
//         if (err) {
//             if (err instanceof mongoose.Error.ValidationError) {
//                 callback({'response':"Invalid data"});
//             }
//             return next(err);
//         }
//         callback({'response':"Sucessfully Registered"});
//     });
// };
