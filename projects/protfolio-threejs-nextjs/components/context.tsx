import React, { ReactNode, createContext, useContext, useState } from 'react';

export const linkContext = createContext({
    activeLink:"about",
    updateLink: (link:string) => {}
});

//context for nav2 component which is used in the home component as a section reference
const LinkProvider: React.FC<{children: ReactNode}>= ({children}) => {
    const [activeLink, setActiveLink] = useState("");

    const updateLink = (link:string) => {
        setActiveLink(link);
    }

    return (
        <linkContext.Provider value={{activeLink,updateLink}}>
            {children}
        </linkContext.Provider>
    );
}

export default LinkProvider;