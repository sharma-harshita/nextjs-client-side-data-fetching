import useSWR from "swr"

const fetcher = async()=>{
    const response = await fetch ("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
}

function DashboardSWR(){
    
    // This hook takes two parameter, first is a random key and second is the async function to fetch the data , This hook returns two things data which will be returned from the function and other will be error if any occurs because of async call.

    const {data, error} = useSWR("dashboardData", fetcher)

    if (error) return "An error has occured!!";
    if (!data) return "Loading ...."

    return(
        <div>
            <h1>Dashboard</h1>
            <h2>{data.posts}</h2>
            <h2>{data.likes}</h2>
            <h2>{data.followers}</h2>
        </div>
    )
}

export default DashboardSWR