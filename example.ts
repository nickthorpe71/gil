interface Person {
  firstName: string;
  lastName: string;
  id: string;
  some_new_field: string;
}

const greet = (user: Person): string => {
  return "hello," + user.some_new_field;
}

let newUser = {
  firstName: "test",
  lastName: "uese",
  id: "123453563246g45f522cf35634g3qw4gz36w",
  some_new_field: "this is just a test field"
};

console.log(greet(newUser));