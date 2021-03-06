import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={expense => {
            this.props.editExpense(expense);
            this.props.history.push("/");
          }}
        />
        <button
          onClick={() => {
            this.props.removeExpense({ id: this.props.expense.id });
            this.props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
