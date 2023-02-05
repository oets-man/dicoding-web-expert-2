const createStar = ({ rating, starElement, ratingElement }) => {
	// https://www.youtube.com/watch?v=u3rylF3y3og&list=LL&index=1

	// Get percentage
	const starPercentage = (rating / 5) * 100;

	// Round to nearest 10
	const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

	// Set width of stars-inner to percentage
	starElement.style.width = starPercentageRounded;

	// Add number rating
	ratingElement.innerHTML = parseFloat(rating).toFixed(1);
};
export default createStar;
