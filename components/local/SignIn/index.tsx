import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInLocal() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <SignIn />
        </div>
    );
}

export default SignInLocal;
