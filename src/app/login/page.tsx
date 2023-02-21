import "server-only";
import { Login } from "./login";

export default async function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Login />
    </div>
  );
}
