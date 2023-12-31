import React from "react";

import Header from "./header";

export default {
  title: "Component/Header",
  component: Header,
};

export const HeaderComponent= () => {
  const data = [
    { id: 1, title: "Home" },
    { id: 2, title: "Contact" },
    { id: 3, title: "Gallery" },
    { id: 4, title: "Modals" },
    { id: 5, title: "Modals" },
  ];
  return <Header data={data} ></Header>;
};
