

///////////////////////////////////////////////////////////////
////Asking Questions
/*
- ask about the problem not what is done toward the problem to get better answers
- describe it in "one" sentence

Title
problem introduction
    part of code
relevant tags
-> recheck as the answerer

What do you think the problem is?
What exactly do you want to happen?
What is actually happening?
How did you get there?
What have you tried so far?


*/


///////////////////////////////////////////////////////////////
////The Internet
/*



Network; communication between two computers - physical or wireless
Router; a device in between all ends connected in the same Network
The Web; service on top of the internet, where a document is arranged accessed addressed

Internet; 
hardware/infrastructure/technical backbone - a wire
"network of servers talking to each other"
these servers are connected to the "same network"
connected through optical fiber cables
files on the data centers are stored on solid hard-drives
"each server has a unique ip address"

Web page; document with a unique domain name
Web site; collection of pages
Web server; computer host/send the code-files/media-assets
Browser; application


Every connected device/server has a 
unique-protocol-address or IP/domain



////In your own words, explain what happens when you run a search on google.com

type google.com
    browser asks the computer if it recognizes the ip address 
    of that domain in the OS local DNS cache
if not found
    the client computers connected to router 
    router connected to a local ISP
    ISP connected to the internet

    browser goes to the DNS server(address book) in the ISP Data center
    makes an HTTP DNS Query download-request using TCP/IP protocol
    the request contains headers, meta-data
    finds the ip address of the destination

the client has the IP address
    client request then is released from the ISP
    to go through the internet (containing guiding routers)
    to reach its destination
    where the request gets wrapped in layer with each router
    to the destination to help the response packet on the way back
    by unwrapping these layers

    the website in question is stored on a server 
    where it is generated dynamically or the website code is stored there
    and based on the client request, the code sends a back response
    either in rendered-views or json data (if its an API)
    to be able to be used by the client
    the client might want .html and the browser displays it
    or json data to use it in their front end (like mobile apps)


////

Internet routers:
routers along this path help direct the packets (data sending format)
each step forward, packet get wrapped in layer of the router it visits
each step backwards, packet get a layer removed of the router it visits
till reach last router then to the client


DNS:
when you register a Domain name
it is registered by a registrar (ICANN)
the record is then maintained by a registry operator
who propagates the Domain to other DNS servers around the world

Http protocol:
a standard about how the request sent between clients/servers
should look like

Rendered-views response pages:
The browser generates an in-memory DOM tree from the parsed HTML, 
generates an in-memory CSSOM structure from the parsed CSS, 
compiles and executes the parsed JavaScript.


URL: Uniform Resource locator
Relative: normal, Absolute: local directory


http://www.example.com:80/ path/to/myfile.html?key1=value1&key2#bookmark
  1    2            3   4           5              6            7

1) protocol
2) authority
3) domain (checked before authority on DNS lookup)
4) port
5) path to the resource
6) extra parameters, key/value pairs, separated bt &, 
7) anchor: bookmark inside the resource, #identifier


*/



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//Command Line Skills
/*

# whoami                        //tell username
# pwd -P                        //current working directory

//two commands chained using &&
# git add test1.md && git commit -m 'Create first file'



DIRECTORY
# cd                              //go to home
# cd D                            //press tab console will auto-fill with the Documents directory
# cd path                         //go to directory
# cd ..                           //up one path
# ls                              //show list of files in current directory
can add any path to it, -a (hidden), -l (detailed), -lh (MB detailed), 
 -lhS (S sort by size), -lt (t sort by time), -lr (r reverse)


CREATE
# touch file1.txt file2.txt     //create multiple files
# touch test{1..4}.md           //create files from test1 to test4.md
# mkdir name                    //create a folder
# mkdir -v name                 //verbose mode
# mkdir -p A/B/C                //create folder A in it folder B in it folder C

COPY / LINK
# ln file.txt file_copy.txt     //copy a file to another file (hard linking)
# ln file.txt -s                //a link file to the file or directory
# ln file.txt -f                //force already created files

# cp source.txt destination.txt/directory      //copy content to a file or directory
# cp -v source.txt destination.txt/directory   //with verbose mode
# cp -Rv folderA folderB                       //copy folderA contents to folderB with vmode
# cp -f source.txt destination.txt             //force permission
# cp -i source.txt destination.txt             //notify if overwrite



REMOVE / MOVE
# rm file.txt                   //remove file
# rm -Rv folder                 //remove folder              
# mv file1.txt file2.txt        //copy file1 to file2 and remove file1
# cat 

PIPE
# ls -a ~ | grep _                //the output of one command to the input to another command.


*/



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//Git

//a branch is a pointer to a single commit
//each commit is a pointer to the commit that came before it



//sandbox: working directory
//Index: staging area (add . & not yet committed)
//HEAD: current/last-commit branch (last git commit on branch)
//heads (small-case): set of references to commit objects

//a commit is a snapshot

//a commit object contain
//- files
//- references to their parent
//- SHA1 name, 40-char string uniquely identifies the commit obj


//press Q           //Quit
//press Z           //get to end of log



////Creating cloning repos
/*
///////////////////////////////////////////////////////////////
////clone a repo

//create a new repository on github
//cd to a folder on your computer, and enter this in the console terminal
//# git clone GitHubSSHKeyProvidedForThatNewRepo



///////////////////////////////////////////////////////////////
//uploading local repo to github

//mkdir [project]
//cd [project]
//git init                        //turns directory into a git repo
//git remote add origin [url]     //add url of an empty repo on Github



///////////////////////////////////////////////////////////////
//clone a remote branch and work on it locally
git branch --track [new-local-branch-name] [remote-branch-name]

*/



