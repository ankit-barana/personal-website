import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <Head />
            <body className="bg-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
