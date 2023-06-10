import { Colors } from 'chart.js';
import React, { useState } from 'react'
import { Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { AiOutlineMenuUnfold } from 'react-icons/Ai';

const MobileSidebarEditor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="yeye">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="border-0 rounded-1" style={{ background: ' none ', color: "#06ABC8" }}
        >
          <AiOutlineMenuUnfold fontSize={'30'} />
        </Button>
        <div style={{ minHeight: '150px' }} className='p-3 py-1'>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
             
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default MobileSidebarEditor