///////////////////////////////////////////////////////////////
////commit message notes
/*
commit early and often meaningful commits, structured and consistent
commit messages should be concise and clear
Content, what it should/shouldn't contain
style: Markup syntax, wrap margins, grammar, capitalization, punctuation, simplicity


use imperative mood when writing a commit
this commit allows me to "Add a new line" "fix something needed"

why/what you are making this change opposed to how





write the commit note outside and copy it to terminal
should look like this

//
50-72 Chars subject line or change summary, no period at end

Around 72 characters of body
Around 72 characters of body
Around 72 characters of body

Result of the change
//

*/




///////////////////////////////////////////////////////////////
////Viewing changes
/*
//git show                  //will show the last commit changes

//git diff                  //will show the current directory "code" changes
                            //happened from the last commit (HEAD)
                            // With --cached compares added files against HEAD;
                            //to do a final review of what is to be committed 
                            //otherwise it compares files not yet added.*

//git log -p                //will show all recent commits

//git log --oneline         //will show all recent commits (subject lines)
//git shortlog              //groups commits by users

//git remote -value         //display the repo URL
//code .                    //open the current directory in vscode


*/



///////////////////////////////////////////////////////////////
////Managing commits
/*
//git status                //will show the current directory "file" changes
                            //happened from the last commit (HEAD)
                            //un "add ." changes will be in red color

//git restore <file>        //gets you to the last version "add ."

//git add .                 //gets into staging area/ pre ready to commit
                            //add . (add all in directory)
//git commit -m "message subject" -m "message body"

//git push                  //add to the current branch
//git push origin main      //add to the main branch or other
//git push --force          //add a local(outdated) branch commit 
                            //which would also get a conflict


//remove commits while preserving the working directory
//git reset [last-good-SHA1] or 
//git reset -hard <l g SHA>         //updates the working directory
//undo this reset with ==
// git reset HEAD^          //resets the commit to the one right before head




////forgot a commit
// git add test4.md (forgot to add this one)
// git commit --amend (add the last add to our commit message)
                        //with no file added, will just replace previous commit message

////undo a commit
//git log               //copy the hash id for the commit
//git revert [hash]     //create a new commit that undoes that commit
                        //follow prompts to edit the commit message or save/commit

////undo changes to a file
//git log               //copy the hash id for the commit
//git checkout [saved hash] -- path/to/file //file old version will be in index(staging area)
//git commit -m ""

//want to ignore an added file
git rm --cached         //will remove it from tracking but leave the file untouched on disk. 
                        //and wont be seen in git status


//want to edit or remove current un added commits
git rebase -i <earlier SHA1>            //edit commit messages or remove by removing the message text
//rebase is used in development as cannot push to remote repos


*/



///////////////////////////////////////////////////////////////
////Managing Branches
/*

//Create/Switch Branches
on Github > repo > main button > add/search name

on Github > repo > setting button > pages > source to main branch

//git branch -a                         //lists all branches
//git branch

////Create
//git branch branchName              //create a new branch
//git checkout -b <name>             //create new branch and checkout to it

//git switch -c branchName          //switches to the specified branch
                                     //creates branch and switches ?
//git push --set-upstream origin new-branch //create a new branch on the remote repository

//go to a branch name
//git checkout [head-name]         //points HEAD(last commit) to the commit object [head-name]
                                    //commit all the new changes before checking out the new head




////Manage
//git branch -d branchName                      //deletes a branch
// git diff [first-branch]...[second-branch]    //Shows content differences between two branches


//git branch [new-head-name] [SHA1-reference-to-a-commit-object]
//create a new head and point it to the requested commit object



git diff [head1]..[head2] shows the diff between the commits referenced by head2 and head1.
git diff [head1]...[head2] (three dots) shows the diff between head2 and the common ancestor of head1 and head2. For example, diff master...fix-headers above would show the diff between (D) and (B).
git log [head1]..[head2] shows the change log between head2 and the common ancestor of head1 and head2. With three dots, it also shows the changes between head1 and the common ancestor; this is not so useful. (Switching head1 and head2, on the other hand, is very useful.)
git diff --staged //if added and diff no show




//ex//
//committing to the wrong branch
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git stash
# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here";
# now your changes are on the correct branch

or 

git checkout name-of-the-correct-branch
# grab the last commit to master
git cherry-pick master
# delete it from master
git checkout master
git reset HEAD~ --hard

*/



///////////////////////////////////////////////////////////////
////managing a remote repo
/*



////GET 
//git fetch                             //downloads all history from the remote branches
//git merge                             //combines remote branch into current local branch
or
//git pull origin/upstream branchName   //gets updates
//git pull                              //fetch+merge
                                        //updates local working branch
                                        //with new commits from the remote branch

//POST 
// git push                             //Uploads all local branch commits to GitHub

*/



///////////////////////////////////////////////////////////////
////Forking a repository
/*
//go to the project want to fork, press the fork button, add to your repository
//clone the repo stored in your repos on your computer

////syncing with the upstream forked repo
//git remote -v
//git remote add upstream sshlink
//git remote -v                         //now we have origin our fork
                                        //upstream the original repo
//git fetch upstream                    //will give all branches for the repo
//git checkout main                     //go to your main branch
//git merge upstream/main               //merge the remote with your local
                                        //will "remove" your files and "replace with" the new files

or
//open the original github repo
//click fetch upstream
//fetch and merge


////submitting a pull request
//after pushing
//go to the original repo page
//pull request > new pull request > compare accross forks
//choose the destination branch / your branch 
//create new pull request will promote to add a comment


////merging pull requests
changes on same lines in same file
must resolve all merge conflicts on github manually before can merge a pull request
by manually edit the conflicted file to select the changes to keep

*/




// mark files to be moved (rename) and removed, respectively, much like git add.
// git mv and # git rm 


//git garbage collection deleting all branches not visited in the graph
// git gc
