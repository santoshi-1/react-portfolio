import data from "./data";
import "./services.css";
import Card from "./../../components/Card";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Education</h2>
      <div className="container service__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__sub_container">
              <div className="service__icon">{item.icon}</div>
              <div style={{ marginTop: "1rem" }}>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
