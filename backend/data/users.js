import bcrypt from "bcrpytjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Isa Sumer ",
    email: "isa@sumer.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Esra Sumer",
    email: "esra@sumer.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
