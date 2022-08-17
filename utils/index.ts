export const px2vw = (size: number, width: number = 1920) => `${(size / width) * 100}vw`;
export const px2vh = (size: number, height: number = 1080) => `${(size / height) * 100}vh`;

export const breakpoints = {
    desktopFullWidth: 1920,
    desktopMiniWidth: 1366,
    scrollPoint: 1023,
    tabletWidth: 768
};
