import React from "react";
import { useDispatch } from "react-redux";
import { deleteLeave } from "../Redux/leaveSlice";

const Modal = (props) => {
  const dispatch = useDispatch();
  const deleteRecord = (index) => {
    dispatch(deleteLeave(index));
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Delete
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h3>Are you sure?</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-sm"
                data-dismiss="modal"
              >
                No
              </button>

              <button
                type="button"
                className="btn btn-success btn-sm"
                data-dismiss="modal"
                onClick={() => deleteRecord(props.index)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
