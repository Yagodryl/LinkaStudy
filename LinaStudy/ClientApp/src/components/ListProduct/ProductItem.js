import React, { Component } from 'react';

const PtoductItem = (props) => {

    return (
        <div className="p-2 col-12 col-md-4 col-lg-3">
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default PtoductItem;