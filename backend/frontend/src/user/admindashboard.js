import React from "react";
import Base from "../core/base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const { user: { name , role , email}} = isAuthenticated();

    const adminLeftSide = () => {

        return(
            <div className="card">
            <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/product" className="nav-link bg-white text-success"> Create Books </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/manage" className="nav-link bg-white text-success" > Manage Books </Link>
                </li>

            </ul>
        </div>
        )

    }
    const adminRightSide = () => {
        return(
            <div className="card mb-4">
                <h4 className="card-header"> Admin information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge bg-success mr-2">Name:</span>{name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge bg-success mr-2">Email:</span>{email}
                    </li>
                </ul>
            </div>
        )
    }
    return(
        <Base className="container bg-success p-4">
        <div className="row">
            <div className="col-3">
            {adminLeftSide()}
            </div>
            <div className="col-9">
            {adminRightSide()}
            </div>
        </div>


        </Base>
    )
}

export default AdminDashboard;