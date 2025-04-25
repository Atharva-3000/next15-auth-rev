import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInfo() {
    const session = await auth();
    return (
        <div className="flex flex-col items-center justify-center pt-24 gap-6">
            {" "}
            <p>User Info</p>
            <p>User Name: {session?.user?.name}</p>
            <Image src={session?.user?.image || "/default-image.png"} alt="user" width={100} height={100} className="rounded-lg" />
            <p>You are logged in</p>
        </div>
    )
}