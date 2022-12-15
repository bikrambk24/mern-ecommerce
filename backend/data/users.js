import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Bikram",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rekha Thapa",
    email: "rekha@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Rajesh Hamal",
    email: "rajesh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
