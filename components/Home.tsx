
import  {useState} from "react"
export default function Home(){
    const [loading, setLoading] = useState(false)
    const [githubData, setGithubData] = useState(null)
    const  [username, setUsername] = useState("")

    const getGithubUser = async ()=>{
        setLoading(true)
        const response = await fetch(
            `https://api.github.com/users/${username}`
        )
        const data = await response.json()
        setGithubData(data)
        setLoading(false)
    }

    return(

    )
}