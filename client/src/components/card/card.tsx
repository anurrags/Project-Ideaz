import { CardProps } from "../../utils";
import "./card.css";

const Card = ({
  Title,
  Description,
  Features,
  UseCases,
  Examples,
  Monetisation_Strategy,
  Technologies,
}: CardProps) => {
  return (
    <div className="card">
      <h2>{Title}</h2>
      <p>{Description}</p>
      <div>
        <h3>Features:</h3>
        <ul>
          {Features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Use Cases:</h3>
        <ul>
          {UseCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>
      {Examples.length > 0 && (
        <div>
          <h3>Similar Projects:</h3>
          <ul>
            {Examples.map((projects, index) => (
              <li key={index}>{projects}</li>
            ))}
          </ul>
        </div>
      )}
      {Monetisation_Strategy.length > 0 && (
        <div>
          <h3>Monetisation Strategy:</h3>
          <ul>
            {Monetisation_Strategy.map((strategy, index) => (
              <li key={index}>{strategy}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Technologies:</h3>
        <ul>
          {Technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
