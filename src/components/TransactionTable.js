import React, { useState } from "react";

function TransactionTable({ txns }) {
  const [dateOfTrnsct, setDateOfTrnsct] = useState("");
  const [dateFill, setDateFill] = useState("");
  const [sorting, setSorting] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleSorting = () => {
    let sortedProp = [...tableData];
    return sorting
    ? sortedProp
        .sort((a, b) => a.amount - b.amount)
        .map((sortedTxns, index) => (
          <tr key={index}>
            <td>{sortedTxns.date}</td>
            <td>{sortedTxns.description}</td>
            <td>{sortedTxns.type === 1 ? "Debit" : "Credit"}</td>
            <td>{sortedTxns.amount}</td>
            <td>{sortedTxns.balance}</td>
          </tr>
        ))
    : null
  };

  const changeDate = (e) => {
    setDateFill(e.target.value);
  };

  const filterData = () => {
    let someTxns = txns.filter((txn) => txn.date === dateOfTrnsct);
    someTxns.map((filteredTxns, index) => (
        <tr key={index}>
          <td>{filteredTxns.date}</td>
          <td>{filteredTxns.description}</td>
          <td>{filteredTxns.type === 1 ? "Debit" : "Credit"}</td>
          <td>{filteredTxns.amount}</td>
          <td>{filteredTxns.balance}</td>
        </tr>
      ));
    // setTableData(someTxns)
    console.log('here', someTxns)
    return someTxns;
  };

  const handleTableData = () => {
    return dateOfTrnsct === ""
      ? txns.map((txn, index) => (
          <tr key={index}>
            <td>{txn.date}</td>
            <td>{txn.description}</td>
            <td>{txn.type === 1 ? "Debit" : "Credit"}</td>
            <td>{txn.amount}</td>
            <td>{txn.balance}</td>
          </tr>
        ))
      : filterData()
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input
          id="date"
          type="date"
          onChange={changeDate}
          defaultValue="2019-11-29"
        />
        <button
          className="small"
          onClick={() => {
            return (setDateOfTrnsct(dateFill), setSorting(false));
          }}
        >
          Filter
        </button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount" onClick={() => setSorting(!sorting)}>
                  Amount ($)
                </span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>{sorting ? handleSorting() : handleTableData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
