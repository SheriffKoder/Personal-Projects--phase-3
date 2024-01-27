//this will be used many times after each other
//each time it returns the same formData passed
//pass a single file, single file, single file etc separately
//and takes also an object separately with a form data defined outside to add its keys:values to this form data and return it
export const getFormData_multiple = (formData:FormData, file:File|string|null, key:string|null ,object: any) => {
    if (file !== null) {
        console.log(file);
        formData.append(`file${key}`, file);
    }
    if (object !== null) {
        console.log(object);
        Object.keys(object).forEach(key => formData.append(key, object[key]));
    }

    console.log(formData);
    return formData;
}
