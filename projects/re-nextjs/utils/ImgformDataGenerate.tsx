    //Part 11.01
    const getFormData = (object:any, file:File|null) => {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        if (file !== null) {
            formData.append("file", file);
        }
        return formData;
    }

    export {getFormData};