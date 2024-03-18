import Router from "@/router/index";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import { LocaleProvider } from "@douyinfe/semi-ui";
import { useSettingsStore } from "./store/settingsStore.ts";
import { LocalEnum } from "#/enum.ts";
import { CircleLoading } from "./components/loading/circleSpin.tsx";
import { Suspense } from "react";
import "@/locales/i18n.ts";

export default function App() {
  const settingStore = useSettingsStore();
  return (
    <LocaleProvider
      locale={settingStore.settings.lang === LocalEnum['zh-CN'] ? zh_CN : en_US}
    >
      <Suspense fallback={<CircleLoading />}>
        <Router />
      </Suspense>
    </LocaleProvider>
  );
}
