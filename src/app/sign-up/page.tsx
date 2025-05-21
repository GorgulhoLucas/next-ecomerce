import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
  searchParams: {
    redirectUrl?: string;
  };
};

export default function SignUpPage({ searchParams }: SignUpPageProps) {
  const redirectUrl = searchParams.redirectUrl?.startsWith("/") ? searchParams.redirectUrl : "/";

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignUp
            signInUrl="/sign-in"
            forceRedirectUrl={redirectUrl}
            fallbackRedirectUrl="/"
          />
        </div>
      </div>
    </section>
  );
}
