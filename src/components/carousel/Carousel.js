import { Carousel } from "react-bootstrap";
import "./Carousel.css"
import "bootstrap";

const CarouselElement = (list) => {
   list = list['list']
  return (
    <Carousel className="mx-lg-5 px-lg-5 w-auto" fade>
      {list.map((item) => {
        return (
          <Carousel.Item key={list.indexOf(item)}>
            <img
              className="d-block w-100"
              src={item.link}
              alt={item.caption}
            />
            <Carousel.Caption className="pt-1 pb-3">
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
  // return (
  //   <div class="section-6 wf-section">
  //     <div data-w-id="c3ea3c7c-971a-8972-b78b-f0c0098bd547" style="opacity:0" class="container-6 w-container">
  //       <div data-delay="4000" data-animation="slide" class="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="300" data-infinite="true">
  //         <div class="mask w-slider-mask">
  //           <div class="w-slide">
  //             <img sizes="(max-width: 767px) 96vw, (max-width: 991px) 728px, 940px" srcset="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web.jpg 1920w" src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web.jpg" loading="lazy" alt="paradox 1 pic" class="image-8" />
  //             <p class="slide-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  //           </div>
  //           <div class="w-slide">
  //             <img sizes="(max-width: 767px) 96vw, (max-width: 991px) 728px, 940px" srcset="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web.jpg 1920w" src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web.jpg" loading="lazy" alt="paradox 2 pic" />
  //             <p class="slide-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  //           </div>
  //           <div class="slide w-slide">
  //             <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e1eaf5e07cdb90e2dbd922_IMG-20220306-WA0028.jpg" loading="lazy" width="515" sizes="(max-width: 767px) 96vw, 515px" srcset="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e1eaf5e07cdb90e2dbd922_IMG-20220306-WA0028-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e1eaf5e07cdb90e2dbd922_IMG-20220306-WA0028-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e1eaf5e07cdb90e2dbd922_IMG-20220306-WA0028.jpg 1024w" alt="" class="image-4" />
  //             <p class="slide-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  //           </div>
  //         </div>
  //         <div class="left-arrow-3 w-slider-arrow-left">
  //           <div class="w-icon-slider-left"></div>
  //         </div>
  //         <div class="right-arrow-3 w-slider-arrow-right">
  //           <div class="w-icon-slider-right"></div>
  //         </div>
  //         <div class="slide-nav-2 w-slider-nav w-round"></div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default CarouselElement;