import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Styles from "./MovieCard.module.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let gebres = ["Adventure", "Action", "Triller"];
  console.log(movie)

  return (
    <div className={Styles.cardWrapper}>
      {/* poster image  */}
      <img
        className={Styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster-image"
      />

      {/* hover card */}

      <div className={Styles.hoverCard}>
        {/* img  */}
        <img
          className={Styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover-image"
        />

        {/* badge */}
        <div className={Styles.badge}>Recently added</div>

        {/* button row */}
        <div className={Styles.buttonsRow}>
          <FaCirclePlay
            className={Styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={Styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={Styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={Styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata row */}
        <div className={Styles.metaRow}>
          <span className={Styles.tag}>U/A 16+</span>
          <span className={Styles.tag}> Movie</span>
          <span className={Styles.tag}>HD</span>
        </div>
        {/* genres */}
        <div className={Styles.gebres}>
          {gebres?.map((g, index) => {
            return (
              <span>
                {g}
                {index < gebres.length - 1 && (
                  <span className={Styles.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
