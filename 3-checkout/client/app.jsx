class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
      confirmation: false,
      finalPage: false,
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
    this.update = this.update.bind(this);
    this.saveDb = this.saveDb.bind(this);
    this.resetState = this.resetState.bind(this);
    this.toFinalPage = this.toFinalPage.bind(this);
  }

  openForm1(event) {
    event.preventDefault()
    this.setState({checkout: false, form1: true})
  }

  openForm2(event) {
    event.preventDefault()
    this.setState({form1: false, form2: true})
  }

  openForm3(event) {
    event.preventDefault()
    this.setState({form2: false, form3: true})
  }

  confirmation(event) {
    event.preventDefault()
    this.setState({form3: false, confirmation: true});
  }

  toFinalPage(event) {
    event.preventDefault()
    this.setState({confirmation: false, finalPage: true})
  }

  update(event) {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  saveDb() {
    axios.post('/checkout', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: [{
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      }],
      phoneNumber: this.state.phoneNumber,
      creditCard: this.state.creditCard,
      expiryDate: this.state.expiryDate,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip 
    })
    .then((response) => {console.log(response)})
    .catch((error) => {console.log('Error with POST request: ', error)})
  }
  
  resetState(event) {
    event.preventDefault()
    this.setState({
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
      confirmation: false,
      finalPage: false,
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
    })
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
            <input key='1' type='text' name='name' placeholder='Name' onChange={this.update}/>
            <br />
            <input key='2' type='text' name='email' placeholder='Email' onChange={this.update}/>
            <br />
            <input key='3' type='text' name='password' placeholder='Password' onChange={this.update}/>
          </form>
          <button onClick={this.openForm2}>Next</button>
        </div>
      )
    } else if (this.state.form2) {
      return (
        <div className='container'>
          <h1>Form 2</h1>
          <form>
            <input key='4' type='text' name='line1' placeholder='Address Line 1' onChange={this.update}/>
            <br />
            <input key='5' type='text' name='line2' placeholder='Address Line 2' onChange={this.update}/>
            <br />
            <input key='6' type='text' name='city' placeholder='City' onChange={this.update}/>
            <br />
            <input key='7' type='text' name='state' placeholder='State' onChange={this.update}/>
            <br />
            <input key='8' type='text' name='zipcode' placeholder='Zip Code' onChange={this.update}/>
          </form>
          <button onClick={this.openForm3}>Next</button>
        </div>
      )
    } else if (this.state.form3) {
      return (
        <div className='container'>
          <h1>Form 3</h1>
          <form>
            <input key='9' type='text' name='phoneNumber' placeholder='Phone Number' onChange={this.update}/>
            <br />
            <input key='10' type='text' name='creditCard' placeholder='Credit Card' onChange={this.update}/>
            <br />
            <input key='11' type='text' name='expiryDate' placeholder='Expiration Date' onChange={this.update}/>
            <br />
            <input key='12' type='text' name='cvv' placeholder='CVV' onChange={this.update}/>
            <br />
            <input key='13' type='text' name='billingZip' placeholder='Billing Zip' onChange={this.update}/>
          </form>
          <button onClick={this.confirmation}>Next </button>
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
          <button onClick={this.saveDb} onClick={this.toFinalPage}>Submit</button>
        </div>
      )       
    } else if (this.state.finalPage) {
      return (
        <button onClick={this.resetState}>Return to Home Page</button>
      )
    }
  }
}


ReactDOM.render(<App />, document.getElementById('app'));