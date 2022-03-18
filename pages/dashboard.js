import {useState, useEffect} from "react";

function Dashboard (){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(()=>{
        async function getDashboardData (){
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        getDashboardData()
    },[])

    if (isLoading) {
        return(
            <h1>Loading....</h1>
        )
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>{data.posts}</h2>
            <h2>{data.likes}</h2>
            <h2>{data.followers}</h2>
        </div>
    )
}

export default Dashboard