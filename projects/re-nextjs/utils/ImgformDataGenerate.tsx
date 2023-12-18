    //Part 11.01
    const getFormData = (object:any, file:File|null) => {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        if (file !== null) {
            formData.append("file", file);
        }
        return formData;
    }


    const getFormData_multiple = (formData:FormData, file:File|null|string, key:string|null ,object: any) => {
        if (file !== null) {
            formData.append(`file${key}`, file);
        }
        if (object !== null) {
            Object.keys(object).forEach(key => formData.append(key, object[key]));
        }

        return formData;
    }


    export {getFormData, getFormData_multiple};