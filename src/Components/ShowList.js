import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
const ShowList = () => {
  const [index, setIndex] = useState("");
  const { allUserList } = useSelector((state) => state.leave);

  const onIndexHandler = (index) => {
    setIndex(index);
  };

  return (
    <div className="row mt-4">
      <div className="col ">
        <table className="table  table-striped table-hover">
          <thead className="bg-teal text-white text-center ">
            <tr>
              <th className="font-weight-bold">Sr.No</th>
              <th className="font-weight-bold">Fist Name</th>
              <th className="font-weight-bold">Last Name</th>
              <th className="font-weight-bold">Email</th>
              <th className="font-weight-bold">Mobile Number</th>
              <th className="font-weight-bold">DOB</th>
              <th className="font-weight-bold">Leave Reason</th>
              <th className="font-weight-bold">Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {allUserList.length !== 0 &&
              allUserList.map((leave, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{leave.FirstName}</td>
                  <td>{leave.LastName}</td>
                  <td>{leave.Email}</td>
                  <td>{leave.MobileNumber}</td>
                  <td>{leave.DOB}</td>
                  <td>{leave.Reason}</td>
                  <td>
                    <button
                      className="btn btn-danger text-white btn-sm bg-danger button-outline "
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => onIndexHandler(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Modal index={index} />
        {allUserList.length === 0 && (
          <h3 className="text-center text-danger ">No Leaves Yet!</h3>
        )}
      </div>
    </div>
  );
};

export default ShowList;
