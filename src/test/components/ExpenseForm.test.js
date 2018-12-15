import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("Should Render ExpenseFrom Corrently", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Should Render ExpenseFrom with Expenses Data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("errors").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "new Description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
});

test("should set Note on input change", () => {
  const value = "new Note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set Amount valid data", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
});

test("should Not Set Amount if Not valid data", () => {
  const value = "23.122";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});

test("Should Call OnSubmit For Valid form Submisssion ", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("errors")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

test("should Set New Date On Date Change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should Set calandarFocused On focused", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calandarFocused")).toEqual(focused);
});
