import React, { Component } from 'react'
import Layout from '../components/Layout'

//Import modules
import Menu from '../components/Menu/Menu'
import Hamburguer from '../components/Hamburguer/Hamburguer';
import Drop from '../components/Drop/Drop';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Categories from '../components/Categories/Categories';
import Clients from '../components/Clients/Clients';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideButtonOpener: false,
    }
  }  

  hamburguerToggleHandler = () =>{
    this.setState((prevState) =>{
      return{ sideButtonOpener: !prevState.sideButtonOpener}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideButtonOpener: false})
  };
  render(){
    let sideButton, backdrop;

    if(this.state.sideButtonOpener){
      sideButton = <Hamburguer/>
      backdrop = <Drop click={this.backDropClickHandler}/>
    }
    return (
      <div>
        <Layout>
        <Menu 
        hamburguerClickHandler={this.hamburguerToggleHandler}
        className={this.state.className}
        />
        {sideButton}
        {backdrop }
        <Header/>
        <About/>
        <Categories/>
        <Clients/>
        <Work/>
        <Footer/>
        </Layout>
      </div>
    )
  } 
}

export default Home;

