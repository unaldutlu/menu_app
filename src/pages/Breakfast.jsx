import React from "react";
import data from "../data/data";
import { Container, Col, Row } from "react-bootstrap";

function Breakfast() {
  return (
    <section>
      <Container>
        <div className='text-center mb-5'>
          <h2 className='link_heading text-uppercase fs-1 fw-bold'>
            Breakfast
          </h2>
          <h3 className='heading_sub text-muted fs-6 fst-italic mt-3 fw-bold'>
            Enjoy Your Meal!
          </h3>
        </div>
        {data.map((data, index) => (
          <Row key={index} className="bg-dark">
            <Col lg={6} className='bg-light p-5'>
              <div>
                <img className="img-fluid" src={data.url} alt=''/>
              </div>
              <div>
                <p className="fw-bolder">{data.name}</p>
                <p><sup>$</sup>{data.price}</p>
              </div>
              <div className='title fst-italic'>{data.title}</div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Breakfast;
