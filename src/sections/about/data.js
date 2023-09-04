import OYO from "../../assets/OYO.png";
import iitHyd from '../../assets/iiitHyd.jpeg'

const data = [
  { id: 1, icon: (
    <img
      src={OYO}
      alt="UF Img"
      style={{
        width: 100,
        height: 100,
        objectFit: "contain",
        // borderRadius: 25,
      }}
    />
  ), title: "Software Development Engineer", subHeading: "August 2020 - December 2022",  desc: "3+ Years Working" },
  { id: 1, icon: (
    <img
      src={iitHyd}
      alt="UF Img"
      style={{
        width: 100,
        height: 100,
        objectFit: "contain",
        // borderRadius: 50,
      }}
    />
  ), title: "Internship",  subHeading: "April 2019 - May 2019", desc: "3+ Years Working" },
];

export default data;
