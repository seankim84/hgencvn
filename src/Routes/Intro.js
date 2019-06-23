import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Greeting from '../Components/IntroComponent/Greeting';
import Strength from '../Components/IntroComponent/Strength';
import IntroMain from '../Components/IntroComponent/IntroMain';
import Certification from '../Components/IntroComponent/Certification';
import Registration from '../Components/IntroComponent/Registration';
import Organization from  '../Components/IntroComponent/Organization';

class Intro extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Intro</title>
                <meta name="description" content="Hello we are the construction corporation in Vietnam. We have own factory and construction knowhow and We know how much effort for you" />
                <link rel="canonical" href="https://hgencvn.net/intro" />
            </Helmet>
            <Header />
            <IntroMain />
            <Greeting />
            <Strength />
            <Certification />
            <Registration />
            <Organization />
            <Footer />
            </div>
        )
    }
}

export default Intro;