import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl">
      <h1>Repair Shop</h1>

      <Button type="button" variant="link" asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
}
