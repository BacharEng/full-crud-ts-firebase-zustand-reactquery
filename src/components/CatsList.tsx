import React from "react";
import { useCatStore } from "../store/useCatStore";
import CatItem from "./CatItem";

const CatsList: React.FC = () => {
  const cats = useCatStore((state) => state.cats);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Position</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {cats.map((cat) => (
          <CatItem key={cat.id} cat={cat} />
        ))}
      </tbody>
    </table>
  );
};

export default CatsList;
