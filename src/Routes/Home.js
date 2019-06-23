import React, {  Component } from 'react';
import Helmet from 'react-helmet'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slider from '../Components/HomeComponent/Slider';
import Intro from '../Components/HomeComponent/Introduce';
import Doit from '../Components/HomeComponent/Doit';
import DoitTwo from '../Components/HomeComponent/DoitTwo';


class Home extends Component {
    render(){
        return (
            <div>
                <Helmet>
                    <title>H&G | Home</title>
                    <meta name="description" content="HGENC Group is best construction corp in Vietnam. We have a lot of employees for construction you need." />
                    <link rel="canonical" href="https://hgenc.net/" />
                </Helmet>
                <Header />
                <Slider />
                <Intro />
                <Doit />
                <DoitTwo />
                <Footer />
            </div>
        )
    }
}

export default Home;