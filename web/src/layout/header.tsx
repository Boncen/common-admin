import {
  Nav,
  Button,
  Avatar,
  Dropdown,
  Space,
  SideSheet,
  Divider,
} from "@douyinfe/semi-ui";
import {
  IconSun,
  IconMoon,
  IconLanguage,
  IconSetting,
} from "@douyinfe/semi-icons";
import { useEffect, useState } from "react";
import MyBreadcrumb from "./breadcrumb";
import {
  useDarkMode,
  useToggleDarkMode,
  useLanguage,
  useUpdateLang,
} from "@/store/settingsStore";
import PageMapper from "@/utils/page-mapper";
import { useRouter } from "@/router/hook";
import { useUserActions, useUserInfo } from "@/store/userStore";
import { changeTheme } from "@/router/utils";
import { useTranslation } from "react-i18next";
import Setting from "./setting";
import { LocalEnum } from "#/enum";

export default function Header() {
  const { t, i18n } = useTranslation();
  const isDark = useDarkMode();
  const lang = useLanguage();
  const userInfo = useUserInfo();

  const updateLang = useUpdateLang();
  const { push } = useRouter();
  const { clearUserInfoAndToken } = useUserActions();
  const [isDarkMode, setIsDarkMode] = useState(isDark);
  const [showSideSheet, setShowSideSheet] = useState(false);

  useEffect(() => {
    changeTheme(isDarkMode);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [isDarkMode]);
  const toggleDark = useToggleDarkMode();
  const switchDarkLight = () => {
    setIsDarkMode(!isDarkMode);
    toggleDark(!isDarkMode);
    changeTheme(!isDarkMode);
  };

  function handleLogout(): void {
    clearUserInfoAndToken();
    push(PageMapper.Login);
  }
  function handleChangeLanguage(key: string) {
    i18n.changeLanguage(key);
    updateLang(key);
  }

  return (
    <div>
      <Nav
        mode="horizontal"
        defaultSelectedKeys={["Home"]}
        style={{ border: "none" }}
      >
        <Nav.Header>
          <MyBreadcrumb />
        </Nav.Header>
        <Nav.Footer>
          {/* <div className="mr-3 flex items-center justify-center"> */}
          <Space spacing="medium">
            <Dropdown
              trigger={"click"}
              clickToHide={true}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => handleChangeLanguage(LocalEnum["zh-CN"])}
                    className={
                      lang === LocalEnum["zh-CN"] ? "text-blue-500	" : "	"
                    }
                  >
                    简体中文
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleChangeLanguage(LocalEnum["en-US"]);
                    }}
                    className={
                      lang === LocalEnum["en-US"] ? "text-blue-500	" : ""
                    }
                  >
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Button
                theme="borderless"
                icon={
                  <IconLanguage
                    style={{ color: "var(--semi-color-text-0)" }}
                    size="large"
                  />
                }
                style={{
                  marginRight: "12px",
                }}
              />
            </Dropdown>
            <Button
              theme="borderless"
              icon={
                isDarkMode ? (
                  <IconSun size="large" />
                ) : (
                  <IconMoon size="large" />
                )
              }
              onClick={switchDarkLight}
              style={{
                marginRight: "12px",
              }}
            />
            <Button
              theme="borderless"
              icon={
                <IconSetting
                  style={{ color: "var(--semi-color-text-0)" }}
                  size="large"
                />
              }
              onClick={() => setShowSideSheet(!showSideSheet)}
              style={{
                marginRight: "12px",
              }}
            />

            <Dropdown
              trigger={"hover"}
              position={"bottomRight"}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <div className="flex flex-col">
                      <span className="font-bold">{userInfo?.username}</span>
                      <span className="text-gray">{userInfo?.email}</span>
                    </div>
                  </Dropdown.Item>
                  <Divider />
                  <Dropdown.Item onClick={() => push(PageMapper.MyInfo)}>
                    {t("header.myinfo")}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    {t("header.logout")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Avatar color="pink" size="small" src={userInfo?.avatar}>
                HBC
              </Avatar>
            </Dropdown>
          </Space>
          <SideSheet
            title={t("common.setting")}
            visible={showSideSheet}
            onCancel={() => setShowSideSheet(false)}
          >
            <Setting />
          </SideSheet>
          {/* </div> */}
        </Nav.Footer>
      </Nav>
    </div>
  );
}
