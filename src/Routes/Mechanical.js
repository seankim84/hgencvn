import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import PlantMain from '../Components/MechanicalComponent/PlantMain';
import Project from '../Components/MechanicalComponent/Project';
import Footer from '../Components/Footer';

class Mechanical extends Component {
    render(){
        return (
            <div>
             <Helmet>
                <title>H&G | Mechanical</title>
                <meta name="description" content="HGENC Business part civil architecture plant Mechanical contruction" />
                <link rel="canonical" href="https://hgenc.net/mechanical" />
            </Helmet>
            <Header />
            <PlantMain />
            <Project />
            <Footer />
            </div>
        )
    }
}

export default Mechanical;