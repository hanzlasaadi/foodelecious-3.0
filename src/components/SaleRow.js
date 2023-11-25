import React, { useState } from "react";

const options = {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "Europe/London",
};

function SaleRow({ row, index, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    onDelete(index);
  };

  const handleSaveClick = () => {
    // Add logic to save the edited row, if needed
    setIsEditing(false);
  };

  const renderButtons = () => {
    if (isEditing) {
      return (
        <>
          <button className="btn btn-danger text-white" onClick={handleSaveClick}>Save</button>
        </>
      );
    } else {
      return (
        <>
          <button className="btn btn-danger text-white mx-2" onClick={handleEditClick}>Edit</button>
          <button className="btn btn-danger text-white " onClick={handleDeleteClick}>Delete</button>
        </>
      );
    }
  };

  return (
    <tr style={{ textAlign: "center" }}>
      <td className="w-10px align-middle">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={`product${index}`} />
          <label className="form-check-label"></label>
        </div>
      </td>
      <td className="align-middle">
        <a href>00{index + 1}</a>
      </td>
      <td className="align-middle">
        {isEditing ? (
          <input
            type="text"
            value={row.createdDate}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          new Date(row.createdDate).toLocaleString("en-GB", options)
        )}
      </td>
      <td className="align-middle" style={{ maxWidth: "200px", overflow: "hidden" }}>
        {isEditing ? (
          <input
            type="text"
            value={row.commodityList.map((comm) => `${comm.name},`)}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          row.commodityList.map((comm) => `${comm.name},`)
        )}
      </td>
      <td className="align-middle">
        {isEditing ? (
          <input
            type="text"
            value={row.workerId.name}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          row.workerId.name
        )}
      </td>
      <td className="align-middle">
        {isEditing ? (
          <input
            type="text"
            value={row.status}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          row.status
        )}
      </td>
      <td className="align-middle">
        {isEditing ? (
          <input
            type="text"
            value={row.paymentType}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          row.paymentType
        )}
      </td>
      <td className="align-middle">
        <span>Eat in</span>
      </td>
      <td className="align-middle">
        <span>£{row.totalPrice}</span>
      </td>
      <td className="align-middle">
        £{Math.round(((row.totalPrice * 20) / 120) * 100) / 100}?
      </td>
      <td className="align-middle">£0</td>
      <td className="align-middle">
        {isEditing ? (
          <input
            type="text"
            value={row.clientPay}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          `£${row.clientPay}`
        )}
      </td>
      <td className="align-middle">{renderButtons()}</td>
    </tr>
  );
}

export default SaleRow;
