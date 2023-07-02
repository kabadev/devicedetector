"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const [devices, setDevices] = useState([]);
  const getDeviceInfo = async () => {
    const res = await axios.get("/api/devices");
    setDevices(res.data.data);
  };
  useEffect(() => {
    getDeviceInfo();
  }, []);
  return (
    <main className="grid grid-cols-3  gap-3 flex-grow-0 px-60">
      {devices?.map((device, i) => {
        if (device.device !== "") {
          return (
            <div
              key={i}
              className="h-[150px] min-w-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">
                {device.device}
              </h5>
            </div>
          );
        }
      })}
    </main>
  );
};

export default Details;
