import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
   <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Модна хатка</h1>
      <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h2 className="card-title pricing-card-title">Для мужчин</h2>
            <img style={{objectFit: "cover"}} src="https://i.pinimg.com/originals/cb/a6/37/cba6376e425d961bccf7ea1aab464cfb.jpg" width="100%" height="150px"/>
            {/* <button type="button" className="btn btn-lg btn-block btn-primary mt-1">Прейти к списку</button> */}
            <Link to="/man-clothes" className="btn btn-lg btn-block btn-primary mt-1">Прейти к списку</Link>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h2 className="card-title pricing-card-title">Для женщин</h2>
            <img src="https://image.freepik.com/free-photo/_143465-14.jpg" width="100%" height="150px" />
            <button style={{objectFit: "cover"}} type="button" className="mt-1 btn btn-lg btn-block btn-primary">Прейти к списку</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h2 className="card-title pricing-card-title">Для детей</h2>
            <img src="https://www.klaschoolsdoral.com/wp-content/uploads/2018/08/getting-your-child-ready-for-back-to-school-865x577.jpeg" width="100%" height="150px" />
            <button style={{objectFit: "cover"}} type="button" className="mt-1 btn btn-lg btn-block btn-primary">Прейти к списку</button>
          </div>
        </div>
      </div>
  </div>
);

export default connect()(Home);
