import Script from "next/script";
import React from "react";

type AdsenseTypes = {
    pId: string;
}

const Adsense = ({pId}: AdsenseTypes) => {
    return (
        <Script 
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9408883643416842 ${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"       
        />
    )
}

export default Adsense