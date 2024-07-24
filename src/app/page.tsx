'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Status from "@/components/status";
interface RegistrationData {
  code: string;
  createDate: string;
  name: string;
  status: string;
  verifyBy: string;
  verifyDate: string;
}

export default function Home() {
  const [data, setData] = useState<RegistrationData[]>([]);

  const fetchData = async () => {
    const res = await fetch("https://test-api-py77dwlbxa-df.a.run.app/data");
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    document.title = "ขึ้นทะเบียนสำเร็จ";
    fetchData();
  }, [])


  console.log(data);

  return (
    <>

      <div className="w-full h-full p-5">
        <h3 className="text-[2rem] text-gray-500">รายการขอขึ้นทะเบียน</h3>
        <div role="tablist" className="tabs tabs-lifted mt-5 ">
          <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-200" aria-label="ตรวจความถูกต้อง" defaultChecked />
          <div role="tabpanel" className="tab-content  rounded-box p-6 bg-gray-500 ">
            <div className="flex flex-col">

              <div className="flex justify-end">
                <input type="text" placeholder="ค้นหา" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="overflow-x-auto bg-white mt-5 text-black">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>ชื่อหน่วยงาน</th>
                      <th>รหัสหน่วยบริการ</th>
                      <th>วันที่ขึ้นทะเบียน</th>
                      <th>ชื่อผู้ตรวจสอบ</th>
                      <th>วันที่ตรวจสอบ</th>
                      <th>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item, index) => (
                        <tr key={index}>
                          <th>{item.name}</th>
                          <td>{item.code}</td>
                          <td>{item.createDate}</td>
                          <td>{item.verifyBy}</td>
                          <td className="text-center">{item.verifyDate}</td>
                          <td><Status data={item.status} /></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>


          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab bg-gray-200"
            aria-label="พิจรณาเอกสาร"
          />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
            Tab content 2
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-200"  aria-label="ขึ้นทะเบียน" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
            Tab content 3
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-200"  aria-label="ออกเอกสาร" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
            Tab content 4
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-200"  aria-label="แก้ไข" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
            Tab content 5
          </div>
        </div>
      </div>
    </>
  );
}
