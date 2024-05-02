/*

1) run npm install
npm run dev






*/

(function() {
  const content = document.querySelector('.content');
  const loading = document.querySelector('.loading');
  
  let nextPage = 1;

  function renderUsers(users) {
    users.results.map(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = user.email;
      content.appendChild(userDiv);
    });
  }

  async function getUsers(page) {
    const userData = await fetch(
      `https://randomuser.me/api/?page=${page}&results=50`
    );
    const users = await userData.json();
    return users;
  }

  // ----------------------------
  // START HERE
  // ----------------------------

  async function loadMoreUsers() {
    //grab from the content div
    const {scrollTop, clientHeight, scrollHeight } = content;

    //scrollHeight all the content of the div, scrollTop value we scrolled from the div
    //if equal, we know we scrolled to the bottom of the div
    if (scrollHeight - scrollTop === clientHeight) {
      //show the loading div
      loading.classList.add("show");
      const users = await getUsers(nextPage);
      renderUsers(users);
      loading.classList.remove("show");
      nextPage += 1;
    }
    

    

  
  
  }

  //call initially before loading anything
  loadMoreUsers();
  nextPage += 1;


  // EventListeners
  //the content div is 800x800
  //when we want to scroll some content, it will be higher in length than the div itself
  //we also want to know, how far from the content div we have scrolled
  content.addEventListener("scroll", loadMoreUsers);





})();
