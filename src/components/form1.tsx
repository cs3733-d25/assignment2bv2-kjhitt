export function Form1() {
    return (
    <form>
        <br/>
        <label htmlFor="favgame">What is your favorite game?</label>
        <input type="text" id="favgame"/>
        <br/>
        <br/>
        <label htmlFor="favexp">Why do you like that game?</label>
        <input type="text" id="favexp"/>

        <p>Have you played:</p>
        <input type="checkbox" id="splitcheck"/>
        <label htmlFor="splitcheck">Split Fiction</label>
        <br/>
        <input type="checkbox" id="wildscheck"/>
        <label htmlFor="wildscheck">Monster Hunter Wilds</label>
        <br/>
        <input type="checkbox" id="assassincheck"/>
        <label htmlFor="assassincheck">Assassin's Creed Shadows</label>
        <br/>
        <input type="checkbox" id="civcheck"/>
        <label htmlFor="civcheck">Sid Meier's Civilization VII</label>
        <br/>

        <p>If so, what is your favorite?</p>
        <input type="radio" id="splitrad" name="favgame"/>
        <label htmlFor="splitrad">Split Fiction</label>
        <br/>
        <input type="radio" id="wildsrad" name="favgame"/>
        <label htmlFor="wildsrad">Monster Hunter Wilds</label>
        <br/>
        <input type="radio" id="assassinrad" name="favgame"/>
        <label htmlFor="assassinrad">Assassin's Creed Shadows</label>
        <br/>
        <input type="radio" id="civrad" name="favgame"/>
        <label htmlFor="civrad">Sid Meier's Civilization VII</label>
        <br/>

        <br/>
        <label htmlFor="comments">Comments:</label>
        <br/>
        <textarea id="comments" rows={6} cols={75}>Comments go here.</textarea>
        <br/>
        <br/>

        <label htmlFor="upcoming">What upcoming game are you most excited for?</label>
        <select id="upcoming">
            <option>Grand Theft Auto 6</option>
            <option>Doom: The Dark Ages</option>
            <option>Borderlands 4</option>
        </select>
        <br/>
        <br/>

        <button type="submit">Submit</button>
    </form>
    )
}