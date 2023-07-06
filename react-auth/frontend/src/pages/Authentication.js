import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export async function action({ request }) {
  // Check if mode is login or create
  console.log(`in here!!`);
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  console.log(mode);
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData);
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
  const resData = await response.json();
  localStorage.setItem("token", resData.token);
  return redirect("/");
}

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
