import { useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "../Logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 50vw;
  cursor: pointer;
`;
const Overlay = styled.img`
  width: 10%;
  height: 10%;
  object-fit: contain;
`;

const RestDetail = (props) => {
  const location = useLocation();
  const { image, name } = location.state;

  //   const ShareHandle = () => {
  //       let imageURL= image;
  //       console.log(imageURL);
  //       imageURL.select();
  //   };

  return (
    <Container>
      <Wrapper>
        <div className="card bg-dark text-white">
          <img src={image} className="card-img" alt="resimage" />
          <div className="card-img-overlay" style={{ display: "flex" }}>
            <Overlay src={logo} className="card-img" alt="logo" />
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
        {/* <button
          className="btn btn-dark"
          onClick={ShareHandle}
        >
          SHARE
        </button> */}
      </Wrapper>
    </Container>
  );
};

export default RestDetail;
