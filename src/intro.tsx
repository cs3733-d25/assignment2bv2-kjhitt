export type Names = {
    name1: string;
    name2: string;
}

export function Intro({name1, name2} :Names) {
    return (
        <div>
            <h2>About Us</h2>
            <p>
                {name1} is a sophomore CS and BCB major at WPI, and he is 20 years old. He is from southern New Hampshire,
                where he has lived for his whole life up until college. {name2} is a sophomore CS major at WPI as well, he is
                from Eastern Mass.
            </p>
        </div>
    )
}