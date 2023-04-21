import React from 'react';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        balance: 0, 
        rate: 0, 
        term: 15, 
        monthlyPayment: ''
       };
  
      this.handleChange = this.handleChange.bind(this);
      this.Calculate = this.Calculate.bind(this);
    }

    handleChange(event) {
      console.log(event.target.name, event.target.value)
      this.setState({[event.target.name]: Number(event.target.value)});
    }
   
    Calculate(balance, rate, term) {
      const x = Math.pow(1 + (rate/100)/ 12, term  * 12);
    let Payment = (balance * (rate/100)/ 12 * x)/(x - 1) 
    this.setState({monthlyPayment:`$${Payment.toFixed(2)} is your payment.`})

    }
    render() {
      return (
        <div className='container'>
          <h3>Mortgage Calculator</h3>
            <label>Loan Balance:</label>
            <input name='balance' type="number" value={this.state.balance} onChange={this.handleChange} />
            <label>Interest Rate (%):</label>
            <input name='rate' type="number" step='0.01' value={this.state.rate} onChange={this.handleChange} />
            <label>Loan Term(Years):</label>
            <select name='term' value={this.state.term} onChange={this.handleChange}>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
          <button name="submit" type="button" onClick={()=>this.Calculate(this.state.balance, this.state.rate, this.state.term)} className="btn btn-primary">Calculate</button>
          <div name = "output"  id = "output"  >{this.state.monthlyPayment}</div>
        </div>   
      );
    }
  }
 
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<NameForm />);
  



