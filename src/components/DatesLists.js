import React from 'react'
import { Col, Row } from 'react-bootstrap'
const DatesLists = ({persons}) => {
  return (
<Row className="justify-content-center">
          <Col sm="8" className="">
              <div className="rectangle p-2">
                {
                  persons.length ? (persons.map((item)=>{
                    return (
                      <div key={item.id} className="d-flex border-bottom mx-3">
                      <img className="img-avatar" alt="avatar" src="1.jpg"/>
                      <div className="px-3">
                        <p className="d-inline fs-5">{item.name}</p>
                        <p className="fs-6">{item.date}</p>
                      </div>
                    </div>
                    )
                  })) : <h2 className="p-5 text-center">There are no appointments today</h2>
                }
              </div>
          </Col>
        </Row>
  )
}

export default DatesLists