import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PtoductItem = ({title, description, img, url=""}) => {

    return (
        <div className="p-2 col-12 col-md-4 col-lg-3">
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={url} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default PtoductItem;