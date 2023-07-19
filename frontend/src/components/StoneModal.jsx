import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/StoneModal.scss";

function StoneModal() {
  const [stones, setStones] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/`)
      .then((res) => {
        setStones(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="stone-modal-container">
      <div className="stone-modal-search">
        <input
          type="search"
          placeholder="Rechercher une pierre..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className="stone-modal-list">
        {stones
          .filter((stone) =>
            stone.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((stone) => (
            <div className="stone-card" key={stone.id}>
              <div className="stone-info">
                <img
                  className="stone-image"
                  src={stone.image_url}
                  alt={stone.name}
                />
                <h2 className="stone-name">{stone.name}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default StoneModal;
