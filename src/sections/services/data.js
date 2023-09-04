import UF from "../../assets/UF.png";
import NITD from "../../assets/nitdgp.png";

const data = [
  {
    id: 1,
    icon: (
      <img
        src={UF}
        alt="UF Img"
        style={{
          width: 150,
          height: 100,
          objectFit: "fill",
          // borderRadius: 50,
        }}
      />
    ),
    title:
      "Master's in Computer and Information Sciences, University of Florida, Gainesville, USA",
    desc: "Januray 2023 - January 2025",
  },
  {
    id: 2,
    icon: (
      <img
        src={NITD}
        alt="UF Img"
        style={{
          width: 150,
          height: 100,
          objectFit: "contain",
          // borderRadius: 50,
        }}
      />
    ),
    title:
      "Bachelor of Technology in Information Technology, National Institute of Technology, Durgapur, India",
    desc: "July 2016 - July 2020",
  },
];

export default data;
