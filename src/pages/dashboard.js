import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";

export default function Dashboard() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const loader = async () => {
      const result = await axios.get("http://localhost:5000/api/v1/witlist");
      console.log(result.data);
      setUsers(result.data);
    };
    loader();
  }, []);
  return (
    <div className=" max-w-7xl mx-auto">
    <h1 className=" text-center text-5xl text-gray-700 my-5">Wait List</h1>
    <div className=" my-5">
    <Link href={"/"} className=" px-3 py-2 bg-gray-700 text-white rounded-md">Go Home</Link>
    </div>
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Phone</TableColumn>
        <TableColumn>Insta ID</TableColumn>
        <TableColumn>Other Social</TableColumn>
        <TableColumn>Followers</TableColumn>
        <TableColumn>Brand</TableColumn>
      </TableHeader>
      <TableBody>
        {users?.map((user) => 
                <TableRow key={user._id}>
                <TableCell>{user.name.toUpperCase()}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNo}</TableCell>
                <TableCell>{user.instagramId}</TableCell>
                <TableCell>{user.otherSocialMediaId}</TableCell>
                <TableCell>{user.followers}</TableCell>
                <TableCell>{user.brand}</TableCell>
              </TableRow>
              )}
      </TableBody>
    </Table>
    </div>
  );
 
}
