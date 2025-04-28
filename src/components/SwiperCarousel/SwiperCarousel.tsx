import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Importando o estilo base
import "swiper/css/navigation"; // Se quiser navegação (setinhas)
import image from "../../assets/teste-img.jpg";
import { StyledSwiper } from "./SwiperCarouselStyle";

import { Navigation, Autoplay } from "swiper/modules"; // Importar o módulo de navegação (se quiser setas)

const SwiperCarousel = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Autoplay]} // Se quiser usar setas ou outros módulos
      navigation // Habilita as setinhas
      spaceBetween={0} // Espaço entre slides
      slidesPerView={1} // Quantos slides aparecem de uma vez
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default SwiperCarousel;
