import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import * as gtag from "./gtag";

export interface IGoogleAnalytics {}

const GoogleAnalytics: React.FC<IGoogleAnalytics> = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRouteChange = (url: string) => {
    gtag.pageview(url);
  };

  useEffect(() => {
    if (pathname) {
      const newPageViewPath = pathname + searchParams.toString();
      handleRouteChange(newPageViewPath);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="google_analytics_tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google_analytics_config"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
