import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(() => {
  // Don't Repeat YourSelf
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render AddExpensePage Correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle OnSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
