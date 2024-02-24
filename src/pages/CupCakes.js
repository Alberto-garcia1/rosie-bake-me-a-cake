import React from "react";
import CupCakeItem from "../components/CupCakeItem"; // Importing the ProjectItem component
import { CupCakeList } from "../helpers/CupCakeList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Table } from "react-bootstrap";


function CupCakes() {
  return (
    <div className="cakes">
      <h1>Cupcakes</h1>
      <div className="cakeList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CupCakeList.map((cake, idx) => {
          return (
            <CupCakeItem
              key={idx}
              id={idx}
              name={cake.name}
              image={cake.image}
            />
          );
        })}
      </div>
      <div>
        <p className="description" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultrices luctus odio, eu lobortis dui dictum non. Mauris et dui
          dapibus, malesuada erat eu, faucibus tortor. Mauris consectetur
          accumsan bibendum. Curabitur posuere odio nec turpis feugiat, vitae
          ornare nunc faucibus. Praesent ac leo neque. In efficitur feugiat
          venenatis. Nulla sed elit rutrum, viverra urna vitae, consequat odio.
          Cras aliquam posuere faucibus. Suspendisse sit amet sem tincidunt,
          varius sapien sit amet, malesuada leo. Proin eget velit pretium magna
          pulvinar varius. Praesent porttitor mi at sapien blandit, quis sodales
          augue vestibulum. Etiam vel turpis quis mi hendrerit iaculis. Aenean
          lacinia est nisi, luctus molestie augue semper quis. Praesent
          facilisis scelerisque nisi.
        </p>
      </div>
      <div className="info-table">
        <Table bordered hover responsive size="" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CupCakes;
