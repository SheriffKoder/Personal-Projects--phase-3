
// return a passed form data with what is passed


//Part 11.01
//this is if passing a single file and an object (with keys:values)
const getFormData = (object:any, file:File|null) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    if (file !== null) {
        formData.append("file", file);
    }
    return formData;
}

//this will be used many times after each other
//each time it returns the same formData passed
//pass a single file, single file, single file etc separately
//and takes also an object separately with a form data defined outside to add its keys:values to this form data and return it
const getFormData_multiple = (formData:FormData, file:File|string|null, key:string|null ,object: any) => {
    if (file !== null) {
        formData.append(`file${key}`, file);
    }
    if (object !== null) {
        Object.keys(object).forEach(key => formData.append(key, object[key]));
    }

    return formData;
}


export {getFormData, getFormData_multiple};