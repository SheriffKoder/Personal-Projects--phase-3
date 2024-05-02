/*
until the beginning of video, we only have loading..
because there are no users

1. add useEffect
will want to make the use effect later trigger with each page number change

in useEffect async function that grabs the user from the api
now we have the users grid

2. on the return content component will add onScroll event
to call the handleScroll
> create the handle scroll

if reach the end, set page + 1






*/

import React, { useState, useEffect } from 'react';
// Components
import User from './User';
// Styles
import { Content, Loading } from './App.styles';
// API
import { getUsers } from './API';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = event => {
    //2
    //built into js, destructure out
    const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
    // console.log("Scrolltop: ", scrollTop);  //the actual pixels we scrolled from the top on the div where we put the scroll event 
    // console.log("clientHeight: ", clientHeight);
    // console.log("scrollHeight: ", scrollHeight);  //the actual content in the div, increases by scrolling inside of the div

    //if equals clientHeight, then we reached the bottom
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    } 


  }


  useEffect(()=> {
    //1. this is the way can add an async function in the user effect
    const loadUsers = async () => {
      //
      setLoading(true);
      //getUsers will grab the users from the api
      //will get page 1 on initial load
      const newUsers = await getUsers(page);
      //create a new array with the old + new items
      //spread the prev state and apply the new state
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);

    }


    loadUsers();

  }, [page]);


  return (
    <div className='App'>
      {/* //2 */}
      <Content onScroll={handleScroll}>
        {users && users.map(user => <User key={user.cell} user={user} />)}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  );
}

export default App;
