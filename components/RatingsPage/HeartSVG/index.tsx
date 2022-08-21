interface HeartSVGProps {
    count: number;
    fillColor?: string;
    emptyColor?: string;
    heartSize?: number;
}
export const HeartSVG = (props: HeartSVGProps): JSX.Element => {
    const {count, emptyColor, fillColor, heartSize} = props;

    const hearts = [];

    for (let i = 0; i < 5; i++) {
        let fill = '100%';
        if (i >= Math.floor(count)) {
            fill = (i === Math.floor(count) ? `${(count - Math.floor(count)) * 100}%` : '0%');
        }

        hearts.push(
            <svg
                key={i}
                style={{ transform: "scaleX(1.3)" }}
                width={`${heartSize || 32}px`} height={`${heartSize || 32}px`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.76 144.99">
                <defs>
                    <clipPath id="heart">
                        <path style={{stroke: `${fillColor || "red"}`, strokeLinecap: 'round', strokeLinejoin: 'round'}} d="M60,48.64c2.46-16.31,6.29-37.93,24.93-43.82,9.2-2.91,26.49-.33,25.29,22.31-2.31,43.61-35.48,77.66-50.59,117.36C-33.81,33.78,2.65-29.83,39.35,15,47.67,25.16,55.34,36.35,60,48.64Z"/>
                    </clipPath>
                </defs>
                <rect x="0" y="0" fill={`${fillColor || "red"}`} width={fill} height="100%" clipPath="url(#heart)" />
                <rect x={fill} y="0" fill={`${emptyColor || "rgb(217,217,217)"}`} width="100%" height="100%" clipPath="url(#heart)" />
            </svg>
        );

        // hearts.push(
        //     <svg width={`${heartSize || 32}px`} height={`${heartSize || 32}px`} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        //         <defs>
        //             <clipPath id="heart">
        //                 <path d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
        //             </clipPath>
        //         </defs>
        //         <rect x="0" y="0" fill={`${fillColor || "red"}`} width={fill} height="100%" clipPath="url(#heart)" />
        //         <rect x={fill} y="0" fill={`${emptyColor || "rgb(217,217,217)"}`} width="100%" height="100%" clipPath="url(#heart)" />
        //     </svg>
        // );
    }

    return (
        <div style={{display: 'flex', columnGap: '6px'}}>
            {hearts}
        </div>
    );
};