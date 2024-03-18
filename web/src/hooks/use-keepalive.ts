import { RouteMeta } from "#/router";
import { useMatchRouteMeta } from "@/router/hook";
import PageMapper from "@/utils/page-mapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type KeepAliveTab = RouteMeta & {
  children: any;
};

export default function useKeepAlive() {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState<KeepAliveTab[]>([]);
  const [activeTabRoutePath, setActiveTabRoutePath] = useState<string>();
  const currentRouteMeta = useMatchRouteMeta();

  const closeTab = (key: string) => {
    if (!key) {
      return;
    }
    const index = tabs.findIndex((x) => x.key === key);
    if (index < 0) return;
    const tabsCopy = tabs;
    tabsCopy.splice(index, 1);
    setTabs(tabsCopy);
    setNextActiveTab(index);
  };
  const closeOthers = (key: string) => {
    const tab = tabs.find((x) => x.key === key);
    if (tab) {
      setTabs([tab]);
    }
  };
  const closeLeft = (key: string) => {
    const tabIndex = tabs.findIndex((x) => x.key === key);
    if (tabIndex > -1) {
      setTabs(tabs.slice(tabIndex));
    }
    setNextActiveTab(tabIndex);
  };
  const closeRight = (key: string) => {
    const tabIndex = tabs.findIndex((x) => x.key === key);
    if (tabIndex > -1) {
      setTabs(tabs.slice(0, tabIndex + 1));
    }
    setNextActiveTab(tabIndex);
  };
  const refreshTab = (key: string) => {
    const tabsCopy = tabs;
    const tab = tabsCopy.find(x=>x.key === key);
    if (tab) {
      tab.timeStamp = getKey();
      setTabs(tabsCopy);
    }
  };
  const closeAll = () => {
    setTabs([]);
    navigate(PageMapper.Home);
  };
  /**
   * 自动选择下一个tab,默认选中左侧的tab
   */
  const setNextActiveTab = (closeIndex?: number) => {
    let next = null;
    if (closeIndex != null && closeIndex > -1) {
      next = tabs.at(closeIndex!);
      if (!next) {
        next = tabs.at(closeIndex! + 1);
      }
    }
    if (!next) {
      next = tabs.at(-1);
    }
    if (next?.key) {
      navigate(next!.key);
    }
  };

  /**
   * 关闭当前tab
   */
  const closeThis = ()=> {
    const tab = tabs.find((x) => x.key === currentRouteMeta?.key);
    console.log(currentRouteMeta, tab);
    
    if (tab) {
      closeTab(tab.key);
    }
  }

  useEffect(() => {
    if (!currentRouteMeta) {
      return;
    }
    const tab = tabs.find((x) => x.key === currentRouteMeta?.key);
    if (!tab) {
      setTabs((prev) => [
        ...prev,
        {
          ...currentRouteMeta!,
          children: currentRouteMeta!.outlet,
          timeStamp: getKey(),
        },
      ]);
    }
    setActiveTabRoutePath(currentRouteMeta.key);
  }, [currentRouteMeta, tabs]);

  return {
    tabs,
    activeTabRoutePath,
    closeTab,
    closeLeft,
    closeOthers,
    closeRight,
    refreshTab,
    closeAll,
    closeThis
  };
}
function getKey() {
  return new Date().getTime().toString();
}
