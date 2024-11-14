import { Button } from "@/components/ui/button";
import React from "react";

function UpgradeButtonLocal() {
    return (
        <div className="flex justify-between items-center w-32">
            <div className="">
                <h2>
                    <span>200</span>
                </h2>
            </div>
            <div className="hidden sm:inline-block">
                <Button>Upgrade</Button>
            </div>
        </div>
    );
}

export default UpgradeButtonLocal;
