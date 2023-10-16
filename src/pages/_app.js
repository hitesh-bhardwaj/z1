import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ApolloProvider } from '@apollo/client';
import client from '../components/lib/apolloClient';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-PKJE9LVB35"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7C8S5767C3', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </ApolloProvider>
  );
}
