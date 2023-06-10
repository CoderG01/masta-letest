import React from 'react'
import Form from "react-bootstrap/Form";

const SearchBar = ({ pname }) => {
    return (
        <>
            <Form className="d-flex position-relative">
                <Form.Control
                    type="search"
                    placeholder={pname}
                    className="me-2 searchInput bg-none"
                    aria-label="Search"
                />
            </Form>
        </>
    )
}

export default SearchBar
