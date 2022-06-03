import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Quote from "../assets/Quote.svg";
import Parade from "../assets/Ellipse1@2x.png";



import "./Carousel.css";


function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 700, 
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        };
  return (
    <>
      

    
     <div className="mb-5 mt-5 " style={{width:'100%', overflow:'hidden'}}>
        <Slider {...settings}>
          <div >
                    <div className="content-coner">
                       
                        <div className='hero-img'>
                                <img src={Parade} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>VOICES</label>
                              <h1>Testimonials</h1>
                              <div style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                                <img src={Quote} alt="something" className="img-fluid  quote"  />
                              </div>
                              <p>Illo quo sint sed et voluptates. Molestiae tempora ut omnis ipsum
                              Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky.
                               quia quia rem laudantium. Itaque quidem facere.</p>
                          </div>
                           
                        </div>
                    </div>
                    
          </div>
          <div >
              <div className="content-coner">
                       
                        <div className='hero-img'>
                          <img src={Parade} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>VOICES</label>
                              <h1>Testimonials</h1>
                              <div style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                                <img src={Quote} alt="something" className="img-fluid  quote"  />
                              </div>
                              <p>Dut qui officia Dolorem ut rerum nisi aut nemo laboriosam.
                              Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky.
                               Sed accusamus molestiae in rerum ut in et. Aut omnis necessitatibus nostrum omnis fuga vel totam dolore eveniet.</p>
                          </div>
                            
                        </div>
              </div>
          </div>
          <div >
                    <div className="content-coner">
                        
                        <div className='hero-img'>
                          <img src={Parade} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>VOICES</label>
                              <h1>Testimonials</h1>
                              <div style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                                <img src={Quote} alt="something" className="img-fluid  quote"  />
                              </div>
                              <p>Illo quo sint sed et voluptates.
                              Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky.
                               Molestiae tempora ut omnis ipsum quia quia rem laudantium. Itaque quidem facere.</p>
                          </div>
                           
                        </div>
                    </div>
          </div>
        
        </Slider>
      </div>
    
    
    </>
  )
}

export default Carousel