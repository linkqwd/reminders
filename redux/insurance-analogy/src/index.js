import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

class App extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// (Action Creators)
const createPolicy = (name, amount) => {
  return {
    // Action
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoney: amount
    }
  };
};

// Reducers (Departments)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accounting = (bank = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bank - action.payload.amountOfMoney;
  } else if (action.type === "CREATE_POLICY") {
    return bank + action.payload.amount;
  } else {
    return bank;
  }
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  } else {
    return listOfPolicies;
  }
};

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

// STORE
const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 10));
store.dispatch(createPolicy("Bobx", 40));

store.dispatch(createClaim("Bobx", 60));
store.dispatch(deletePolicy("Jim"));

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
