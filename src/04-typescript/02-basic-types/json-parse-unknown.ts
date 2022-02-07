const str = `{"id": 1, "username": "john_doe"}`;
const user: unknown = JSON.parse(str);

console.log(user.id, user.address.zipcode);
// error TS2339: Property 'address' does not exist on type 'unknown'.
