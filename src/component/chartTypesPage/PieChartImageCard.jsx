import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PieChartImageCard = ({ imgPath, handleClick }) => {
  const style = {
    edit: {
      top: "23px",
      right: "18px",
      cursor: "pointer",
    },
  };
  return (
    <React.Fragment>
      <div className="piechartCard px-4 py-4 py-md-5 d-flex align-items-center justify-content-center" onClick={handleClick}>
        <img src={`/${imgPath}`} alt="pie chart images" />
      </div>
    </React.Fragment>
  )
}

export default PieChartImageCard
