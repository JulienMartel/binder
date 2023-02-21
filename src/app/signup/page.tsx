import "server-only";
import { Signup } from "./signup";

// // do not cache this page
// export const revalidate = 0;

export default async function SignUpPage() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Signup />
    </div>
  );
}
