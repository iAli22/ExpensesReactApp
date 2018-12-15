import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should SetUp Remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should SetUp Edit expense action object", () => {
  const action = editExpense("123abc", { note: "New Value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New Value"
    }
  });
});

// Add Test
test("Should Setup Add Expense action with provided values", () => {
  const expesnesData = {
    description: "Hello",
    note: "New Note",
    amount: 120,
    createdAt: 1000
  };
  const action = addExpense(expesnesData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expesnesData,
      id: expect.any(String)
    }
  });
});

test("should SetUp Add Expenses Action With Defalut Values", () => {
  const expesnesData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  const action = addExpense(expesnesData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expesnesData,
      id: expect.any(String)
    }
  });
});
