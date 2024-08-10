import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousel({ items }) {
  return (
    <ReactCarousel>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.flag} alt={item.name} />
          <p className="legend">{item.name}</p>
        </div>
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
