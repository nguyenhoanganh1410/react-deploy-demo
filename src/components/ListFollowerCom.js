import { useEffect, useRef } from "react"
import { useState } from "react/cjs/react.development"
import { useFeatch } from "../hooks/useFeatch"
import FollowerCom from "./FollowerCom"

const ListFolloweCom = () =>{
    const {data, loading} = useFeatch() 
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])
   
    useEffect(()=>{
        if(loading) return
        setFollowers(data[page])
    }, [loading, page])

    const hanldNextClick = (e) =>{
       const activeIdx = document.querySelector('.active-btn').textContent
       //trang cuoi
        if(+activeIdx === data.length){
            setPage(0)
        }
        else{
            setPage(+activeIdx)
        }

    }
    const hanldPreClick = () =>{
        const activeIdx = document.querySelector('.active-btn').textContent
        //trang cuoi
         if(+activeIdx === 1){
             setPage(data.length-1)
         }
         else{
             setPage(+activeIdx - 2)
         }
    }
    const changePage = (idx) =>{
        setPage(idx)
    }
    return (
        <section className="pagination">
            <div className="wrapper">
                <div className="title">
                    <h1 className="pagi_title">pagination</h1>
                    <div className="pagi_line"></div>
                </div>
                <div className="list_person">
                    {
                        followers.map(val =>{
                            return  <FollowerCom key={val.id} info={val} />
                        })
                    }
                  

                </div>
                <div className="navigation">
                    <button className="pre-btn"
                             onClick={(e) => hanldPreClick(e)}
                    >prev</button>
                    {
                        data.map( (val, idx)=>{
                            return <button className={`page-btn ${idx === page ? 'active-btn' : null}`}
                                        onClick={() => changePage(idx)}
                                     
                                    >{idx+1}</button>
                        })
                    }
                    <button className="next-btn"
                            onClick={(e) => hanldNextClick(e)}
                    >next</button>
                </div>
            </div>
        </section>
    )

}

export default ListFolloweCom