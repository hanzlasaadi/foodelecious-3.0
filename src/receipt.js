function ReceiptBill() {
  return (
    <div id="app" class="app">
      <div class="container1">
        <div class="receipt_header">
          <h1>
            Receipt of Sale <span>Foodelecious</span>
          </h1>
          <h2>
            Address: Lorem Ipsum, 1234-5 <span>Tel: +1 012 345 67 89</span>
          </h2>
        </div>

        <div class="receipt_body">
          <div class="date_time_con">
            <div class="date">11/12/2020</div>
            <div class="time">11:13:06 AM</div>
          </div>

          <div class="itemsq">
            <table>
              <thead>
                <th>QTY</th>
                <th>ITEM</th>
                <th>AMT</th>
              </thead>
              <tbody>
                {/* <tr>
                  <td>1</td>
                  <td>Lorem ipsum</td>
                  <td>2.3</td>
                </tr> */}
                {/* <!-- Add more item rows here --> */}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>11.98</td>
                </tr>
                <tr>
                  <td>Cash</td>
                  <td></td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Change</td>
                  <td></td>
                  <td>38.24</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* <!-- Add the print button here --> */}
        <button onclick="window.print()">Print</button>

        <h3 className="h31">Thank You!</h3>
      </div>
    </div>
  );
}

export default ReceiptBill;
