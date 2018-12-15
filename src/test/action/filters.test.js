import {
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("Should generate set Start Date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Should generate set End Date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Should generate sort by Date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Should generate sort by Amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

// Set Text Filter Test

test("should generate Filter with Text value : action object", () => {
  const text = "something in";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate Filter withNot Text value : action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
