import { Analytics } from '@vercel/analytics/react';

import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "PromptGenius",
    description: "descover & share AI prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="pt-2">
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>

                <Analytics />
            </body>
        </html>
    )
}

export default RootLayout