

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  
    return (
  
       
        <section className="min-w-full  ambientBackground relative">
        
        <div className="h-[100vh] w-[100%]
        
        ">
            {children}
        </div>
    </section>
    );
  }
  