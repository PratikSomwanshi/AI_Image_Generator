import DashBoardLayoutLocal from "@/components/local/DashBoardSideBar";
import React from "react";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <DashBoardLayoutLocal />
            {children}
        </div>
    );
}

export default DashBoardLayout;
