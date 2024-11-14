import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpLocal() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <SignUp />
        </div>
    );
}

export default SignUpLocal;
