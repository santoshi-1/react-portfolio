import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h2>Experience</h2>
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <h6>{item.subHeading}</h6>
              {/* <small>{item.desc}</small> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
