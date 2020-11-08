class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
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

  render() {
    if (this.state.checkout) {
      return (
        <div>
          <h1>Illegal Llama Shop</h1>
          <button onClick={this.openForm1}>Checkout</button>
        </div>
      )
    } else if (this.state.form1) {
      return (
        <div>
          <h1>Form 1</h1>
          <button onClick={this.openForm2}>Next</button>
        </div>
      )
    } else if (this.state.form2) {
      return (
        <div>
          <h1>Form 2</h1>
          <button onClick={this.openForm3}>Next</button>
        </div>
      )
    } else if (this.state.form3) {
      return (
        <div>
          <h1>Form 3</h1>
          {/* <button>Next</button> */}
        </div>
      )
    }
  }
}


ReactDOM.render(<App />, document.getElementById('app'));