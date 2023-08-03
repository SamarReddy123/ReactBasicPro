import React, { useState } from 'react';
import Header from './ShopingProject/Header';
import Body from './ShopingProject/Body';
import { MenData } from './ShopingProject/Data';
import { GirlData } from './ShopingProject/Data';
import Body1 from './ShopingProject/Body1';
import Footer from './ShopingProject/Footer';
const App=()=> {
  const[mens,setMens]=useState(MenData);
  const[girls,setGirls]=useState(GirlData);
  return (
    <>
    <Header/>
    <Body mens={mens} />
    <Body1 girls={girls}/>
    <Footer/>
    </>   
  );
}

export default App;
