import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/ConsumableModal.scss";

function ConsumableModal() {
  const [consumables, setConsumables] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/consumables`)
      .then((res) => {
        setConsumables(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const addConsumable = () => {
    Swal.fire({
      title: "Ajouter un nouveau produit",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nom">
        <input id="swal-input2" class="swal2-input" placeholder="Description">
        <input id="swal-input3" class="swal2-input" placeholder="Couleur">
        <input id="swal-input4" class="swal2-input" placeholder="Origine">
        <input id="swal-input5" class="swal2-input" placeholder="Dureté">
        <input id="swal-input6" class="swal2-input" placeholder="Composition">
        <input id="swal-input7" class="swal2-input" placeholder="URL de l'image">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const values = [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
          document.getElementById("swal-input5").value,
          document.getElementById("swal-input6").value,
          document.getElementById("swal-input7").value,
        ];
        const allFieldsFilled = values.every((value) => Boolean(value));
        if (!allFieldsFilled) {
          Swal.showValidationMessage("Veuillez remplir tous les champs");
        }
        return values;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/consumables`, {
            name: result.value[0],
            description: result.value[1],
            color: result.value[2],
            origin: result.value[3],
            hardness: result.value[4],
            composition: result.value[5],
            image_url: result.value[6],
          })
          .then(() => {
            axios
              .get(`${import.meta.env.VITE_BACKEND_URL}/consumables`)
              .then((res) => {
                setConsumables(res.data);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((error) => {
            console.error("Erreur lors de l'ajout du consommable", error);
          });
      }
    });
  };

  const deleteConsumable = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer ce consommable ?",
      text: "Vous ne pourrez pas annuler cette opération !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le !",
      cancelButtonText: "Non, annulez !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/consumables/${id}`)
          .then(() => {
            setConsumables(
              consumables.filter((consumable) => consumable.id !== id)
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  const displayConsumable = (consumable) => {
    Swal.fire({
      title: consumable.name,
      html: `
        <p>Description: ${consumable.description}</p>
        <p>Couleur: ${consumable.color}</p>
        <p>Origine: ${consumable.origin}</p>
        <p>Composition: ${consumable.composition}</p>
        <p>Dureté: ${consumable.hardness} Mohs</p>
        <img src="${consumable.image_url}" alt="${consumable.name}" style="width: 40vw; height: 40vh;">
      `,
    });
  };

  return (
    <div className="consumable-modal-container">
      <div className="consumable-modal-search">
        <input
          type="search"
          placeholder="Rechercher un produit..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className="consumable-modal-list">
        {consumables
          .filter((consumable) =>
            consumable.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((consumable) => (
            <div
              className="consumable-card"
              key={consumable.id}
              onClick={() => displayConsumable(consumable)}
            >
              <button
                className="button-delete-consumable"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteConsumable(consumable.id);
                }}
              >
                <i className="fi fi-rr-cross-circle" />
              </button>
              <div className="consumable-info">
                <img
                  className="consumable-image"
                  src={consumable.image_url}
                  alt={consumable.name}
                />
                <h2 className="consumable-name">{consumable.name}</h2>
              </div>
            </div>
          ))}
      </div>
      <button
        className="button-add-consumable"
        type="button"
        onClick={addConsumable}
      >
        Ajouter un produit
      </button>
    </div>
  );
}

export default ConsumableModal;
