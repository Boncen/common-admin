import { useEffect, useState, useCallback } from 'react';

const useSyncCallback = (callback: (...args: any[]) => any) : (...args: any[]) => any=>  {
    const [proxyState, setProxyState] = useState({ current: false });

    const Func = useCallback(() => {
        setProxyState({ current: true });
    }, [proxyState])

    useEffect(() => {
        if (proxyState.current === true) setProxyState({ current: false });
    }, [proxyState])

    useEffect(() => {
        proxyState.current && callback();
    })

    return Func
}

export default useSyncCallback;

// 作者：砂糖与辛香料
// 链接：https://juejin.cn/post/6962856944130326558
// 来源：稀土掘金