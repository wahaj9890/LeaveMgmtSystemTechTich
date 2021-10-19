import React, { useState } from "react";
import { addNewLeave } from "../Redux/leaveSlice";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const AddLeave = () => {
  const history = useHistory();
  const [emailIsUnique, setEmailIsUnique] = useState(false);
  const [phoneIsUnique, setPhoneIsUnique] = useState(false);
  const { allUserList } = useSelector((state) => state.leave);

  const dispatch = useDispatch();
  const [request, setRequest] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    DOB: "",
    Reason: "",
  });

  const onChangeHandler = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const applyRequestHandler = (e) => {
    e.preventDefault();

    const isEmailExist = allUserList.filter(
      (item) => item.Email === request.Email
    ).length;
    const isPhoneExist = allUserList.filter(
      (item) => item.MobileNumber === request.MobileNumber
    ).length;
    if (isEmailExist > 0) {
      setEmailIsUnique(true);
    } else {
      setEmailIsUnique(false);
    }
    if (isPhoneExist > 0) {
      setPhoneIsUnique(true);
    } else {
      setPhoneIsUnique(false);
    }
    if (isEmailExist === 0 && isPhoneExist === 0) {
      dispatch(addNewLeave(request));
      history.push("/");
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-info text-white">
            <h3>Add New Leave</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={applyRequestHandler}>
              <div className="form-group">
                <input
                  type="text"
                  name="FirstName"
                  value={request.FirstName}
                  onChange={onChangeHandler}
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="LastName"
                  value={request.LastName}
                  onChange={onChangeHandler}
                  className="form-control"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Email"
                  value={request.Email}
                  onChange={onChangeHandler}
                  className="form-control"
                  placeholder="Email"
                ></input>
                {emailIsUnique && (
                  <p className="text-danger">Email is already exist</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="MobileNumber"
                  value={request.MobileNumber}
                  onChange={onChangeHandler}
                  className="form-control"
                  placeholder="Mobile Number"
                ></input>
                {phoneIsUnique && (
                  <p className="text-danger">Phone is already exist</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="DOB"
                  value={request.DOB}
                  onChange={onChangeHandler}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  value={request.Reason}
                  name="Reason"
                  onChange={onChangeHandler}
                  className="form-control"
                  placeholder="Leave Reason"
                ></textarea>
              </div>
              <div className="form-group">
                {
                  <input
                    type="submit"
                    value="Apply"
                    disabled={!request.Email}
                    className="btn btn-success"
                  ></input>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default AddLeave;
