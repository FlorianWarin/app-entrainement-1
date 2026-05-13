// import React from "react"
// import Error from "next/error"
// // import { error } from "console"
// 
// // export interface errorReturn {
// //     error : Error
// // }
// 
// 
// interface HasArg {
//     msg? : string,
// } 
// 
// export default class errorReturn<P extends HasArg ={}> extends React.Component<P & Error> {
// 
//     public getErrorMessage() : string {
// 
//         if(this.props.msg){return this.props.msg}
//         else{return "No error message"}
// 
//     }
// 
// }

import { useState } from "react";
import OverrideErrorManager from "../core/error-manager";


// 1. Ton composant de page
export default function MyPage() {
  // On crée un état pour stocker l'erreur si elle arrive
  const [errorData, setErrorData] = useState<{msg: string, code: number} | null>({
      msg: "Test de mon log manager",
      code: 415 // I'm a teapot
  });

  const getAllUser = async () => {
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Erreur");
      // ... suite du code
    } catch (e) {
      // AU LIEU DE RETURN, on met à jour l'état
      setErrorData({ msg: "Message personnalisé", code: 500 });
    }
  };

  // 2. Gestion de l'affichage (C'est ICI qu'on utilise le composant)
  if (errorData) {
    return <OverrideErrorManager statusCode={errorData.code} message={errorData.msg} />;
  }

  return (
    <div>
      <button onClick={getAllUser}>Charger les utilisateurs</button>
    </div>
  );
}