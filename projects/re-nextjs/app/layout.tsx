
//the website's main layout

import "@styles/globals.css"; //import the css to the entire application

//import layout components
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import MyLoading from "@components/Home/myLoading";
import Login_component from "@components/Auth/Login"; //the nav causes this to show
import SignUp_component from "@components/Auth/SignUp"; //the nav causes this to show


//02X.03
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@components/AuthProvider";


export const metadata = {
  title: 'RE Website',
  description: 'Search for your next home',
}

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  


  return (
    <AuthProvider>

    <html className="relative" lang="en">
      {/* <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900"> */}
      <body className="w-full flex justify-center relative h-auto ">

          <div className="absolute top-0 z-[3] w-full max-w-full"
          id="main__main-container">


            <main className="myMain2 dark:before:bg-[#000000e3] w-full  flex flex-col justify-start 
              absolute top-0 box-shadow-1">


              {/* allow having a 100vh container that includes all our components that is scrollable in this 100vh */}
              {/* <div className="max-h-[100vh] overflow-y-scroll z-[3]"> */}
              {/* <div className="h-[100vh] z-[2]"> */}

              {/* render an element that hides the dark/light theme flickering */}
              <div className="w-full sticky top-0 z-[99]">
                <MyLoading />
              </div>
              
              {/* nav, login, sign-up elements */}
              <div className="w-full h-auto sticky top-0 my-0 z-[7] flex justify-center">
                <Nav />
                <div className="w-full absolute top-0 z-[8]">
                  <Login_component />
                  <SignUp_component />
                </div>
              </div>




              {/* this will hold the Home component in app>page.jsx */}
              <div className="z-[5] min-h-[100vh]" id="children_container">
                {/* <Suspense fallback={<Loading />}> */}
                  {children}
                {/* </Suspense> */}
              </div>

              <div className="z-[5]" id="footer">
                <Footer />
              </div>


              {/* </div> */}

            </main>
          </div>



      </body>
    </html>
    </AuthProvider>

  )
}


export default RootLayout;