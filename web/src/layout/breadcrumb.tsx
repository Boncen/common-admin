import { useRouter } from "@/router/hook";
import { useFlattenedRoutes } from "@/router/hook/use-flattened-routes";
import { Breadcrumb } from "@douyinfe/semi-ui";
import BreadcrumbItem from "@douyinfe/semi-ui/lib/es/breadcrumb/item";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMatches } from "react-router-dom";

type BreadcrumbItemMeta = {
  href: string;
  label: string;
  isHide: boolean;
};

export default function MyBreadcrumb() {
  const matches = useMatches();
  const routes = useFlattenedRoutes();
  const {t} = useTranslation();
  const { push } = useRouter();
  const [items, setItems] = useState<BreadcrumbItemMeta[]>([]);
  useEffect(() => {
    const items: BreadcrumbItemMeta[] = [];
    routes.forEach((r) => {
      matches.some((m) => {
        if (m.pathname === r.key) {
          if (!items.some((x) => x.href === m.pathname)) {
            items.push({
              href: m.pathname,
              label: t(r.label),
              isHide: r.hideTab ?? false
            });
          }
        }
      });
    });
    setItems(items);
  }, [matches, routes]);

  const handleClickBreadcrumbItem = (item: any) => {
    const route = items.find((x) => x.label === `${item.name}`);
    if (route && route.isHide !== true) {
      push(route.href);
    }
  };

  return (
    <Breadcrumb compact={false}>
      {items.map((i) => (
        <BreadcrumbItem key={i.href} onClick={handleClickBreadcrumbItem}>
          {i.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
