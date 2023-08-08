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
        <input id="swal-input2" class="swal2-input" placeholder="Référence">
        <input id="swal-input3" class="swal2-input" placeholder="Description">
        <input id="swal-input4" class="swal2-input" placeholder="Prix">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const values = [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
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
            reference: result.value[1],
            description: result.value[2],
            price: result.value[3],
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
        <table className="consumable-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Référence</th>
              <th>Description</th>
              <th>Prix</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {consumables
              .filter((consumable) =>
                consumable.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((consumable) => (
                <tr key={consumable.id}>
                  <td>{consumable.name}</td>
                  <td>{consumable.reference}</td>
                  <td>{consumable.description}</td>
                  <td>{consumable.price} euros HT</td>
                  <td>
                    <button onClick={() => deleteConsumable(consumable.id)}>
                      <i className="fi fi-rr-trash" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
