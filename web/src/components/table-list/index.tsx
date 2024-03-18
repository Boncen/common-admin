import {
  Button,
  Card,
  Form,
  Table,
  useFormApi,
} from "@douyinfe/semi-ui";
import { RowSelection } from "@douyinfe/semi-ui/lib/es/table";
import { ReactNode, useState } from "react";

interface TableListProps {
  columns: Array<{ title: string; dataIndex: string }>;
  data: Record<string, any>[];
  pagination: boolean;
  extraSearchForm?: ReactNode;
  rowSelection?: RowSelection<Record<string,any>>;
  extraButtons?:ReactNode;
  bordered?: boolean;
  resizable?: boolean;
}

export default function TableList({
  columns,
  data,
  pagination,
  extraSearchForm,
  rowSelection,
  extraButtons,
  bordered,
  resizable
}: TableListProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const [formValue, setFormValue] = useState({});

  const handleSubmit = ()=> {
    console.log('handleSubmit formValue', formValue);
  }

  const ComponentUsingFormApi = () => {
    const formApi = useFormApi();
    /** 确定 */
    const handleSearchConfirm = () => {
      console.log(formValue);
      handleSubmit();
    };
    /** 重置表单 */
    const handleSearchReset = () => {
      console.log(Object.keys(formValue));
      const keysArray = Object.keys(formValue);
      keysArray.forEach((key) => {
        formApi.setValue(key, undefined); // todo
      });
    };
    return (
      <div className="flex	">
        <Button type={"primary"} onClick={handleSearchConfirm} color="blue">
          确定
        </Button>
        <Button onClick={handleSearchReset} type="tertiary">
          重置
        </Button>
        {extraButtons}
      </div>
    );
  };

  return (
    <div>
      {/* <Card className="m-2" shadows={"hover"} footer={renderSearchFormFooter()}> */}
      <div className="border m-2 p-2 rounded-md" style={{borderColor: 'var(--semi-color-fill-0)'}}>
        <Form
          layout="horizontal"
          labelPosition={"left"}
          labelAlign={"left"}
          onValueChange={(values) => setFormValue(values)}
          onSubmit={handleSubmit}
        >
          <Form.Input
            field="searchText"
            label="搜索"
            style={{ width: 180 }}
            placeholder={"输入关键词搜索"}
            clearIcon
          />
          {/* {extraSearchForm && (
            <Button onClick={() => setIsOpen(!isOpen)}>更多选项</Button>
          )} */}
            {extraSearchForm}
          <ComponentUsingFormApi />
        </Form>
      </div>
      {/* </Card> */}
      <Card shadows={"hover"} className="m-2">
        <Table
          className="m-1"
          columns={columns}
          dataSource={data}
          pagination={pagination}
          rowSelection={rowSelection}
          bordered={bordered}
          resizable={resizable}
        />
      </Card>
    </div>
  );
}
