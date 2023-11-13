// import React from 'react'


//import styles
import '@styles/globals.css';   //import the css to the entire application


//define metadata
export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

//define layout component
const RootLayout = () => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient">
                        {/* changes background */}
                    </div>
                </div>

                <main className="app">
                    {children}
                </main>

            </body>
        </html>
    )
}


export default RootLayout;
