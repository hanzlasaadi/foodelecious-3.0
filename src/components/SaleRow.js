const options = {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "Europe/London", // Set the time zone to Great Britain
};

function SaleRow({ row, index }) {
  return (
    <tr style={{ textAlign: "center" }}>
      <td className="w-10px align-middle">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="product1" />
          <label className="form-check-label"></label>
        </div>
      </td>
      <td className="align-middle">
        <a href>00{index + 1}</a>
      </td>
      <td className="align-middle">
        {new Date(row.createdDate).toLocaleString("en-GB", options)}
      </td>
      <td className="align-middle" style={{ maxWidth: "200px",   overflow: 'hidden' }}>
        {row.commodityList.map((comm) => `${comm.name},`)}
      </td>
      <td className="align-middle">{row.workerId.name}</td>
      <td className="align-middle">{row.status}</td>
      <td className="align-middle">{row.paymentType}</td>
      <td className="align-middle">
        <span>Eat in</span>
      </td>
      <td className="align-middle">
        <span>£{row.totalPrice}</span>
      </td>
      <td className="align-middle">
        £{Math.round(((row.totalPrice * 20) / 120) * 100) / 100}
      </td>
      <td className="align-middle">£0</td>
      <td className="align-middle">£{row.clientPay}</td>
    </tr>
  );
}

export default SaleRow;
