export function Form2(){
    return (
        <form>
            <label htmlFor="CurrentDriver">Current Driver:</label>
            <input type="text" id="CurrentDriver" name="CurrentDriver"/><br/><br/>

            <label htmlFor="CurrentIron">Current Iron:</label>
            <input type="text" id="CurrentIron" name="CurrentIron"/><br/><br/>

            <label>Favorite Aspects of Golf:</label><br/>
            <input type="checkbox" id="driving" name="aspect" value="Driving"/>
            <label htmlFor="driving">Driving</label><br/>
            <input type="checkbox" id="putting" name="aspect" value="Putting"/>
            <label htmlFor="putting">Putting</label><br/>
            <input type="checkbox" id="strategy" name="aspect" value="Strategy"/>
            <label htmlFor="strategy">Strategy</label><br/><br/>

            <label>Preferred Time to Play:</label><br/>
            <input type="radio" id="morning" name="time" value="Morning"/>
            <label htmlFor="morning">Morning</label><br/>
            <input type="radio" id="afternoon" name="time" value="Afternoon"/>
            <label htmlFor="afternoon">Afternoon</label><br/>
            <input type="radio" id="evening" name="time" value="Evening"/>
            <label htmlFor="evening">Evening</label><br/><br/>

            <label htmlFor="comments">Comments:</label><br/>
            <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br/><br/>

            <label htmlFor="club">Favorite Club:</label>
            <select id="club" name="club">
                <option value="driver">Driver</option>
                <option value="iron">Iron</option>
                <option value="putter">Putter</option>
            </select><br/><br/>

            <button type="submit">Submit</button>
        </form>

    )
}