import Navbar from "@/app/components/navbar"
import TikTok from "@/app/components/tiktok"
import { Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

interface IHero
{
    heroName: string
    attackType: string
}

const RoomPage = () => {
    // let n : number = 10
    const [n, setN] = useState<number>(0)
    const dummyHeros : IHero[] = [{heroName : "A", attackType: "A"}]
    const [heros, setHeros] = useState<IHero[]>(dummyHeros);


    const onButtonClicked = () => {
        console.log("clicked.")
        // n += 1
        setN(n + 1)
        // getX()
    }

    useEffect(() => {
        getX()
    }, [])

    const getX = async () => {
        // const urlGetHeroes = "https://api.opendota.com/api/heroes"
        // const response = await axios.get(urlGetHeroes)
        // // console.log(response.data)
        // response.data.forEach((hero:any)=> {
        //     const newHero : IHero = {
        //         heroName: response.data.name,
        //         attackType: response.data.attack_type
        //     }
        //     setHeros(
        //         [
        //             ...heros,
        //             newHero
        //         ]
        //     )
        //     console.log(heros)
        // });
    }



    return <div>
        {/* <TikTok isTick={true} size={64}/>
        <TikTok isTick={false}/> */}
        
        {/* <FullFeaturedCrudGrid /> */}
    </div>
}

export default RoomPage