import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const uploadImage = async (image:File) => {
    const imageData = await image.arrayBuffer();
    const mime = image.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(imageData).toString('base64');
    const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'nextjs-course-mutations',
    });
    return result.secure_url;
}



// takes 1 file and returns its url or a set of files and returns a string array of their urls
// use map instead, and you can await the array of promises that you'll get with Promise.all
const storeImages = async (files:any) => {

  console.log(files);
  let files_url:string[] = [];





  // return an array of created urls
  // else if it is only one image uploaded i.e a post entry, just return the url string
  if (Array.isArray(files)) {


    await Promise.all(files.map(async(file:File, index:number)=>{
      if (typeof file !== "string" && file !== null) {
  
          // const path = join(process.cwd(), `/public/images/agent-${currentProperty?.property_userId.toString()}/properties`, file.name);
          
          // let file1_url = ""; 
          // file1_url = path.split("public")[1];
          // files_url.push(file1_url);
          // console.log(file1_url);
          // console.log(files_url);
  
          // const bytes = await file.arrayBuffer();
          // const buffer = Buffer.from(bytes);
  
          // await writeFile(path, buffer, (err)=>console.log(err));
          // console.log(`image ${file.name} is saved in ${path}`);
  
          let imageUrl = await uploadImage(file);
          console.log(imageUrl);
          files_url[index] = imageUrl;
          console.log(files_url);
         
          console.log("1")
  
  
          
      } 
      else if (typeof file == "string") {

        //if the file is a string type then it has not been changed
        //push the string as a url already, and add/push the new string for new files
        files_url[index] = file;
         
      }

    }))

    return files_url
  
  } else {


    let imageUrl = await uploadImage(files);
    // console.log(imageUrl);
    files_url[0] = imageUrl;
    // console.log(files_url);
   

    return files_url[0];


  }


}


export {uploadImage, storeImages};
