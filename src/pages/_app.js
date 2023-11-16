import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>

    <DefaultSeo  
      additionalMetaTags={[{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
      }, {
        httpEquiv: 'content-language',
        content: 'en-us'
      }]}

      additionalLinkTags={[{
        rel: 'icon',
        href: '/fav-icon.png',
      },{
        rel: 'preload',
        href: '/assets/fonts/clash-display/ClashDisplay-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      }
      ]}

      openGraph={{
        type: 'website',
        locale: 'en_US',
      }}
      twitter={{
        site: '_EnigmaDigital',
        cardType: 'summary_large_image',
      }}

      languageAlternates={[{
        hrefLang: 'en-us',
      }]}
    />    

      <Component {...pageProps} />

      <Analytics />
      <Script
        strategy="afterInteractive"
        id="ms-clarity"
      >
          { `
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "josmn10ai7");
          `}
      </Script>
    
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-PKJE9LVB35"
      />

      <Script
        strategy="afterInteractive"
        id="google-analytics"
        >
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7C8S5767C3', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
}
