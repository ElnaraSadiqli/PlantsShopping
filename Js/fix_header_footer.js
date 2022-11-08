


class MyHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = ``
    }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  
    connectedCallback() {
        this.innerHTML = `
        <div id="footer">
        <div class="container">
        <!-- Footer Top -->
        <section class="footer-top">
            <div class="row justify-content-between ">
                <!-- Footer Top info -->
                <div class="col-lg-3">
                    <!-- Footer Top info logo -->
                    <img src="Images/Header/HeaderLogo.png" alt="LogoInFooterTop" class="footer-logo-top"
                        height="52px">
                    <!-- Footer Top info number -->
                    <p class="mb-0 footer-top-num">+1 (7635) 547-12-97</p>
                    <!-- Footer Top info mail-->
                    <a href="#">support@lift.agency</a>
                </div>

                <!-- Footer Top Quick Links first -->
                <div class="col-lg-2">
                    <p class=" footer-top-links-tt">Quick Links</p>
                    <ul class="footer-top-links  mb-0">
                        <li>
                            <a href="#">Product</a>

                        </li>
                        <li>
                            <a href="#">Contact</a>

                        </li>
                    </ul>
                </div>

                <!-- Footer Top Quick Links second-->
                <div class="col-lg-2">
                    <ul class="footer-top-links footer-top-links-s mb-0">
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>

                <!-- Footer Top input -->
                <div class="col-lg-5 d-flex justify-content-end">
                    <form class="footer-top-input" action="#">
                        <label for="input-product">Subscribe</label> <br>
                        <input type="text" placeholder="Get product updates" id="input-product">
                        <i class="fa-solid fa-arrow-right"></i>
                    </form>
                </div>

            </div>

        </section>

        <!-- Footer Bottom -->
        <section class="footer-bottom ">
            <!-- Footer bottom Social media -->
            <ul class="footer-socials mb-0">

                <!-- Footer bottom Social LinkedIn -->
                <li><a href="#" class="footer-social">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a></li>
                <!-- Footer bottom Social Facebook -->
                <li><a href="#" class="footer-social">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a></li>
                <!-- Footer bottom Social  Tweeter -->
                <li> <a href="#" class="footer-social">
                        <i class="fa-brands fa-twitter"></i>
                    </a></li>
            </ul>

            <!-- Footer bottom Product -->
            <div class="footer-bottom-product">
                <span class="mb-0">A product of </span>
                <!-- Footer bottom Product logo-->
                <img src="Images/Header/HeaderLogo.png" alt="LogoInFooter" height="26px" class="footer-logo-bottom">
            </div>

            <!-- Footer bottom Product reserved -->
            <div class="footer-bottom-reserv">
                <p>© 2021 My Plants All rights reserved</p>
            </div>

        </section>

        </div>
        </div>`
    }
}

customElements.define("my-footer", MyFooter);