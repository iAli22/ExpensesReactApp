import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default Filter Values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set Text Filter", () => {
  const text = "this is my filter";

  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set StartDate filter", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should set EndDate filter", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
