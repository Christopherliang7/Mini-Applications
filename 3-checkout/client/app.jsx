class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
      confirmation: false,
      name: '',
      email: '',
      password: '',
      address: [
        {
          line1: '',
          line2: '',
          city: '',
          state: '',
          zipcode: '',
        }
      ],
      phoneNumber: '',
      creditCard: '',
      expiryDate: '',
      cvv: '',
      billinZip: ''
    }
    this.openForm1 = this.openForm1.bind(this);
    this.openForm2 = this.openForm2.bind(this);
    this.openForm3 = this.openForm3.bind(this);
    this.confirmation = this.confirmation.bind(this);
  }

  openForm1(event) {
    event.preventDefault()
    this.setState({checkout: false, form1: true})
  }

  openForm2(event) {
    event.preventDefault()
    this.setState({form1: false, form2: true})
    console.log(this.state)
  }

  openForm3(event) {
    event.preventDefault()
    this.setState({form2: false, form3: true})
  }

  confirmation(event) {
    event.preventDefault()
    this.setState({form3: false, confirmation: true});
  }

  render() {
    if (this.state.checkout) {
      return (
        <div className='container'>
          <h1>Illegal Llama Shop</h1>
          <button onClick={this.openForm1}>Checkout</button>
        </div>
      )
    } else if (this.state.form1) {
      return (
        <div className='container'>
          <h1>Form 1</h1>
          <form>
            <input type='text' name='name' placeholder='Name'/>
            <br />
            <input type='text' name='email' placeholder='Email'/>
            <br />
            <input type='text' name='password' placeholder='Password'/>
          </form>
          <button onClick={this.openForm2}>Next</button>
        </div>
      )
    } else if (this.state.form2) {
      return (
        <div className='container'>
          <h1>Form 2</h1>
          <form>
            <input type='text' name='line1' placeholder='Address Line 1'/>
            <br />
            <input type='text' name='line2' placeholder='Address Line 2'/>
            <br />
            <input type='text' name='city' placeholder='City'/>
            <br />
            <input type='text' name='state' placeholder='State'/>
            <br />
            <input type='text' name='zipcode' placeholder='Zip Code'/>
          </form>
          <button onClick={this.openForm3}>Next</button>
        </div>
      )
    } else if (this.state.form3) {
      return (
        <div className='container'>
          <h1>Form 3</h1>
          <form>
            <input type='text' name='phoneNumber' placeholder='Phone Number'/>
            <br />
            <input type='text' name='creditCard' placeholder='Credit Card'/>
            <br />
            <input type='text' name='expiryDate' placeholder='Expiration Date'/>
            <br />
            <input type='text' name='cvv' placeholder='CVV'/>
            <br />
            <input type='text' name='billingZip' placeholder='Billing Zip'/>
          </form>
          <button onClick={this.confirmation}>Next </button>
          {/* The function here will send you to the confirmation page */}
        </div>
      )
    } else if (this.state.confirmation) {
      return (
        <div className='container'>
          <h1>Review Your Information Before Submission:</h1>
          <ul>
            <li>Name: {this.state.name}</li>
            <li>Email: {this.state.email}</li>
            <li>Password: {this.state.password}</li>
            <li>Address Line 1: {this.state.line1}</li>
            <li>Address Line 2: {this.state.line2}</li>
            <li>City: {this.state.city}</li>
            <li>State: {this.state.state}</li>
            <li>ZipCode:{this.state.zipcode}</li>
            <li>Phone Number: {this.state.phoneNumber}</li>
            <li>Credit Card: {this.state.creditCard}</li>
            <li>Expiration Date: {this.state.expiryDate}</li>
            <li>CVV: {this.state.cvv}</li>
            <li>Billing ZipCode: {this.state.billingZip}</li>
          </ul>
          {/* The function here will send a post request to store info in database */}
          {/* The function here will bring you back to home page and set state back to default */}
        </div>
      )
    } 
  }
}


ReactDOM.render(<App />, document.getElementById('app'));