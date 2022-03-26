import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100vw;
padding: 50px 0 0 0;
`;

const RestList = ({data}) => {
  return (
    <Wrapper>
      <div className="card mb-3" style={{maxWidth: "60vw",margin:"0 auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.images[0].url} className="img-fluid rounded-start" alt="restaurant" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.restaurant_name}</h5>
              <p className="card-text">
                {data.address_complete}
              </p>
              <p className="card-text">
                <small className="text-muted">Average cost for two: <b>Rs. {data.avg_cost_for_two}</b></small>
              </p>
              <Link to="/resdetail" state={{image: data.images[0].url, name: data.restaurant_name}}><button className="btn btn-dark">View Restaurant</button></Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RestList;
