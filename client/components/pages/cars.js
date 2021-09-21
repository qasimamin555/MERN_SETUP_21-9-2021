import React from 'react';

function Cars(props) {
    return (
        <div style={{textAlign:'center',alignItems:'center'}}>
             <img style={{width:'50%'}}
               src="https://car-pictures-download.com/wp-content/uploads/2020/03/supercar-image-Bugatti-Chiron.jpg" 
             /><hr />
             <img  style={{width:'50%'}}
               src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"
             /><hr />
             <img style={{width:'50%'}}
               src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/2-mercedes-s-class-s400d-2021-uk-fd-hero-front.jpg?itok=_0skMlJh"
             /><hr />
        </div>
    );
}

export default Cars;