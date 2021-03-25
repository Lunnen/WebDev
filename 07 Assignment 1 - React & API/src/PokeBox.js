import React, { useState } from "react";
import questionMark from "./img/questionMark.png";

const PokeBox = (Pokemon) => {
  const [checked, setchecked] = useState(false);
  const togglechecked = () => setchecked((value) => !value); // "!value" (invert value).

  const clicked = () => {
    togglechecked();
    Pokemon.updChecked(Pokemon.id);
  };

  return (
    <div className="pokeList thumb-container">
      <button
        className="removeButton"
        onClick={() => Pokemon.handleRemove(Pokemon.id)}
      >
        X
      </button>
      <div className="number">
        <small>{Pokemon.id}</small>
      </div>
      <div className="clickBox" onClick={() => clicked()}>
        <img
          src={Pokemon.checked ? Pokemon.image : questionMark}
          alt={Pokemon.name}
        />
        <h3>{Pokemon.name}</h3>
      </div>

      {checked && ( //If 'checked is true, execute the code.
        <div className="detail-wrapper">
          <div>
            <small>
              <strong>Type:</strong> {Pokemon.type}
            </small>
          </div>
          <div>
            <small>
              <strong>XP:</strong> {Pokemon.xp}
            </small>
          </div>
          <div>
            <small>
              <strong>Weight:</strong> {Pokemon.weight}
            </small>
          </div>
          <div>
            <small>
              <strong>Height:</strong> {Pokemon.height}
            </small>
          </div>
          <div>
            <small>
              <strong>Ability:</strong> {Pokemon.ability}
            </small>
          </div>
          <div>
            <small>
              <strong>Stat:</strong> {Pokemon.stat}
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeBox;
