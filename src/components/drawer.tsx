import React from "react";

interface DrawerProps {
    children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-white">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" text-base-content min-h-full w-80 p-0 bg-gray-200">
                    {/* Sidebar content here */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="avatar flex justify-center items-center">
                            <div className="w-[80%] h-[80%] rounded-full mt-3">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <span>นพ.ทดสอบ ระบบแพทย์</span>
                            <span>กระทรวงสาธารณสุข กรมควบคุมโรค</span>
                        </div>
                    </div>
                    <div className="mt-10 ">
                        <li
                            className="bg-white text-black p-2 ml-10 rounded-s-full mb-1 cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className="rounded-full bg-gray-500 w-[50px] h-[50px] mr-3"></div>
                                <a>หน้าหลัก</a>
                            </div>
                        </li>
                        <li
                            className=" text-black p-2 ml-10 rounded-s-full mb-1 cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className="rounded-full bg-gray-500 w-[50px] h-[50px] mr-3"></div>
                                <a>ขึ้นทะเบียนสำเร็จ</a>
                            </div>

                        </li>
                        <li
                            className=" text-black p-2 ml-10 rounded-s-full mb-1 cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className="rounded-full bg-gray-500 w-[50px] h-[50px] mr-3"></div>
                                <a>User Menagement</a>
                            </div>

                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;