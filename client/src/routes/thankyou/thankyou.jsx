import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./thankyou.css";
import apiRequest from "../../lib/apiRequest";
const ThankYou = () => {
  const { data } = useParams();
  console.log("this property will be inactive", data);
  const propertyUpdate = async () => {
    try {
      await apiRequest.post("/posts/booking", { postId: data });
    } catch (err) {
      console.log(err);
    }
  };
  propertyUpdate();
  return (
    <div className="thank-you-container">
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>
          You have successfully paid the rent price. You can now enjoy your new
          home!
        </p>
        <Link to="/" className="home-link">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
