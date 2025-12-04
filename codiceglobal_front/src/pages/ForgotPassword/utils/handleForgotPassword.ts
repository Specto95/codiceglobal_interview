import { AUTH_API } from "../../../context/helpers/api";

export const handleForgotPassword = async (values: { email: string }) => {
    const forgotPasswordData = await fetch(
      AUTH_API.FORGOT_PASSWORD, {
        method: 'POST',
        body: JSON.stringify(values)
      }
    )
    return forgotPasswordData;
  };