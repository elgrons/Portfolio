import { Col } from "react-bootstrap";

export const ProjectFolio = ({ title, description, details, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <p>{details}</p>
        </div>
        <img src={imgUrl} className="proj-img-display" alt="a screenshot of the project" />
      </div>
    </Col>
  )
}