import React from "react";
import DashBoardLayout from "../../../app/(dashboard)/dashboard/layout";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import UpgradeButtonLocal from "../UpgradeButton";

function DashBoardLayoutLocal() {
    return (
        <div className="flex justify-between items-center h-14 m-2 bg-[#17BEBB] rounded-lg">
            <div className="ml-8">
                <span>Logo</span>
            </div>
            <div className="flex p-2 w-64 justify-between ">
                <div>
                    <UpgradeButtonLocal />
                </div>
                <div className="mr-8">
                    <UserButton />
                </div>
            </div>
        </div>
    );
}

export default DashBoardLayoutLocal;
