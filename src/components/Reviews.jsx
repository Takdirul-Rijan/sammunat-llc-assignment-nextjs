"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load reviews", err));
  }, []);

  return (
    <section className="mx-auto py-14 px-3 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold my-4">
          What Our Clients Say
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Trusted by global clients for delivering reliable, scalable, and
          innovative digital solutions.
        </p>
      </div>

      <Swiper
        loop
        grabCursor
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
