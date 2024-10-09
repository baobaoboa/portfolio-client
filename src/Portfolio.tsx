import Hero from "./pages/Hero";
import Content from "./pages/Content";

export default function Portfolio() {
  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <main className="h-full select-none space-y-8 p-6 transition-all 2xl:container sm:flex sm:space-y-0 sm:p-0 sm:~space-x-12/[4.5rem] 2xl:mx-auto">
        <Hero />
        <Content />
      </main>
    </>
  );
}
