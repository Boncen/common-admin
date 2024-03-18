import { useEffect, useState } from "react";
import { Form, Button, Card, Notification } from "@douyinfe/semi-ui";
import { useRouter } from "@/router/hook";
import PageMapper from "@/utils/page-mapper";
import { useUserActions } from "@/store/userStore";
import { useDarkMode, useLanguage } from "@/store/settingsStore";
import { changeTheme } from "@/router/utils";
import { useTranslation } from "react-i18next";
import api from "@/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const { setUserToken, setUserInfo } = useUserActions();
  const isDark = useDarkMode();
  const lang = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeTheme(isDark);
    i18n.changeLanguage(lang ?? "");
  }, []);

  const handleSubmit = () => {
    api.getUserInfo().then((x) => {
      console.log("userinfo", x);
      setUserInfo(x);
    });
    api
      .login({
        account: username,
        password: password,
      })
      .then((x: { token: string }) => {
        console.log(x);
        setUserToken(x.token);
        Notification.success({
          title: t("sys.login.loginSuccessTitle"),
          duration: 3,
        });
        
        push(PageMapper.Home);
      });
  };

  return (
    <div
      className="w-full h-screen justify-center items-center flex "
      style={{ background: " var( --semi-color-bg-0)" }}
    >
      {/* <div className=""> */}
      <Card
        className="w-1/5 min-w-64"
        shadows="hover"
        bordered={true}
        title={t("sys.login.signInPrimaryTitle")}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Input
            field="UserName"
            label={t("sys.menu.user.account")}
            onChange={(value) => setUsername(value)}
            trigger="blur"
            rules={[{ required: true, message: t("validation.needAccount") }]}
          />
          <Form.Input
            field="Password"
            label={{
              text: t("sys.login.password"),
            }}
            mode="password"
            onChange={(value) => setPassword(value)}
            trigger="blur"
            rules={[
              { required: true, message: t("validation.needPassword") },
              {
                validator: (_, value) => value?.length >= 5,
                message: t("validation.passwordLengthError"),
              },
            ]}
          />

          <Button block htmlType="submit" onSubmit={handleSubmit}>
            {t("sys.login.signInFormTitle")}
          </Button>
        </Form>
      </Card>
      {/* </div> */}
    </div>
  );
}
