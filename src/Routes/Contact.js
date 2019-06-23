import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import ContactMain from '../Components/ContactComponent/ContactMain';
import ContactMap from '../Components/ContactComponent/ContactMap';
import ContactInfo from '../Components/ContactComponent/ContactInfo';
import DownloadForm from  '../Components/ContactComponent/DownloadForm';
import Footer from '../Components/Footer';
class Contact extends Component {
    render(){
        return (
            <div>
                <Helmet>
                    <title>H&G | Contact</title>
                    <meta name="description" content="HGENC Location and  Contact with Google Map" />
                    <link rel="canonical" href="https://hgenc.net/contact" />
                </Helmet>
                <Header />
                <ContactMain />
                <ContactMap />
                <ContactInfo />
                <DownloadForm />
                <Footer />
            </div>
        )
    }
}

export default Contact;