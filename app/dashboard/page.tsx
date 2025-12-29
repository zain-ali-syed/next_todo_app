import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium expedita quibusdam
      corporis temporibus nihil explicabo fuga, similique magnam odio quasi quod! At dolore
      adipisci, reprehenderit excepturi nemo voluptatibus eaque.
    </div>
  );
};

export default page;
