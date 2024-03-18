import { Form, TabPane, Tabs, Tooltip } from "@douyinfe/semi-ui";
import { IconHelpCircle } from "@douyinfe/semi-icons";
import { useState } from "react";

export default function Index() {
  const { Option } = Form.Select;
 const [tabList, setTabList] = useState([
    { tab: '文档', itemKey: '1', text: '文档', closable: true },
    { tab: '快速起步', itemKey: '2', text: '快速起步', closable: true },
    { tab: '帮助', itemKey: '3', text: '帮助' },
]);
  return (
    <>
      <Form layout="horizontal">
        <Form.Input field="UserName" label="用户名2" style={{ width: 80 }} />
        <Form.Input
          field="Password"
          label={{
            text: "密码2",
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
      <Tabs type="card">
        {tabList.map((t) => (
          <TabPane
            closable={t.closable}
            tab={t.tab}
            itemKey={t.itemKey}
            key={t.itemKey}
          >
            {t.text}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}
