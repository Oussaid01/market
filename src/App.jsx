import React from 'react'
import './App.css'
import Product from './components/Article.jsx'
import Header from './components/Header.jsx'


  
function App() {
  const productsData = [{
    name: "Pc portable Dell Gaming G15 5535 / Ryzen 5 7640HS / 8 Go / 1 To SSD RTX 3050 6G / Windows 11",
    url: "./img/pc.jpg",
    stock: "10",
    state: "En Stock",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia.",
    price: "2 689,000 DT"
  },
    {
      name: "Clavier de jeu mécanique Redragon LAKSHMI K606-OG-BK / RED SWITCH",
      url: "./img/clavier.jpg",
      stock: "0",
      state: "En Stock",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia.",
      price:"89,000 DT"
    },
    {
      name: "Souris Gaming White Shark GM-5013 / 12 800 DPI / Rose",
      url: "./img/souris.jpg",
      stock:"1",
      state: "En Stock",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia.",
      price:"49,000 DT"
    }
  ];

  return (
    <main>
      <Header></Header>
      <Product products={productsData}>
        <p className='solde'>SOLDE!!</p>
      </Product>
    
    </main>
  )
}

export default App

/*

 <Product name="Écouteurs filaire avec Micro Y-U19 / Gris" url="./img/ecouteur.jpg" stock="5" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="6,900 DT" />
      <Product  name="Clavier de jeu mécanique Redragon LAKSHMI K606-OG-BK / RED SWITCH" url="./img/clavier.jpg"  stock="0" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="89,000 DT"/>
      <Product  name="Souris Gaming White Shark GM-5013 / 12 800 DPI / Rose" url="./img/souris.jpg"  stock="1" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="49,000 DT"/>
*/




















/*
Methode 1:


import React from 'react'
import './App.css'
import Product from './components/Article.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <main>
      <Header></Header>
      <Product name="Pc portable Dell Gaming G15 5535 / Ryzen 5 7640HS / 8 Go / 1 To SSD <br></br> RTX 3050 6G / Windows 11" url="./img/pc.jpg" stock="10" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="2 689,000 DT">
        <p className='solde'>SOLDE!!</p>
      </Product>
      <Product name="Écouteurs filaire avec Micro Y-U19 / Gris" url="./img/ecouteur.jpg" stock="5" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="6,900 DT" />
      <Product  name="Clavier de jeu mécanique Redragon LAKSHMI K606-OG-BK / RED SWITCH" url="./img/clavier.jpg"  stock="0" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="89,000 DT"/>
      <Product  name="Souris Gaming White Shark GM-5013 / 12 800 DPI / Rose" url="./img/souris.jpg"  stock="1" state="En Stock" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia." price="49,000 DT"/>
    </main>
  )
}

export default App
*/