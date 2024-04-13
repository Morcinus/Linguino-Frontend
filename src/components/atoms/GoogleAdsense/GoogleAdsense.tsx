import Script from "next/script";

export interface IGoogleAdsense {}

const GoogleAdsense: React.FC<IGoogleAdsense> = () => {
  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
};

export default GoogleAdsense;
