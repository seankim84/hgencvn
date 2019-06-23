import React, { Component } from 'react';
import './FactoryOrganize.css';

class FactoryOrganize extends Component {
    render() {
        return(
            <div className="FactoryOrganize">
                <div className="organizeTitle">
                    <h1>Sơ đồ tổ | chức nhà máy</h1>
                </div>
                <div className="organizePhoto">
                    <img width="85%" height="30%" src='http://drive.google.com/uc?export=view&id=1OGpKfm4O1QtOgKHprAd0MXTyHb4Ka4oU' alt="factory organize" />
                </div>
            </div>
        )
    }
}

export default FactoryOrganize;