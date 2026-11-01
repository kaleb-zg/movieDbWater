import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Styles from "./SlideShow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {

  return (
    <div>
      <h2 className={Styles.title}> {title}</h2>

      <div className={Styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
          breakpoints={{
            0: { slidesPerView: 1.35, spaceBetween: 10 },
            360: { slidesPerView: 1.55, spaceBetween: 10 },
            480: { slidesPerView: 2.2, spaceBetween: 10 },
            640: { slidesPerView: 3.2, spaceBetween: 10 },
            900: { slidesPerView: 4.4, spaceBetween: 10 },
            1200: { slidesPerView: 5.8, spaceBetween: 10 },
          }}
        >
          {movies?.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
