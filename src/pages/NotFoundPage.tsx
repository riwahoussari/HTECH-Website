import Navbar from "../components/sections/navbar/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar transparentBg={false} />
      <main className="w-full flex min-h-[50vh] items-center justify-center">
        <h1 className="mt-60 text-center text-3xl">404 Page Not Found</h1>
      </main>
    </>
  );
}
