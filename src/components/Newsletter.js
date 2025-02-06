import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12} xl={12}>
              <h3>"I hope you enjoyed exploring my portfolio. I look forward to connecting with you soon!"</h3>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
