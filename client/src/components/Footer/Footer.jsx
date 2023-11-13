import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptatem accusantium doleremoq laudantium.totam,rem
                    aperium,eaque,ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div clannName="text">
                        Sahastradhara Road, Rajeshwar nagar, Dehradun,
                        UK,248001
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">phone:7895746078</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text"> Email:store@abdev.com </div>


                </div>

               </div>


            <div className="col">
                <div className="title">Categories</div>
            <span className="text"> Headphones </span>
            <span className="text"> smart Watches </span>
            <span className="text"> Bluetooth speakers</span>
            <span className="text"> Wireless earbuds</span>
            <span className="text"> Home theatre </span>
            <span className="text"> Projector</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                <span className="text"> Home</span>
            <span className="text"> About </span>
            <span className="text"> Privacy Policy</span>
            <span className="text"> Returns</span>
            <span className="text"> Terms and conditions</span>
            <span className="text"> contact us</span>
            
                </div>
        </div>
<div className="bottom-bar">

    <div className="bottom-bar-content">
        <div className="text">
            ABDEVSTORE 2023 created by AB Dev. premium E-commerce
            SOLUTIONS.
        </div>
        <img src={Payment} alt="" />
    </div>
</div>

    </footer>
};

export default Footer;
