import React, { useEffect, useState } from "react";
import { deleteStudent, studentListRequest } from "../userApi/apiRequest";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const ListPage = () => {
  let [data, setData] = useState([]);
  let [change, setChange] = useState(0);
  useEffect(() => {
    (async () => {
      let res = await studentListRequest();
      setData(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    let res = await deleteStudent(id);
    if (res) {
      toast.success("Delete completed");
      setChange(new Date().getTime());
    } else {
      toast.error("Delete fail");
    }
  };

  if (data.length === 0) {
    return (
      <div>
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg text-warning"></span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-11/12 mx-auto pb-9">
        <div className="w-full overflow-x-auto mb-6">
          <div>
            <h1 className="text-4xl p-4 text-center font-bold">STUDENT LIST</h1>
          </div>
          <table className="min-w-full divide-y divide-gray-200  mt-4 ">
            <thead>
              <tr className=" bg-green-500 text-white ">
                <th className="px-4 py-2 text-sm">FirstName</th>
                <th className="px-4 py-2 text-sm">LastName</th>
                <th className="px-4 py-2 text-sm">Gender</th>
                <th className="px-4 py-2 text-sm">DateOfBirth</th>
                <th className="px-4 py-2 text-sm">Nationality</th>
                <th className="px-4 py-2 text-sm">Address</th>
                <th className="px-4 py-2 text-sm">Email</th>
                <th className="px-4 py-2 text-sm">Phone</th>
                <th className="px-4 py-2 text-sm">AdmissionDate</th>
                <th className="px-4 py-2 text-sm">Courses</th>
                <th className="px-4 py-2 text-sm">Update</th>
                <th className="px-4 py-2 text-sm">Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((item, index) => {
                return (
                  <tr key={index} className="mt-2 bg-slate-500 text-white">
                    <td className="px-9 py-2 text-sm">{item["firstName"]}</td>
                    <td className="px-4 py-2 text-sm">{item["lastName"]}</td>
                    <td className="px-4 py-2 text-sm">{item["gender"]}</td>
                    <td className="px-4 py-2 text-sm">{item["dateOfBirth"]}</td>
                    <td className="px-4 py-2 text-sm">{item["nationality"]}</td>
                    <td className="px-4 py-2 text-sm">{item["address"]}</td>
                    <td className="px-4 py-2 text-sm">{item["email"]}</td>
                    <td className="px-4 py-2 text-sm">{item["phone"]}</td>
                    <td className="px-4 py-2 text-sm">
                      {item["admissionDate"]}
                    </td>
                    <td className="px-4 py-2 text-sm">{item["courses"]}</td>
                    <td>
                      <Link
                        className="btn btn-success"
                        to={"/registration?id=" + item["_id"]}
                      >
                        Edit <LuClipboardEdit />
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          onDelete(item["_id"]);
                        }}
                        className="btn btn-error"
                      >
                        Delete <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Toaster position="bottom-center" />
      </div>
    );
  }
};

export default ListPage;
