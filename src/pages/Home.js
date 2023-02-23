import chartsHome from "../images/chartsHome.png";
import talks from "../images/talks.png";

import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="aboutHomePage">
        <img src={chartsHome} alt="home image" className="homeImg" />
        <h1 className="homePageTitle">Welcome to charts community</h1>
      </div>
      <div className="descriptionHome">
        <h2 className="descriptionTitle">Explore Charts with React</h2>
        <p className="descriptionText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nisi
          tenetur iusto, officia quos voluptatum, necessitatibus non, suscipit
          voluptatibus labore reprehenderit ipsa harum placeat at sequi sint
          nobis qui similique. Inventore, cumque sed! Voluptatibus labore,
          maxime quisquam reprehenderit repudiandae placeat voluptates tempore
          nihil rem earum quam sunt vel nemo dolor inventore perferendis fugit
          tenetur esse a, pariatur dignissimos corporis quos? Non iure cum
          consequatur rerum, ex molestiae officiis aperiam debitis magni
          excepturi obcaecati. Corporis corrupti repellendus libero voluptatum,
          maiores est doloribus dolores debitis expedita nesciunt iusto quis
          cupiditate molestiae esse? Odit omnis a mollitia dolorum, animi
          quibusdam? Provident id quisquam tempore corrupti sit sapiente libero
          rem deleniti sint ullam quas fuga voluptatum error fugit
          necessitatibus porro molestiae nisi, quod ratione! Adipisci temporibus
          vitae maxime repudiandae, a fugit sint? Fugit quidem recusandae
          laboriosam, vero blanditiis doloremque tempora nisi quasi porro?
          Doloribus doloremque laboriosam distinctio a beatae aperiam est quasi
          laborum eaque. Velit aperiam nulla natus repellendus maiores aliquid
          doloribus sunt facere voluptatum officiis, possimus necessitatibus
          fugit maxime error excepturi architecto quisquam quaerat distinctio
          dolorum ipsam quos. Sequi est nemo accusamus porro. Quo, similique
          sed? Vero sit ipsum eos ullam perspiciatis accusamus corporis quisquam
          eligendi harum rem. Doloremque corporis fugiat, tenetur aliquid,
          mollitia recusandae ut ea cum dolorem numquam neque sed molestiae!
          Culpa saepe sed officiis, reprehenderit placeat maxime ullam quae
          assumenda est, voluptas qui unde.
        </p>
      </div>
      <div className="extraContent">
        <div className="content">
          <img src={talks} alt="talks" className="talksImg" />
        </div>
        <div className="content">
          <div className="contentInne">
            <h2 className="contentTitle">Chat about Charts with us!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              nisi tenetur iusto, officia quos voluptatum, necessitatibus non,
              suscipit voluptatibus labore reprehenderit ipsa harum placeat at
              sequi sint nobis qui similique. Inventore, cumque sed!
              Voluptatibus labore, maxime quisquam reprehenderit repudiandae
              placeat voluptates tempore nihil rem earum quam sunt vel nemo
              dolor inventore perferendis fugit tenetur esse a, pariatur
              dignissimos corporis quos? Non iure cum consequatur rerum, ex
              molestiae officiis aperiam debitis magni excepturi obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
