import { useEffect, useState } from "react";
import TableList from "@/components/table-list";
import api from "@/api";
import { Button, Form, Tag } from "@douyinfe/semi-ui";
import { UserStateEnum } from "#/enum";

export default function User() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    api
      .getUserList({
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
      title: "姓名",
      dataIndex: "name",
      width: 80, 
    },
    {
      title: "邮箱",
      dataIndex: "email",
    },
    {
      title: "手机号",
      dataIndex: "mobile",
      sorter: (a: string, b:string) => (Number(a) - Number(b) > 0 ? 1 : -1),
    },
    {
      title: "状态",
      dataIndex: "state",
      width: 200, // 修改列宽必须要指定默认宽度
      render: (text: string) => {
        return (
          <>
            {text == UserStateEnum.NORMAL.toString() ? (
              <Tag>正常</Tag>
            ) : (
              <Tag>异常</Tag>
            )}
          </>
        );
      },
    },
    {
      title: "备注",
      dataIndex: "remark",
      resize: true
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "设计文档", // Column configuration not to be checked
      name: record.name,
    }),
    onSelect: (record: any, selected: any) => {
      console.log(`select row: ${selected}`, record);
    },
    onSelectAll: (selected: any, selectedRows: any) => {
      console.log(`select all rows: ${selected}`, selectedRows);
    },
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const handleClickExtraBtn = ()=>{
    console.log('handleClickExtraBtn');
  }

  return (
    <div>
      <TableList
        columns={columns}
        data={usersData}
        pagination={true}
        extraSearchForm={
          <div>
            <Form.DatePicker label="日期" field="addDate"></Form.DatePicker>
          </div>
        }
        rowSelection={rowSelection}
        extraButtons={<Button onClick={handleClickExtraBtn}>额外按钮</Button>}
        bordered
        resizable={true}
      ></TableList>
    </div>
  );
}
