import React from 'react'
import './Body.css';
import { Star } from '@mui/icons-material';
const Body1 = (props) => {
    const { title, image1, image2, image3, image4, image5, image6, image7, price1, price2, price3, price4, price5, price6, price7 } = props.girls;
    return (
        <div>
            <div>
                <img src="https://th.bing.com/th?id=OIP.WVtSQftiB4YiFirvb8risgHaEQ&w=329&h=189&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className="banner" />
            </div>
            <div>
                <h2 className='title'>{title}</h2>
                <div className="menimages">
                    <div className="mimage">
                        <img src={image1} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3 className='price'>{price1}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image2} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3 className='price'>{price2}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image3} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3 className='price'>{price3}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image4} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3 className='price'>{price4}</h3>
                     <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image5} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3 className='price'>{price5}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image6} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3>{price6}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                    <div className="mimage">
                        <img src={image7} alt="" />
                        <h4>Roadster (Slim & Fit)<br/>Poor Cotton<br/>4.5 <Star className='star'/></h4>
                        <h3>{price7}</h3>
                        <input type="submit" value={"Buy"} className='btn btn-primary' /> &emsp;
                        <input type="submit" value={"AddTocart"} className='btn btn-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1