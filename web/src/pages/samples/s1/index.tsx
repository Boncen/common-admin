import { Button, Form, Tooltip } from "@douyinfe/semi-ui";
import { IconHelpCircle } from "@douyinfe/semi-icons";
import api from "@/api";
import { getStringItem } from "@/utils/storage";
import { StorageEnum } from "#/enum";

export default function Index() {
  const { Option } = Form.Select;

  const handleClickTest = () => {
    console.log('I18N',StorageEnum.I18N, getStringItem(StorageEnum.I18N));
    api.login({ username: "1" }).then((x) => console.log(x));
  };
  return (
    <>
      <Button onClick={handleClickTest}>api test</Button>
      <Form layout="horizontal" onValueChange={(values) => console.log(values)}>
        <Form.Input field="UserName" label="用户名1" style={{ width: 80 }} />
        <Form.Input
          field="Password"
          label={{
            text: "密码1",
            extra: (
              <Tooltip content="详情">
                <IconHelpCircle style={{ color: "var(--semi-color-text-2)" }} />
              </Tooltip>
            ),
          }}
          style={{ width: 176 }}
        />
        <Form.Select
          field="Role"
          label={{ text: "角色", optional: true }}
          style={{ width: 176 }}
        >
          <Option value="admin">管理员</Option>
          <Option value="user">普通用户</Option>
          <Option value="guest">访客</Option>
        </Form.Select>
      </Form>
    </>
  );
}
