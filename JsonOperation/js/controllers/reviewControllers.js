// Fetching reviews data from the review API
import { fetchReviews } from "../../../JsonOperation/js/api/apiService.js";
export const Review = () => {
  fetchReviews().then((data) => {
    const reviewContainer = document.getElementById("emp-review-container");

    if (!reviewContainer) {
      console.error("Review container not found!");
      return;
    }

    // Sorting Reviews by Recent Date
    const recentReviews = data.sort((a, b) => {
      return new Date(b.dateOfReview) - new Date(a.dateOfReview);
    });

    // Generating Review Cards
    recentReviews.slice(0, 5).forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");

      reviewCard.innerHTML = `
          <div class="review-card-head">
            <h2 class="reviewer-name">${review.employeeName}</h2>
            <p class="emp-position">${review.position}</p>
          </div>
          <div class="review-card-body">
            <p><strong></strong> ${review.reviewer}</p>
            <p>${[1, 2, 3, 4, 5]
              .map((rating) => {
                return rating <= review.rating ? "⭐" : "☆";
              })
              .join(" ")}</p>
            <p style="color:grey"> ${new Date(
              review.createdAt
            ).toLocaleDateString()}</p>
            <p class="review-text">"${review.review}"</p>
          </div>
        `;

      reviewContainer.appendChild(reviewCard);
    });
  });
};
