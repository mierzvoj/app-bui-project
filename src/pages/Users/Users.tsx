import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserData } from "../../model/user-data.model";
import { setLocalStorageItem } from "../../tools/local-storage";

const entryData: UserData[] = [
  {
    name: "name1",
    surname: "surname1",
    city: "Gdańsk",
    role: "passenger",
    active: true,
    email: "name1@test",
    password: "test",
    passengers: ["Al", "Mary"],
  },
  {
    name: "name2",
    surname: "surname2",
    city: "Gdańsk",
    role: "driver",
    active: true,
    email: "name2@test",
    password: "test",
    passengers: ["Bill", "Jack"],
  },
  {
    name: "name3",
    surname: "surname3",
    city: "Gdańsk",
    role: "driver",
    active: true,
    email: "name3@test",
    password: "test",
    passengers: ["John", "Mary", "Al"],
  },
];

export interface IUsersContext {
  users: UserData[];
  setUsers: Dispatch<SetStateAction<UserData[]>>;
}

export const UsersContext = React.createContext<IUsersContext>({
  users: entryData,
  setUsers: () => {},
});

const Users = () => {
  const [users, setUsers] = useState<UserData[]>(entryData);
  const value = { users, setUsers };

  useEffect(() => setLocalStorageItem("users", users), [users]);

  return (
    <UsersContext.Provider value={value}>
      <Outlet />
    </UsersContext.Provider>
  );
};

export default Users;
