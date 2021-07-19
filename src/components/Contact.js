
function Contact() {
    
    
    return (
    <div className="container">
        <h1>Contact us</h1>
            <div className="row">
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text"  id="first_name" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text"  id="first_name" className="validate"/>
                            <label for="first_name">Last Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="email"  id="email" className="validate"/>
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text"  id="phone" className="validate"/>
                            <label for="phone">Phone Number</label>
                        </div>
                        <div className="input-field col s6">
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Manhattan</option>
                                <option value="2">Brooklyn</option>
                                <option value="3">Bronx</option>
                                <option value="4">Queens</option>
                                <option value="5">Long Island</option>
                            </select>
                            <label>Location</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label for="message">Your Message</label>
                        </div>
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Send
                            <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>   

    </div>
    )
}

export default Contact
