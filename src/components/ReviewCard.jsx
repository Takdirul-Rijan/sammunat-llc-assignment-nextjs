import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const fullStars = Math.floor(review.rating);

  return (
    <div
      className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition
                    w-full max-w-sm mx-auto text-center
                    h-[360px] flex flex-col"
    >
      <img
        src={review.avatar}
        alt={review.name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <h3 className="text-base sm:text-lg font-semibold text-gray-800 break-words">
        {review.name}
      </h3>

      <p className="text-xs sm:text-sm text-gray-500 mb-3">{review.role}</p>

      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        “{review.comment}”
      </p>

      <div className="mt-4 flex justify-center gap-1 text-yellow-500">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
