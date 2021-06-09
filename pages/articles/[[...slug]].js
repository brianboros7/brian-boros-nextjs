import Header from '../../components/header/Header'
import { url } from '../../next.config' 
import { useRouter } from "next/router"

function Article() {
    
    return(
        <div>
            <Header /> 
            <h2>hello I'm an article</h2>
        </div>
    )
}

export default Article 