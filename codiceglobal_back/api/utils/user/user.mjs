import { users } from "../../config/seed/users.mjs";

export function getUserByEmail(email) {
  return users.find((u) => u.email === email);
}
