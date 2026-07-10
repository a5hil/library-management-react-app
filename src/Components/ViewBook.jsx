import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'

const ViewBook = () => {

    const [data, showdata] = useState(
        [
            { "name": "White Nights", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/086/9780241252086.jpg", "author": "John Doe", "price": "$19.99"},
            { "name": "The Alchemist", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/980/9788172234980.jpg", "author": "Paulo Coelho", "price": "$19.99"},
            { "name": "The Road", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/792/9781035003792.jpg", "author": "John Doe", "price": "$79.99"}, 
            { "name": "Project Hail Mary", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/468/9781529157468.jpg", "author": "Andy Weir", "price": "$39.99"},
            { "name": "Harry Potter", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/652/9781408855652.jpg", "author": "J.K. Rowling", "price": "$99.99"},
            { "name": "Fourth Wing", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/019/9780349437019.jpg", "author": "John Doe", "price": "$19.99"},
            { "name": "Red Rising", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/993/9781444758993.jpg", "author": "Pierce Brown", "price": "$19.99"},
            { "name": "Camille", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/128/9780857054128.jpg", "author": "Kevin Brown", "price": "$29.99"},
            { "name": "Orbital", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/086/9780241252086.jpg", "author": "Samantha Harvey", "price": "$11.99"},
            { "name": "11.22.63", "cover": "https://www.bookswagon.com/BW/productimages/mainimages/019/9780349437019.jpg", "author": "Stephen King", "price": "$49.99"}
        ]
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">View Books</h2>
            <div className="container">
                <div className="row">
                    <div
                        className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                    >
                        <div className="row g-4">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div
                                            className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"
                                        >
                                            <div className="card">
                                                <img
                                                    src={value.cover}
                                                    className="card-img-top"
                                                    alt="..." height="300px"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.name}</h5>
                                                    <p className="card-text">
                                                        Author: {value.author}
                                                    </p>
                                                    <p className="card-text">
                                                        <strong>${value.price}</strong>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook