import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calandarFocused: false,
      errors: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
    //this.setState({ [e.target.name]: e.target.value });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //regex
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calandarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { description, amount, createdAt, note } = this.state;
    // validation
    if (!description || !amount) {
      this.setState(() => ({
        errors: "Please set Provide Descriptipn and Amount"
      }));
    } else {
      //Clear Error
      this.setState(() => ({ errors: "" }));
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        {errors !== "" ? <p style={{ color: "red" }}>{errors}</p> : null}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            // name="description"
            placeholder="Type Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Type Amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calandarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <textarea
            name="note"
            placeholder="Add Note For Your Expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
