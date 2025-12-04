import { AUTH_API } from "../../../../context/helpers/api";

export const handleRegister = async (
  values: {
    email: string;
    password: string;
    role: string;
  },
  token: string
) => {
  const data = {
    email: values.email,
    password: values.password,
    role: values.role,
  };

  const res = await fetch(AUTH_API.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    let errMsg = `${res.status} ${res.statusText}`;
    try{
        const errorData = await res.json();
        if (errorData.message) {
            errMsg = errorData.message;
        }
        } catch {
        // AQUÍ PUEDO MANDAR LOGS A ALGÚN SERVICIO, PARA ESTE FIN NO
    }
    throw new Error(errMsg);
  }

  return res.json();
};
