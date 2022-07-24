const px2vw = (size: number, width: number = 1920) => `${(size / width) * 100}vw`;
const px2vh = (size: number, height: number = 1080) => `${(size / height) * 100}vh`;

const isClientIos = () => {
    if (typeof window !== 'undefined' && window && window?.navigator && window?.navigator.userAgent) {
        return window?.navigator.userAgent.includes('iPhone');
    }
    return false;
};

const isClientMobile = () => {
    if (typeof navigator !== 'undefined' && navigator && navigator.userAgent) {
        return /android|webos|iphone|ipod|ipad|blackberry|iemobile|opera mini/i.test(navigator.userAgent);
    }
    if (isClientIos()) {
        return true;
    }
    return false;
};

const isTouchDevice = () => {
    if (typeof window !== 'undefined') {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
    return false;
};

const isClientSafari = () => {
    return (
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
            return p.toString() === '[object SafariRemoteNotification]';
        })(!window.safari || (typeof safari !== 'undefined' && window.safari.pushNotification))
    );
};

const isAppleClient = () => {
    const platform =
        window?.navigator?.userAgentData?.platform || window?.navigator?.platform || window?.navigator?.userAgent;

    if (typeof platform === 'string') {
        const macPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        const iosPlatforms = ['iPad Simulator', 'iisClientSafariPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
        return macPlatforms.includes(platform) || iosPlatforms.includes(platform);
    }
    return false;
};

module.exports = {
    px2vw,
    px2vh,
    isClientMobile,
    isTouchDevice,
    isClientSafari,
    isAppleClient
};