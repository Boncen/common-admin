import { useEffect, useState } from "react";
import TableList from "@/components/table-list";
import api from "@/api";

export default function User() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    api
      .getRoleList({
        pageIndex: 1,
        pageSize: 10,
      })
      .then((list) => {
        console.log(list);
        setUsersData(list);
      });
  }, []);

  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      width: 80, 
    },
    {
      title: "备注",
      dataIndex: "desc",
      resize: true
    },
  ];


  return (
    <div>
      <TableList
        columns={columns}
        data={usersData}
        pagination={true}
        resizable={true}
      ></TableList>
    </div>
  );
}
