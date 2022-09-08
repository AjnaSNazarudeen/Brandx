// responsive nav-bar

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="content">
            <div class="logo">
                <a href="home.html"><img src="image/logo.png" alt=""></a>
            </div>
       
        <ul class="menu-list">
            <div class="icon close-btn">
                <img src="image/close.png" alt="">
            </div>
            <li><a href="home.html">Home</a></li>
            <li><a href="graphic.html">Graphic</a></li>
            <li><a href="technical.html">Technical</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contactUs.html">Contact</a></li>
            
            <!-- <li><div class="header-btn"><a href="#" class="btn nav-btn">Get a Quote</a></div></li> -->
            <li><a class="header-button" href="contactUs.html">Get A Quote</a></li>

        </ul>
             
        
        <div class="icon menu-btn">
            <img src="image/menu.png" alt="">
        </div>
    </div>
    `;
}
createNav();
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".close-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

const createFooter = () => {
     let footer = document.querySelector('.footer-section');

     footer.innerHTML = `
     <div class="footer-content">
            <div class="box">
                <h1 class="footer-h1">We Make Amazing Digital Products With your Business</h1>
            </div>

            <div class="footer-logo-image">
                <img src="image/logo.png" alt="">
            </div>
            <div class="flex-footer">
                
                <div class="address">
                    <h4 class="address-h4">Address</h4>
                    <ul class="address-footer">
                        <li>Al Quoz-2,Dubai</li>                        
                        <li>Land Phone : +971 4 33 99 787 </li>
                        <li>Phone : +971-52 62 06 107</li>
                        <li>E-mail : info@brandxuae.com</li>
                    </ul>
                </div>
                <div class="Quick-links">
                    <h4 class="Quick-links-h4">Quick Links</h4>
                    <ul class="Quick-links-footer">
                        <li><a href="" class="footer-style">Home</a></li>
                        <li><a href="" class="footer-style">Graphic</a></li>
                        <li><a href="" class="footer-style">Technical</a></li>
                        <li><a href="" class="footer-style">About Us</a></li>
                        <li><a href="" class="footer-style">Contact</a></li>
                    </ul>
                </div>
                <div class="Graphic">
                    <h4 class="Quick-links-h4">Graphic</h4>
                    <ul class="Quick-links-footer">
                        <li><a href="" class="footer-style">Digital printing</a></li>
                        <li><a href="" class="footer-style">Plotter cutting</a></li>
                        <li><a href="" class="footer-style">Acrylic display stands</a></li>
                        <li><a href="" class="footer-style">Laser cutting</a></li>
                        <li><a href="" class="footer-style">Exhibition</a></li>
                    </ul>
                </div>
                <div class="Technical">
                    <h4 class="Quick-links-h4">Technical</h4>
                    <ul class="Quick-links-footer">
                        <li><a href="" class="footer-style">Interior designing</a></li>
                        <li><a href="" class="footer-style">Exhibition stand</a></li>
                        <li><a href="" class="footer-style">Customized furniture</a></li>
                        <li><a href="" class="footer-style">HVAC Maintenance</a></li>
                        <li><a href="" class="footer-style">Maintenance work</a></li>
                    </ul>
                </div>
            </div>
            <div class="social-media">
                <div class="social-medias">
                        <a href="" class="social-media-icons"></a>
                        <a href="" class="social-media-icons"></a>
                        <a href="" class="social-media-icons"></a>
                </div>

            </div>
        </div>
     `;
}
createFooter();


