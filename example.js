var greet = function (user) {
    return "hello," + user.some_new_field;
};
var newUser = {
    firstName: "test",
    lastName: "uese",
    id: "123453563246g45f522cf35634g3qw4gz36w",
    some_new_field: "this is just a test field"
};
console.log(greet(newUser));
