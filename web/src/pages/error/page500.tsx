import {
  IllustrationFailure,
  IllustrationFailureDark,
} from "@douyinfe/semi-illustrations";
import { Empty } from "@douyinfe/semi-ui";
import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

export default function Page() {
  const {t} = useTranslation();
  const error = useRouteError();
  console.error('error', error);
  
  const emptyStyle = {
    padding: 30,
  };
  // const { push } = useRouter();
  // const { closeThis } = useKeepAlive();
  return (
    <div>
      <Empty
        image={<IllustrationFailure style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationFailureDark style={{ width: 150, height: 150 }} />
        }
        description=<div className="flex flex-col">
          <span>{t('sys.api.errMsg500')}</span>
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
