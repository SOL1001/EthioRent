import { useEffect, useState } from "react";
// http://localhost:5173/list?type=rent&city=&minPrice=0&maxPrice=0
const generateUniqueText = () => {
  const timestamp = Date.now().toString(36); // Convert the current timestamp to a base-36 string
  const randomNum = Math.random().toString(36).substr(2, 9); // Generate a random base-36 string
  return `${timestamp}-${randomNum}`; // Combine the timestamp and random number
};

const ChapaPaymentForm = (props) => {
  const [txRef, setTxRef] = useState("");

  useEffect(() => {
    // Generate a new unique transaction reference when the component mounts
    setTxRef(generateUniqueText());
  }, []);

  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input
        type="hidden"
        name="public_key"
        value="CHAPUBK_TEST-UK6RGmnCVNJHrWhanLQTmkOyEa8EEbRp"
      />
      <input type="hidden" name="tx_ref" value={txRef} />
      <input type="hidden" name="amount" value={props.transactionData.price} />
      <input type="hidden" name="currency" value="ETB" />
      <input
        type="hidden"
        name="email"
        value={props.transactionData.renterEmail}
      />
      <input
        type="hidden"
        name="first_name"
        value={`username of renter ${props.transactionData.renterUsername}`}
      />
      <input
        type="hidden"
        name="last_name"
        value={`username of owner ${props.transactionData.ownerUsername}`}
      />
      <input type="hidden" name="title" value="Let us do this" />
      <input
        type="hidden"
        name="description"
        value="Paying with Confidence with chapa"
      />
      <input
        type="hidden"
        name="logo"
        value="https://chapa.link/asset/images/chapa_swirl.svg"
      />
      <input
        type="hidden"
        name="callback_url"
        value="http://localhost:5173/thankyou"
      />
      <input
        type="hidden"
        name="return_url"
        value={`http://localhost:5173/thankyou/${props.transactionData.id}`}
      />
      <input type="hidden" name="meta[title]" value="test" />
      <button type="submit" className="price">
        Rent now
      </button>
    </form>
  );
};

export default ChapaPaymentForm;
