import React from "react";

import "./MyAccount.scss";
import ProfileDetails from "../common/ProfileDetails/ProfileDetails.js";
import SymptomsHistoryTable from "../common/SymptomsHistoryTable.js";

import mockData from "../mockData/mockData";

export const MyAccount = () => {
  const myData = Object.assign({}, mockData);
  const symptomsHeaders = [
    "Data/ora",
    "Durere in gat si/sau dificultate in a inghiti?",
    "Tuse intensa?",
    "Dificultate in a respira ?",
    "Îți curge nasul?"
  ];
  const otherSymptomsHeaders = ["Data/ora", "Simptome semnalate"];
  const outingsHeaders = [
    "Motivul deplasării",
    "Ora plecării",
    "Ora sosirii",
    "Contact cu pacient"
  ];

  return (
    <>
      <h1 className="account-header">Datele mele personale</h1>
      <ProfileDetails fields={myData["general-info"]} isSelf="true" />
      <SymptomsHistoryTable
        symptomsData={mockData["simptome"]}
        headers={symptomsHeaders}
        title="Istoric"
      />
      <SymptomsHistoryTable
        symptomsData={mockData["alte simptome"]}
        headers={otherSymptomsHeaders}
        title="Alte Simptome"
      />
      <SymptomsHistoryTable
        symptomsData={mockData["deplasari"]}
        headers={outingsHeaders}
        title="Istoric Deplasari"
      />
    </>
  );
};

export default MyAccount;
