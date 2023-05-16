import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// COMPONENTES

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <div>
       {/* <Header 
          title="aca iria el titulo" 
          subtitle="aca iria el subtitulo"
        /> */}
        <NavBar/>
        <ItemListContainer greeting="Bienvenido(a) a nuestra tienda en línea." />

      </div>
    );
  }
}

export default App;
