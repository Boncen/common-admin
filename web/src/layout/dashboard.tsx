import { Layout } from "@douyinfe/semi-ui";
import Header from "@/layout/header";
import SidebarMenus from "@/layout/menus";
import { Outlet } from "react-router-dom";
import MultiTabs from "./multi-tabs";
import { useSettingsStore } from "@/store/settingsStore";import { useState } from "react";


export default function DashboardLayout() {
  const { Content } = Layout;
  const settingStore = useSettingsStore();
  
  const [isMultiTabs] = useState(settingStore.settings.isUseMultitab ?? true);
  return (
    <Layout style={{ height: "100%" }}>
      <SidebarMenus />
      <Layout>
        <Header />
        <Content
          style={{
            padding: "2px 2px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          {isMultiTabs ? <MultiTabs /> : <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
}
