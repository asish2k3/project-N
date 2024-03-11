import React, { useState } from 'react';
import { useFormik } from 'formik';
import "./ModelPopup.css";
import { axiosPut } from "../../axiosServices";

const EditDetailsModal = ({ empById, setEditModal }) => {
    const { _id, firstname, email, phone, image } = empById;
    const [loading, setLoading] = useState(false);

    const handleEdit = async (values) => {
        setLoading(true);
        try {
            const res = await axiosPut(`/employee/${_id}`, values);
            setLoading(false);
            setEditModal(false);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstname,
            gender: '', // Initialize gender as empty string
            email,
            phone,
            image,
            designation: '', // New field for designation
            courses: []      // New field for courses
        },
        onSubmit: values => {
            handleEdit(values);
        }
    });

    return (
        <div className="modalContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox">
                    <div className="modalHeader">
                        <h2>Edit Employee Details</h2>
                    </div>
                    <div className="modalInner">
                        <div className="input-box">
                            <label htmlFor="firstname">First Name</label>
                            <input 
                                type="text" 
                                name="firstname"
                                required
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
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
                                    checked={formik.values.gender === 'male'}
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
                                    checked={formik.values.gender === 'female'}
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
                                    checked={formik.values.gender === 'transgender'}
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
                                required
                                value={formik.values.image}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone"
                                    required
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                            </div>
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
                                    checked={formik.values.courses.includes('BSc')}
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
                                    checked={formik.values.courses.includes('BCA')}
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
                                    checked={formik.values.courses.includes('MSc')}
                                />
                                <label htmlFor="msc">MSc</label>
                            </div>
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditDetailsModal;
