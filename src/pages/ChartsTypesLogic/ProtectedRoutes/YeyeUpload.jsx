import React from 'react'
import { read, utils } from 'xlsx';
import { useState } from 'react';

const YeyeUpload = () => {
    const [chartDetails, setChartDetails] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
        
        setChartDetails(jsonData);
    };
    
    reader.readAsArrayBuffer(file);
}
// console.log('second excel : ',chartDetails);
  return (
    <div>
      <div>
      <input type="file" onChange={handleFileUpload} />

      {chartDetails && (
        <div>
          <h2>Chart Details</h2>
          <table>
            <thead>
              <tr>
                {chartDetails[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chartDetails.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  )
}

export default YeyeUpload
