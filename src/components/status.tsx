import { split } from "postcss/lib/list";
import React, { useState, useEffect } from "react";

interface StatusProps {
    data: string;
}

const Status: React.FC<StatusProps> = ({ data }) => {
    const [color, setColor] = useState<string>("");
    console.log(data);
    useEffect(() => {
        if (data.split(" ")[0] === "แก้ไข") {
            setColor("bg-yellow-500");
        } else {
            if (data === "รอตรวจสอบ") {
                setColor("bg-blue-500");
            } else if (data === "พิจารณาเอกสาร") {
                setColor("bg-green-500");
            } else if (data === "ขึ้นทะเบียน") {
                setColor("bg-red-500");
            } else if (data === "ออกเอกสาร") {
                setColor("bg-gray-500");
            } else {
                setColor("bg-orange-500");

            }
        }

    }, [data]);

    return (
        <div className={`w-full ${color} rounded-full text-center p-2 text-white`}>
            {data}
        </div>
    );
};

export default Status;
