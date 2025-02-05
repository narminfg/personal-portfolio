import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pronia.png";
import projImg2 from "../assets/img/rezervation.png";
import projImg3 from "../assets/img/todolist.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I’ve worked on, demonstrating my skills in frontend development, problem-solving, and creating user-centered web applications</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Pronia:<br/>"I use HTML, CSS, Bootstrap, and JavaScript for the frontend, .NET Core for the backend, and MSSQL for the database in the Pronia website."</p>
                      <p>Rezervation: <br/> "I built this project using React and Redux Toolkit. For forms, I used React Hook Form, and for the UI, I utilized Material-UI."</p>
                      <p>TodoList: <br/>"I built this project using React and Redux Toolkit."</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>"Pronia" github: https://github.com/narminfg/Pronia_FinalProject_Back</p>
                      <p>"Rezervation" github : https://github.com/narminfg/rezervation</p>
                      <p>"TodoList" github : https://github.com/narminfg/ToDoList-with-react_redux</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
