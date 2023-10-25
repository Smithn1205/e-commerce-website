import React, { useState } from 'react';
import "./Home.css";
import Product from './Product';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import logo from './logo.png';

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const[{ basket, user}, dispatch] = useStateValue();


    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate("/")
    }
    const navigateToorderpage = ()=>{
      navigate("/order")
  }

    const navigateToCheckout = ()=>{
        navigate("/checkout")
    }
  const products = [
    {
      id: "1",
      title: "Men's T-shirt: Graphic tees",
      price: 299.00,
      rating: 4,
      image: "https://cdn.pixabay.com/photo/2016/08/15/19/57/red-devils-1596355_640.jpg",
    },
    {
      id: "2",
      title: "Men's Shirt: White",
      price: 799.00,
      rating: 4,
      image: "https://5.imimg.com/data5/HS/UF/MY-60140432/printed-shirts-500x500.jpg",
    },
    {
      id: "3",
      title: "Men's Jeans",
      price: 699.00,
      rating: 4,
      image: "https://www.jiomart.com/images/product/original/rv2nqqfc5i/dennie-foste-slim-men-dark-blue-jeans-product-images-rv2nqqfc5i-0-202211242217.jpg?im=Resize=(330,410)",
    },
    {
      id: "4",
      title: "Men's T-shirt: Black",
      price: 599.00,
      rating: 4,
      image: "https://image.spreadshirtmedia.com/image-server/v1/products/T1340A2PA2713PT32X15Y37D1045837279W25000H17860/views/2,width=650,height=650,appearanceId=2/city-life-org-reservoir-collection.jpg",
    },
    {
      id: "5",
      title: "Men's Shirt: Turquoise ",
      price: 459.00,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/3152SerbGwL._AC_UY1100_.jpg",
    },
    {
      id: "6",
      title: "Men's Jeans",
      price: 999.00,
      rating: 4,
      image: "https://img3.exportersindia.com/product_images/bc-full/2022/4/1482198/mens-faded-jeans-1648814642-6267827.jpeg",
    },
    {
      id: "7",
      title: "Men's T-shirt",
      price: 349.00,
      rating: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsyUQhV880e8lijCtqLCvEqnV2clhMYr0gQ&usqp=CAU",
    }, 
    {
      id: "8",
      title: "Men's Shirt",
      price: 689.00,
      rating: 4,
      image: "https://www.seekpng.com/png/detail/60-600995_formal-shirts-for-men-png-free-download-men.png",
    }, 
    {
      id: "9",
      title: "Men's Jeans",
      price: 899.00,
      rating: 4,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5531450/2018/4/26/11524726322985-Lamode-Mens-Fade-Light-Grey-Shade-Jeans-7211524726322687-1.jpg",
    }, 
  ];
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const groupProductsIntoRows = (productsArray, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < productsArray.length; i += itemsPerRow) {
      rows.push(productsArray.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  return (
    <div className="home">
      <div className="home_container">
      <div className='header'>
        <img className="header_logo" src={logo}  onClick={navigateToHome} />

        <div className="header_search">
        <input className="header_searchInput"
          type="text"
          placeholder="Search for products..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        </div>
        <div className="header__nav">
                <div className="header__option" onClick={navigateToHome}>
                    <span className="header_optionLineOne">Home </span>
                </div>
                <div className="header__option" onClick={navigateToorderpage}>
                  <span className="header_optionLineOne">Orders</span>
                </div>
                <div onClick={navigateToCheckout} className="header__optionBasket">
                    <ShoppingBasketIcon/>
                </div>
            </div>
</div>
        {searchInput === "" ? (
          groupProductsIntoRows(products, 3).map((row, rowIndex) => (
            <div className="home_row" key={rowIndex}>
              {row.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          ))
        ) : (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))
        )}
      </div>
      <div className="home">
  <div className="home_container">
    <div className='footer'>
      <img className="footer_logo" src={logo} alt="Your Logo" />

      <div className="footer__nav" style={{marginLeft:'60px'}}>
        <div className="footer__option">
          <span>Email: example@example.com</span>
          <span>Mobile: +1 (123) 456-7890</span>
        </div>
        
        <div className="footer__option">
          <span>Address: 123 Main St, City, Country</span>
          <span>Hours: Mon-Fri, 9 AM - 5 PM</span>
        </div>
        
        <div className="footer__option">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
    <div className='footer'>
    <div className="social-media">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Home;
