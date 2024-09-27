import LoginForm from "@/components/login/form";

export default function Page() {
  return (
    <section className="grid min-h-screen place-items-center bg-[url('/background-1.png')] bg-cover bg-center bg-no-repeat py-8">
      <LoginForm />
    </section>
  );
}
