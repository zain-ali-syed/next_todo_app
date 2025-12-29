import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="font-bold text-3xl mb-3">Stay Organized, Get Things Done</h1>
      <p>
        Welcome to your personal task manager. Add your tasks, organize your day, and stay on top of
        what matters. Keeping track of your to-dos has never been easier.
      </p>
      <div className="flex gap-4 justify-center mt-5">
        <LoginLink className="bg-blue-900 text-white rounded-xl px-4 py-2">Sign in</LoginLink>
        <RegisterLink className="bg-blue-900 text-white rounded-xl px-4 py-2">Sign up</RegisterLink>
      </div>
    </div>
  );
}
