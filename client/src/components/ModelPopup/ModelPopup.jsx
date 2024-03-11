import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik';
import { axiosPost } from "../../axiosServices";

const ModelPopup = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false);

  const createEmployee = async (values) => {
    setLoading(true);
    try {
      const res = await axiosPost('/employee', values);
      console.log(res);
      setLoading(false);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      gender: '',
      email: '',
      phone: '',
      designation: '', // New field for designation
      courses: []      // New field for courses
    },
    onSubmit: values => {
      createEmployee(values);
    },
  });

  return (
    <div className="modalContainer">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div className="modalHeader">
            <h2>New Employee Details</h2>
          </div>
          <div className="modalInner">
            <div className="input-box">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
            </div>
            <div className="input-box">
              <label htmlFor="gender">Gender</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="transgender"
                  name="gender"
                  value="transgender"
                  onChange={formik.handleChange}
                />
                <label htmlFor="transgender">Transgender</label>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                required
                onChange={formik.handleChange}
                value={formik.values.image}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="input-box">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className="input-box">
              <label htmlFor="designation">Designation</label>
              <select
                name="designation"
                id="designation"
                onChange={formik.handleChange}
                value={formik.values.designation}
              >
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="courses">Courses</label>
              <div>
                <input
                  type="checkbox"
                  id="bsc"
                  name="courses"
                  value="BSc"
                  onChange={formik.handleChange}
                />
                <label htmlFor="bsc">BSc</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="bca"
                  name="courses"
                  value="BCA"
                  onChange={formik.handleChange}
                />
                <label htmlFor="bca">BCA</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="msc"
                  name="courses"
                  value="MSc"
                  onChange={formik.handleChange}
                />
                <label htmlFor="msc">MSc</label>
              </div>
            </div>
          </div>
          <div className="modalFooter">
            <button className="add-btn" type="submit">
              {loading ? 'Saving...' : 'Save Details'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
