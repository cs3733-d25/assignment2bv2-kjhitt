
import {List2} from "./components/list2.tsx"
import {Table2} from "./components/table2.tsx"
import {Form2} from "./components/form2.tsx"

export function Hobby2() {
    return (
        <div className={"hobby1"}>
            <h2>Daksh's Hobby</h2>
            <p>
                Hi My name is Daksh and I'm a student who loves coding, music, and staying active.
                One of my favorite hobbies I've picked up recently is playing golf. It's a relaxing yet challenging sport that I enjoy playing with my friends.
            </p>
            <div id={"p"}>
                <img src={"public/pebblebeach.jpeg"} width={460} alt={"Forza Horizon 5 Banner"} />
            </div>
            <List2></List2>
            <Table2></Table2>
            <Form2></Form2>
        </div>
    )
}