import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          
          // Whenever the user explicitly chooses light mode
          localStorage.theme = 'light'
          
          // Whenever the user explicitly chooses dark mode
          localStorage.theme = 'dark'
          
          // Whenever the user explicitly chooses to respect the OS preference
          localStorage.removeItem('theme')
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
