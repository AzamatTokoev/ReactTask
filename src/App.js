import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
const App = () => {
  const users = [
    {
      name: "Azamat",
      lastName: "Tokoev",
      age: 30,
      id: 1,
    },
    {
      name: "Nurlan",
      lastName: "Doolotaliev",
      age: 33,
      id: 2,
    },
    {
      name: "Argen",
      lastName: "Murtaza",
      age: 33,
      id: 3,
    },
    {
      name: "Muslim",
      lastName: "Aidaraliev",
      age: 48,
      id: 4,
    },
    {
      name: "Bayel",
      lastName: "Aboba",
      age: 32,
      id: 5,
    },
  ];
  console.log(users);

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
