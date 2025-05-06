// 全てのページ共通の処理を記載する

import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}