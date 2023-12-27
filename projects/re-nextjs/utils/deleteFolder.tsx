
import { join, resolve } from "path";
import { writeFile , unlink, readdir, rmdir} from "fs";


//need to wait for all subfolders to be deleted in order to delete the main folder (path)
//waiting for each subfolder for the next subfolder to be deleted is not necessary though



//Promise
const removeInternalFiles = (files:string[], path:string) => {
return new Promise(async (resolve, reject) => {

        let i = 1;
        for (const file of files) {
            //remove file
            await unlink(join(path, file), (err) => {
                //callback function at end
                if (err) {throw err}
                //resolve when done or if there are still files continue
                else if (i === files.length) {resolve(true)}
                else {i = i+1};
            });

        }

    });
};


//Promise
const removeFolderWithFiles = (path:string, subFolder:string) => {
    return new Promise (async (resolve, reject) => {

    let subPath = join(process.cwd()+ path + `${subFolder}`);;
    
    //Read-folder1
    console.log("reading... "+ subPath);
    await readdir(subPath, async (err, files) => {  //1
        console.log(files); //1.1
        if (err) {
            //if error, most probably folder not exist, resolve also
            resolve(true);
            // throw err;
        }

        else {
            //if the folder has files, delete them, then delete folder, then resolve
            if (files.length > 0) {
                //Delete posts, properties, profile
                removeInternalFiles(files, subPath).then(async (allDeleted)=> { //2
                    console.log(allDeleted);
                    if (allDeleted) {   //2.2
                        //delete the folder when all internal files are deleted / promise resolved
                        await rmdir(join(subPath), (error)=> {  //3
                            console.log(error);
                            //once all files deleted, and the folder, resolve the promise
                            resolve(true);
                        });
                    }
                })
        

            //if it is an empty folder, delete and resolve
            } else if (files.length === 0) {
                await rmdir(join(subPath), (error)=> {  //3
                    console.log(error);
                    //once folder is deleted
                    resolve(true);
                });                
            }
        }
    })




    });
}


const FolderClear = (path:string, folders:string[]) => {
    return new Promise ((resolve, reject) => {
        for (let i = 0; i < folders.length; i++) {
            // console.log(myFolders[i]);
            removeFolderWithFiles(path, folders[i]).then(FolderDeleted => {
                if (FolderDeleted) {
                    console.log(i+ " Files and Folder deleted");
                    i = i + 1;
                    if (i === folders.length) resolve(true);
                }
            })    
        }    
    });    
}

const removeFolder = (path:string, mySubFolders:string[] ) => {
    FolderClear(path, mySubFolders).then((subFoldersDeleted)=> {
        if (subFoldersDeleted) {
            removeFolderWithFiles(path, "");
        }
    });    
}
 
export {removeFolder};