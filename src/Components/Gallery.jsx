import React from 'react';
import "./Gallery.css";
import Products from './Data/Data';

export default function Gallery(props) {
    return (
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  py-10'>
            {Products.map((value, index) => {
                if(value.data.includes(props.Getdata)) {
                    return (
                        <div key={index} className="wsk-cp-product mx-auto">
                            <div className="wsk-cp-item">
                                <div className="wsk-cp-img">
                                    <img src={value.img} alt="Product" className="img-responsive" />
                                </div>
                                <div className="wsk-cp-text">
                                    <div className="category">
                                        <span>Electronic</span>
                                    </div>
                                    <div className="title-product">
                                        <h3>{value.name}</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="wcf-left">
                                            <span className="price">{value.price}</span>
                                        </div>
                                        <div className="wcf-right">
                                            <a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else{
                    return null;
                }
            })}
        </div>
    );
}
