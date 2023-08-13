import React, { useState } from "react";

const array = [
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
  {
    LoanID: "12",
    ReqID: "12",
    LenderAddress: "12",
    CollateralToken: "12",
    CollateralAmount: "12",
    CollateralPrice: "12",
    BorrowToken: "12",
    BorrowAmount: "12",
    StartTime: "12",
    RepaymentTime: "12",
    InterestRate: "12",
    RepaidAmount: "12",
    RemainingAmount: "12",
    TotalInterest: "12",
    DefaultStatus: "12",
    CloseStatus: "12",
  },
];
function Borrow() {
  const [amount, setAmount] = useState();
  const [days, setDays] = useState();
  const [address, setAddress] = useState();
  const [token, setToken] = useState();
  return (
    <div>
      <div className="px-md-5 my-5 px-2">
        <h2>Borrow</h2>
        <p>Borrow your Assets </p>

        <div className="row pb-4">
          <div className="col-md-6 mx-auto col-sm-12 mt-2 ">
            <div className="card color">
              <div className="card-body">
                <h6>Deposite Collecteral</h6>
                <hr />
                <div className="row my-2">
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ gap: "12px " }}
                  >
                    <label>Token</label>
                    <input
                      type="number"
                      className="py-2 "
                      placeholder="Token"
                      name=""
                      id=""
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ gap: "12px " }}
                  >
                    <label> Amount</label>
                    <input
                      type="number"
                      className="py-2 "
                      placeholder="Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <hr />
                <div className="d-flex mb-5" style={{ gap: "15px " }}>
                  <button className="btn  batan">Deposite Collecteral</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto col-sm-12 mt-2 ">
            <div className="card color">
              <div className="card-body">
                <h6>Avail Loan</h6>
                <hr />
                <div className="row my-2">
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ gap: "12px " }}
                  >
                    <label>Loan ID</label>
                    <input
                      type="number"
                      className="py-2 "
                      placeholder="Loan ID"
                      name=""
                      id=""
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ gap: "12px " }}
                  >
                    <label> Requiest ID</label>
                    <input
                      type="number"
                      className="py-2 "
                      placeholder="Requiest ID"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ gap: "12px " }}
                  >
                    <label>Duration Time</label>
                    <input
                      type="number"
                      className="py-2 "
                      placeholder="Duration"
                      name=""
                      id=""
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                </div>
                <hr />
                <button className="btn  batan">Avail Loan</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card color">
          <div className="card-body  table-responsive">
            <table class="table text-white text-center ">
              <thead>
                <tr>
                  <th scope="col" className="wi_th">
                    Loan ID
                  </th>
                  <th scope="col" className="wi_th">
                    Lend ID{" "}
                  </th>
                  <th scope="col" className="wi_th">
                    Lender Address
                  </th>
                  <th scope="col" className="wi_th">
                    Collateral Token
                  </th>
                  <th scope="col" className="wi_th">
                    Collateral Amount
                  </th>
                  <th scope="col" className="wi_th">
                    Collateral Price
                  </th>
                  <th scope="col" className="wi_th">
                    Borrow Token
                  </th>
                  <th scope="col" className="wi_th">
                    Borrow Amount{" "}
                  </th>
                  <th scope="col" className="wi_th">
                    Start Time{" "}
                  </th>
                  <th scope="col" className="wi_th">
                    Repayment Time
                  </th>
                  <th scope="col" className="wi_th">
                    Interest Rate
                  </th>
                  <th scope="col" className="wi_th">
                    Repaid Amount
                  </th>
                  <th scope="col" className="wi_th">
                    Remaining Amount
                  </th>
                  <th scope="col" className="wi_th">
                    Total Interest
                  </th>
                  <th scope="col" className="wi_th">
                    Default Loan{" "}
                  </th>
                  <th scope="col" className="wi_th">
                    Close Loan{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {array.map((items, i) => (
                  <tr className="border-bottom  sdsd">
                    <td>{items.LoanID}</td>
                    <td>{items.ReqID}</td>
                    <td>{items.LenderAddress}</td>
                    <td>{items.CollateralToken}</td>
                    <td>{items.CollateralAmount}</td>
                    <td>{items.CollateralPrice}</td>
                    <td>{items.BorrowToken}</td>
                    <td>{items.BorrowAmount}</td>
                    <td>{items.StartTime}</td>
                    <td>{items.RepaymentTime}</td>
                    <td>{items.InterestRate}</td>
                    <td>{items.RepaidAmount}</td>
                    <td>{items.RemainingAmount}</td>
                    <td>{items.TotalInterest}</td>
                    <td>{items.DefaultStatus}</td>
                    <td>{items.CloseStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Borrow;
