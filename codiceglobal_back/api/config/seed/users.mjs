import bcrypt from "bcryptjs";

export const users = [
  {
    id: 1,
    email: "user@user.com",
    password: bcrypt.hashSync("User1234!", 10),
    role: "USER",
  },
  {
    id: 2,
    email: "admin@admin.com",
    password: bcrypt.hashSync("Admin1234!", 10),
    role: "ADMIN",
  },
];

export const activeTokens = new Set();
