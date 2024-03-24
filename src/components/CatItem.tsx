import React, { useState } from "react";
import { useMutation } from "react-query";
import { deleteCat, updateCat } from "../services/catService";
import { useCatStore, Cat } from "../store/useCatStore";

interface CatItemProps {
  cat: Cat;
}

const CatItem: React.FC<CatItemProps> = ({ cat }) => {
  const [isEditView, setIsEditView] = useState(false);
  const [firstName, setFirstName] = useState(cat.firstName);
  const [lastName, setLastName] = useState(cat.lastName);
  const [email, setEmail] = useState(cat.email);
  const [phone, setPhone] = useState(cat.phone);
  const [position, setPosition] = useState(cat.position);

  const handleDelete = () => {
    deleteUserMutation.mutate();
  };

  const deleteUserMutation = useMutation(() => deleteCat(cat.id), {
    onSuccess: () => {
      useCatStore.getState().deleteCat(cat.id);
    },
  });

  const updateMutation = useMutation(
    ({ id, update }: { id: string; update: Partial<Omit<Cat, "id">> }) =>
      updateCat(id, update),
    {
      onSuccess: () => {
        useCatStore.getState().updateCat(cat.id, {
          firstName,
          lastName,
          email,
          phone,
          position,
        });
        setIsEditView(false);
      },
    }
  );

  const handleSubmit = () => {
    updateMutation.mutate({
      id: cat.id,
      update: {
        firstName,
        lastName,
        email,
        phone,
        position,
      },
    });
  };

  return (
    <>
      {isEditView ? (
        <>
          <tr>
            <td>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label>First name</label>
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label>Last name</label>
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email address</label>
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <label>Phone</label>
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
                <label>Position</label>
              </div>
            </td>
            <td>
              <button onClick={handleSubmit} className="btn btn-success btn-sm">
                Save
              </button>

              <button
                onClick={() => setIsEditView(!isEditView)}
                className="btn btn-danger btn-sm"
              >
                Back
              </button>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <td>{cat.firstName}</td>
            <td>{cat.lastName}</td>
            <td>{cat.email}</td>
            <td>{cat.phone}</td>
            <td>{cat.position}</td>
            <td>
              <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Delete
              </button>
              <button
                onClick={() => setIsEditView(!isEditView)}
                className="btn btn-warning btn-sm"
              >
                Update
              </button>
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default CatItem;
