import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import IndividualCard from "./components/IndividualCard";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/character/:id" component={IndividualCard} />
    </main>
  );
}
