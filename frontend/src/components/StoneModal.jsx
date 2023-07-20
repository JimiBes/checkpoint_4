import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/StoneModal.scss";

function StoneModal() {
  const [stones, setStones] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stones`)
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

  const addStone = () => {
    Swal.fire({
      title: "Ajouter une nouvelle pierre",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nom">
        <input id="swal-input2" class="swal2-input" placeholder="Description">
        <input id="swal-input3" class="swal2-input" placeholder="Couleur">
        <input id="swal-input4" class="swal2-input" placeholder="Origine">
        <input id="swal-input5" class="swal2-input" placeholder="Dureté">
        <input id="swal-input6" class="swal2-input" placeholder="URL de l'image">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
          document.getElementById("swal-input5").value,
          document.getElementById("swal-input6").value,
        ];
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/stones`, {
            name: result.value[0],
            description: result.value[1],
            color: result.value[2],
            origin: result.value[3],
            hardness: result.value[4],
            image_url: result.value[5],
          })
          .then(() => {
            axios
              .get(`${import.meta.env.VITE_BACKEND_URL}/`)
              .then((res) => {
                setStones(res.data);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((error) => {
            console.error("Erreur lors de l'ajout de la pierre", error);
          });
      }
    });
  };
  const deleteStone = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer cette pierre ?",
      text: "Vous ne pourrez pas annuler cette opération !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !",
      cancelButtonText: "Non, annulez !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/stones/${id}`)
          .then(() => {
            setStones(stones.filter((stone) => stone.id !== id));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  const displayStone = (stone) => {
    Swal.fire({
      title: stone.name,
      html: `
        <p>Description: ${stone.description}</p>
        <p>Couleur: ${stone.color}</p>
        <p>Origine: ${stone.origin}</p>
        <p>Composition: ${stone.composition}</p>
        <p>Dureté: ${stone.hardness} Mohs</p>
        <img src="${stone.image_url}" alt="${stone.name}" style="width: 40vw; height: 40vh;">
      `,
    });
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
            <div
              className="stone-card"
              key={stone.id}
              onClick={() => displayStone(stone)}
            >
              <button
                className="button-delete-stone"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteStone(stone.id);
                }}
              >
                <i className="fi fi-rr-cross-circle" />
              </button>
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
      <button className="button-add-stone" type="button" onClick={addStone}>
        Ajouter une pierre
      </button>
    </div>
  );
}

export default StoneModal;
