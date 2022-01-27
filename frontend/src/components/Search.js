import React, { useState, useEffect} from 'react';
import '../components/CSS/Search.css';
import {Col,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import StarRatingComponent from 'react-star-rating-component';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    
    //for quantity
    const [quantity, setQuantity] = useState(1);

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    //change page
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    //getting  current page products
    const indexOfLastProd = currentPage * postsPerPage;
    const indexOfFirstProd = indexOfLastProd - postsPerPage;
    const currentProd = products.slice(indexOfFirstProd, indexOfLastProd);

    //products start
    const getProducts = async () => {
        try {
            const res = await fetch('/allProducts');
            setProducts(await res.json());
            setloading(false);

        } catch (err) {
            console.log(err);
            setloading(false);

        }
    }
    useEffect(() => {
        getProducts();

    }, []);
    //product end

    const dispatch = useDispatch()

    const addToCartHandler = (_id, productName, productImage, productProducer, productCost, productStock, quantity) => {
        dispatch(addToCart(_id, productName, productImage, productProducer, productCost, productStock, quantity))
    }

    return (
        <div className="user">
            <h1>Search</h1>
            <input type="text" placeholder='Search...'
                onChange={event => { setSearchTerm(event.target.value) }} />
            {currentProd.filter((curEle) => {
                if (searchTerm == " ") {
                    return curEle
                }
                else if (curEle.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return curEle;
                }
            }).map((curEle, key) => {
                return (
                    // <div className='user' key={key}>
                    //     <Col className="g-3 mt-2 mb-2" style={{ fontSize: "15px" }}>
                    //         <Link to={`${curEle._id}`}>
                    //             <Card className="product-card">
                    //                 <Card.Img variant="top" src={curEle.productImage} height="130"
                    //                     width="150" />
                    //                 <Card.Body>
                    //                     <Card.Title className='text-left'>
                    //                         <Card.Title style={{ color: "black" }}><Link to={`/${curEle._id}`}> {curEle.productName} </Link></Card.Title>
                    //                         <Card.Title><BiRupee />{curEle.productCost}</Card.Title>
                    //                     </Card.Title>


                    //                     <Card.Text className="text-center" style={{ fontSize: "25px" }}>
                    //                         <Button variant='outline-danger' className="text-center" onClick={() => addToCartHandler(curEle._id, curEle.productName, curEle.productImage, curEle.productProducer, curEle.productCost, curEle.productStock, quantity)}>View Product</Button><br />
                    //                         <StarRatingComponent
                    //                             name="rating"
                    //                             starCount={5}
                    //                             value={curEle.productRating}
                    //                         />
                    //                     </Card.Text>
                    //                 </Card.Body>
                    //             </Card>
                    //         </Link>
                    //     </Col>
                    // </div>
                    <></>
                    ) 
            })
        }
        </div>
    );
}

