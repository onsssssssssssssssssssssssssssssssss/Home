import React from "react";
import './footer1.css'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3>Anoha academy</h3>
                                <p>Anoha Academy is a training center recognized by the state
                                     which adopts a tailor-made training methodology in several areas such as logistics, digital marketing etc ... not only the clients who benefit from the training but also the trainers can have a training before joining the center .. among the trainers it is mr touhemi cheguir who is already the founder of the center.
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#" style={{textDecoration:'none'}}>Home</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#" style={{textDecoration:'none'}}>About us</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#" style={{textDecoration:'none'}}>Services</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#" style={{textDecoration:'none'}}>Terms of service</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#" style={{textDecoration:'none'}}>Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    BP 2, Avenue 9 Avril Marsa Safsaf - 2078 Tunisia<br />
                                    <strong>Phone:</strong>(+216) 98 218 074<br />
                                    <strong>Email:</strong> contact@anoha.com.tn<br />
                                </p>

                                <div class="social-links">
                                    <a href="#" class="twitter"><i class="fa fa-twitter"> 
                                    <Icon icon="icomoon-free:facebook" color="white" width="30" height="20" />
</i></a>
                                    <a href="#" class="facebook"><i class="fa fa-facebook">
                                    <Icon icon="ant-design:instagram-filled" color="white" width="30" height="20" />
</i></a>
                                    <a href="#" class="instagram"><i class="fa fa-instagram">
                                    <Icon icon="simple-icons:gmail" color="white" width="30" height="20" />
</i></a>
                                    <a href="#" class="google-plus"><i class="fa fa-google-plus">
                                    <Icon icon="bi:linkedin" color="white" width="30" height="20" />
</i></a>
                                    <a href="#" class="linkedin"><i class="fa fa-linkedin"><Icon icon="bytesize:github" color="white" width="30" height="20" />
</i></a>
                                </div>
                               

                            </div>

                            <div class="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong>Anoha academy</strong>. All Rights Reserved
                    </div>
                    <div class="credits">Designed by <a href="#">Anoha Degital</a>
                    </div>
                </div>
            </footer>

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        </>);
};
export default Footer;
