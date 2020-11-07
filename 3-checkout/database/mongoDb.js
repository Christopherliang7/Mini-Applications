const mongoose = require('mongoose');
const { string } = require('prop-types');
mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to database.")
});

const infoSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: [{
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: String
  }],
  phoneNumber: String,
  creditCard: String,
  expiryDate: String,
  cvv: String,
  billingZip: String
})

const Customer = mongoose.model('Customer', infoSchema)

const save = (customer) => {
  return Customer.findOneAndUpdate(
    {name: customer.name},
    {
      name: customer.name,
      email: customer.email,
      password: customer.password,
      address: [{
        line1: customer.address[0].line1,
        line2: customer.address[0].line2,
        city: customer.address[0].city,
        state: customer.address[0].state,
        zipcode: customer.address[0].zipcode
      }],
      phoneNumber: customer.phoneNumber,
      creditCard: customer.creditCard,
      expiryDate: customer.expiryDate,
      cvv: customer.cvv,
      billingZip: customer.billingZip
    },
    {upsert: true}
  );
};

module.exports = {save};

