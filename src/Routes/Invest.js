import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import InvestMain from '../Components/InvestComponent/investMain';
import Investment from '../Components/InvestComponent/investment';
import Family from '../Components/InvestComponent/Family';
import Footer from '../Components/Footer';

class Invest extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Client</title>
                <meta name="description" content="HGENC work with a lot of corporation and company. posco, formosa, sunjin, hyundai rotem, woosung, cjsc, tiron, sungshin, kyungshin, cheng loong corp, fhs, kolon, far estern new century corporation, hoa phat" />
                <link rel="canonical" href="https://hgenc.net/invest" />

            </Helmet>
            <Header />
                <InvestMain />
                <Investment />
                <Family />
            <Footer />
            </div>
        )
    }
}

export default Invest;