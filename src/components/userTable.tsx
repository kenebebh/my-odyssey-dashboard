import React from "react";
import { USERS } from "../data/user-data";

export default function UserTable() {
  return <div>{JSON.stringify(USERS)}</div>;
}
