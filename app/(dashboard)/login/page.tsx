import LoginForm from "@/app/components/FormTabs";
import PageTitle from "@/app/components/PageTitle";
import type { Metadata } from "next";
import variables from "@/app/styles/variables.module.scss";
import * as styles from "@/app/styles/variables.module.scss";

export const metadata: Metadata = {
  title: "Login Page",
  description: "This is the login page",
};

function page() {
  return (
    <>
      <main className="container mx-auto">
        <section className="grid grid-cols-2 items-center h-[100vh] md:grid-cols-1 md:h-[auto] md:py-28 md:px-10">
          <section className="">
            <h1
              style={{ color: variables.primaryColor }}
              className={"text-white text-7xl font-bold uppercase primaryColor"}
            >
              <span>Join the largest art</span> <br />
              <span>Community in the world</span>
            </h1>
            <p className="text-slate-400 text-3xl pt-3">
              Explore and discover art, become a better artist, connect with
              others over mutual hobbies, or buy and sell work you can do it all
              here.
            </p>
          </section>
          <section>
            <LoginForm />
          </section>
        </section>
      </main>
    </>
  );
}

export default page;
