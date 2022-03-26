import { useEffect, useState } from "react"
import { Paniga } from "../components/utils"

 const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
 export const useFeatch = () =>{
     const [loading, setLoading] = useState(true)
     const [data, setData] = useState([])
     console.log(data);
   
    const getProducts = async () => {
       
        const response = await fetch(url)
        const data = await response.json()
        setData(Paniga(data))
        setLoading(false)
    }

    //call 1 time
    useEffect(()=>{
        getProducts()
    }, [])


    return {data, loading}

}

