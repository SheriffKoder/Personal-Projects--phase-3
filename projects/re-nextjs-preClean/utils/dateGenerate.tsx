
const getToday_date = () => {
    const today = new Date();
        const Year = today.getFullYear();
        let Month = today.getMonth();
        let Day = today.getDate();
        if (Day < 10) Day = +('0' + Day);
        const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

        let date = Day+" "+monthName[Month]+" "+Year; 

        return date;

}

const updateUser_lastUpdate = async (userId:string) => {
    const response = await fetch(`/api/users/updateDate/${userId}`, {
        method: "PATCH",
        })
}


export {getToday_date, updateUser_lastUpdate};