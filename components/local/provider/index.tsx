"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

function Provider({ children }: { children: React.ReactNode }) {
    return <ClerkProvider>{children}</ClerkProvider>;
}

export default Provider;
