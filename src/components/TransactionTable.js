import React, { useState } from "react";

function TransactionTable({ txns }) {
  const [dateOfTrnsct, setDateOfTrnsct] = useState("");
  const [dateFill, setDateFill] = useState("");
  const [sorting, setSorting] = useState(false);

  const sortData = (data, sorting) => {
    let sortedProp = [...data];
    return sorting ? sortedProp.sort((a, b) => a.amount - b.amount) : data;
  };

  const filterit = (data, dateOfTrnsct) => {
    return dateOfTrnsct
      ? data.filter((txn) => txn.date === dateOfTrnsct)
      : data;
  };

  const changeDate = (e) => {
    setDateFill(e.target.value);
  };

  const handleTableData = (data) =>
    data.map((txn, index) => (
      <tr key={index}>
        <td>{txn.date}</td>
        <td>{txn.description}</td>
        <td>{txn.type === 1 ? "Debit" : "Credit"}</td>
        <td>{txn.amount}</td>
        <td>{txn.balance}</td>
      </tr>
    ));

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" onChange={changeDate} />
        <button
          className="small"
          onClick={() => {
            return setDateOfTrnsct(dateFill), setSorting(false);
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
                <span id="amount" onClick={() => setSorting(true)}>
                  Amount ($)
                </span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {handleTableData(filterit(sortData(txns, sorting), dateOfTrnsct))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
