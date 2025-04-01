import {Hobby1} from"./hobby1.tsx"
import './App.css'
import {Intro} from "./intro.tsx";
import {Title} from "./title.tsx";

function App() {
    return (
        <div>
            <div className={"title-page"}>
                <Title />
            </div>
            <div className={"intro-page"}>
                <Intro name1={"Keagan Hitt"} name2={"Daksh Gajaria"} />
            </div>
            <div className={"hobby-page"}>
                <Hobby1 />
            </div>
        </div>
    )
}

export default App
