import React from "react";

function Lunch({ filterLunch }) {
  return (
    <div>
      <div className='text-center mb-5'>
        <h2 className='link_heading text-uppercase fs-1 fw-bold shake'>
          Lunch
        </h2>
        <h3 className='heading_sub text-muted fs-6 fst-italic mt-3 fw-bold'>
          Enjoy Your Meal!
        </h3>
      </div>
      <div className='main'>
        {filterLunch.map((data, index) => (
          <div key={index} className='menu'>
            <div className='bg-success rounded-5'>
              <div className='image p-2'>
                <img className='img-fluid' src={data.url} alt='' />
              </div>
              <div>
                <p className='fw-bolder style'>{data.name}</p>
                <p className='blink'>
                  <sup>$</sup>
                  {data.price}
                </p>
              </div>
              <div className='title fst-italic pb-2 style'>{data.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lunch;
