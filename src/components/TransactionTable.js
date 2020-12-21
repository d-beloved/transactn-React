import React from "react";

function TransactionTable({txns}) {
  const sort = () => {};

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-29" onChange="" />
        <button className="small">Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>date</td>
                  <td>description</td>
                  <td>type === 1 ? "Debit" : "Credit"</td>
                  <td>amount</td>
                  <td>balance</td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
