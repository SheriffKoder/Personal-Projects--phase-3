
import "@styles/globals.css"; //import the css to the entire application

//import layout components
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: 'RE Website',
  description: 'Search for your next home',
}

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  
  return (
    <html className="dark" lang="en">
      {/* <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900"> */}
      <body>

        <div className="myMain">
                
        </div>
        {/* <div className="myMain dark:brightness-10">
                
        </div> */}

          <main className="w-full min-h-full flex flex-col py-8 items-center justify-start 
          absolute top-0">
            <Nav />
            {/* this will hold the Home component in app>page.jsx */}
            {children}
            <Footer />
          </main>


      </body>
    </html>
  )
}


export default RootLayout;