import type { user } from "./type"
import {Button} from "@/components/ui/button"
import {OverrideButton} from "../ui/button-override/button";
import {Input} from "@/components/ui/input"
import React, { useState } from "react";
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {Userbox, UserboxLeft, UserboxRight} from "@/components/ui/user-box/userbox"
import {Label} from "@/components/ui/label"
import { METHODS } from "http";
import OverrideErrorManager from "../../lib/core/error-manager" 
import OverrideLogsManager from "../../lib/core/log-manager"

export default function HomePage() {

  const [users, setUsers] = useState<user[]>([]);
  const [userAddName, setUserAddName] = useState<string>("");
  const [userModifyName, setUserModifyName] = useState<string>("");
  const [userModifyID, setUserModifyID] = useState<string>("");
  const [userDeleteID, setUserDeleteID] = useState<string>("");
  const [oneUserID, setOneUserID] = useState<string>("");
  const [oneUser, setOneUser] = useState<user>();
  const [errorData, setErrorData] = useState<{msg: string, code: number} | null>({
      msg: "Test de mon log manager",
      code: 415 // I'm a teapot
  }); 


  type errorProps = {
      msg: string
  }

  const logsManager = new OverrideLogsManager();


  const getAllUser = async () => {

    try {
      const res = await fetch("/api/user")
      const data = await res.json();
      setUsers(data);
      console.log(data)
      logsManager.logManager({message: "TestMessage", isTrue: true},"Test",1)
    }
    catch(e) {
      
      //var err = new errorManager<errorProps>(e)  ##Ancienne méthode

      // setErrorData({ msg: "Message personnalisé", code: 500 });

    }

  }

  const addUser = async(userName: string) => {

    try {
      const res = await fetch("/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName }),
      });

      if (res.ok) {
        const data = await res.text();
        console.log("Utilisateur ajouté :", data);
        alert("Utilisateur ajouté")
      } 
      else {
        console.error("Erreur lors de l'ajout");
      }
    }
  catch(e) {
      
      //var err = new errorManager<errorProps>(e)  ##Ancienne méthode
      
      // setErrorData({ msg: "Message personnalisé", code: 500 });

    }
  };

  const modifyUser = async(userID: string, userName: string) => {

    try {
      const res = await fetch("/api/user/", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({name: userName, id: userID}),
    })

    if (res.ok) {
      alert("Utilisateurt modifié")
    }
    else {
      console.error("Erreur lors de la modification");
    }
  }
  catch(e) {
      
      //var err = new errorManager<errorProps>(e)  ##Ancienne méthode
      
      // setErrorData({ msg: "Message personnalisé", code: 500 });

    }
  };
    

  const deleteUser = async(userID: string) => {
    try {
      const res = await fetch("api/user/", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({id: userID}),
    })

    if (res.ok) {
      alert("Utilisateur supprimé")
    }
    else {
      alert("Erreur lors de la suppression")
    }
  }
  catch(e) {
      
      //var err = new errorManager<errorProps>(e)  ##Ancienne méthode
      
      // setErrorData({ msg: "Message personnalisé", code: 500 });

    }
    

      
  }


  const getUser = async(userID : string) => {

    try{
      const res = await fetch(`api/user/${userID}`)
      const data = await res.json();
      setOneUser(data)
    }
    catch(e) {
      
      //var err = new errorManager<errorProps>(e)  ##Ancienne méthode
      
      // setErrorData({ msg: "Message personnalisé", code: 500 });

    }
    
  }

  const trucbidule = 1;

  // if (errorData) {
  //     return <OverrideErrorManager statusCode={errorData.code} message={errorData.msg} />;
  //   }

  return (
    <div className="flex  flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col w-full items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Userbox>
          <UserboxLeft className= "ml-5">
            <OverrideButton trucbidule={trucbidule} onClick={() => addUser(userAddName)}>Add</OverrideButton>
          </UserboxLeft>
          <UserboxRight className = "mr-5">
            <Input placeholder="test" value = {userAddName} onChange= {(e) => setUserAddName(e.target.value)}/>
          </UserboxRight>
        </Userbox>

        <Userbox>
          <UserboxLeft className= "ml-5">
            <OverrideButton trucbidule={trucbidule} onClick={() => modifyUser(userModifyID,userModifyName)}>Modify</OverrideButton>
          </UserboxLeft>
          <UserboxRight className = "mr-5">
            <Input placeholder="ID of the user to change" value = {userModifyID} onChange={(e) => setUserModifyID(e.target.value)}/>
            <Input placeholder="New name" value = {userModifyName} onChange={(e) => setUserModifyName(e.target.value)}/>
          </UserboxRight>
        </Userbox>

        <Userbox>
          <UserboxLeft className= "ml-5">
            <OverrideButton trucbidule={trucbidule} onClick={() => deleteUser(userDeleteID)}>Delete</OverrideButton>
          </UserboxLeft>
          <UserboxRight className = "mr-5">
            <Input placeholder="ID of the user to delete" value = {userDeleteID} onChange={(e) => setUserDeleteID(e.target.value)}></Input>
          </UserboxRight>
        </Userbox>

        <div className="flex gap-20">
          <Userbox>
            <UserboxLeft className= "ml-5">
              <OverrideButton trucbidule={trucbidule} onClick={()=>getUser(oneUserID)}>Get</OverrideButton>
            </UserboxLeft>
            <UserboxRight className = "mr-5">
              <Input placeholder="ID of the user to get" value={oneUserID} onChange={(e) => setOneUserID(e.target.value)}></Input>
            </UserboxRight>
          </Userbox>
          <div className="text-sm p-2 bg-zinc-100 rounded"> <span>{oneUser?.name}</span> </div>
        </div>
        
        <Userbox>
          <UserboxLeft className= "ml-5"><OverrideButton trucbidule={trucbidule} onClick={getAllUser}>List</OverrideButton></UserboxLeft>
          <UserboxRight className = "mr-5"><Input placeholder="test"></Input></UserboxRight>
        </Userbox>
        {/* <Userbox></Userbox>         */}

        <div className="mt-8">
          <ul className="space-y-1">
            {users.map((user) => (
              <li key={user.id} className="text-sm p-2 bg-zinc-100 rounded flex justify-between">
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}