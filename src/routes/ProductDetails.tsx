import ColorOptions from "../components/ColorOptions";

const ProductDetails = () => {
  return (
    <div>
      <img
        src="https://blocks.astratic.com/img/general-img-landscape.png"
        alt=""
      />
      <ColorOptions colors={["black", "white", "blue", "pink"]} />
      <h5>Size</h5>
      <div>
        <div>S</div>
        <div>M</div>
        <div>L</div>
      </div>
      <p>$150.00</p>
      <h5>Mens Casual Premium Slim Fit T-Shirts</h5>
      <div>
        <button>Add To Card</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
