import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import { Empty } from "@douyinfe/semi-ui";
import { useTranslation } from "react-i18next";

export default function Page() {
  const {t} = useTranslation();
  const emptyStyle = {
    padding: 30,
  };
  // const { push } = useRouter();
  // const { closeThis } = useKeepAlive();
  return (
    <div>
      <Empty
        image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationNotFoundDark style={{ width: 150, height: 150 }} />
        }
        description=<div className="flex flex-col">
          <span>{t('sys.api.errMsg404')}</span>
          {/* <Button
            onClick={() => {
              closeThis();
              //push(PageMapper.Home);
            }}
          >
            返回首页
          </Button> */}
        </div>
        style={emptyStyle}
      />
    </div>
  );
}
