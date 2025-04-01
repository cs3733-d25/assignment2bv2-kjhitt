import {List1} from "./components/list1.tsx"
import {Table1} from "./components/table1.tsx"
import {Form1} from "./components/form1.tsx"

export function Hobby1() {
    return (
        <div className={"hobby1"}>
            <h2>Keagan's Hobby</h2>
            <p>
                Keagan's hobby is playing video games. He spends a lot of his time playing games, such as Call of Duty,
                Minecraft, or the image below, Forza Horizon 5. He mostly plays games on his PC.
            </p>
            <div id={"Forza"}>
                <img src={"public/Forza%20Horizon%205.jpg"} width={460} alt={"Forza Horizon 5 Banner"} />
            </div>
            <List1></List1>
            <Table1></Table1>
            <Form1></Form1>
        </div>
    )
}