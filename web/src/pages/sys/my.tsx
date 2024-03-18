import { useUserInfo } from "@/store/userStore";
import { Avatar, Button, Card, Col, Form, Row } from "@douyinfe/semi-ui";
import { useTranslation } from "react-i18next";

export default function My() {
  const userInfo = useUserInfo();
  const {t} = useTranslation();
  return (
    <div>
      <Row>
        <Col span={12}>
          <Card className="m-1" shadows={"hover"}>
            <div className="flex flex-col">
              <div className="w-ful flex justify-center">
                <Avatar src={userInfo?.avatar} size={"extra-large"}></Avatar>
              </div>
              <div className="flex flex-col">
                <Form>
                  <Form.Input
                    field="username"
                    label={t('sys.login.userName')}
                    initValue={userInfo.username}
                    trigger="blur"
                  />
                  <Form.Input
                    field="username"
                    label={t('sys.login.email')}
                    initValue={userInfo.email}
                    trigger="blur"
                  />
                  <Button>{t('common.saveText')}</Button>
                </Form>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
