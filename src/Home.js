import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
                <div className='home__row'>
                    <Product
                        id='113357789422'
                        title='Adidas FIFA World Cup Qatar 2022 Al Rihla League Soccer Ball'
                        price={99.9}
                        image='https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/'
                        rating={5}
                    />
                    <Product
                        id='643119978670'
                        title='Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1 - 50mm Drivers - for PC, PS5, PS4, White'
                        price={109.9}
                        image='https://m.media-amazon.com/images/I/61AQ4REoUJL._AC_UY218_.jpg'
                        rating={4}

                    />

                    <Product
                        id='6463781670'
                        title='Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)'
                        price={124.9}
                        image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg'
                        rating={5}

                    />

                    <Product
                        id='343157941642'
                        title='Acer Aspire 5 Slim Laptop - 15.6" Full HD IPS Display - 11th Gen Intel - 4GB DDR4 - 128GB - Windows 11'
                        price={180.5}
                        image='https://m.media-amazon.com/images/I/71pvhTrmZDL._AC_UY218_.jpg'
                        rating={4}

                    />
                    {/* <Product /> */}

                </div>
                <div className='home__row'>
                    <Product
                        id='3847893652'
                        title='Under Armour Mens New Freedom Flag T-Shirt'
                        price={29.9}
                        image='https://m.media-amazon.com/images/I/61gQ6CftXBL._AC_UL320_.jpg'
                        rating={3}
                    />
                    <Product
                        id='21530583457'
                        title='Under Armour Womens New Freedom Flag T-Shirt'
                        price={29.9}
                        image='https://m.media-amazon.com/images/I/61GFU9PGKGL._AC_UL320_.jpg '
                        rating={5}
                    />
                    <Product
                        id='29821873457'
                        title='PUMA Mens Axelion Spark Cross-Trainer'
                        price={59.9}
                        image='https://m.media-amazon.com/images/I/81tc6arDvFL._AC_UL320_.jpg'
                        rating={4}
                    />
                    {/* https://m.media-amazon.com/images/I/61GFU9PGKGL._AC_UL320_.jpg */}
                </div>
                <div className='home__row'>
                    <Product
                        id='893472661110'
                        title='Short Sleeve Beautiful Shirt for Women Zip Fitness Shirt Winter Warm Gym Top Activewear Running Shirt'
                        price={39.9}
                        image='https://www.gluwee.com/wp-content/uploads/2021/06/Dasha-Taran_4.jpg'
                        rating={5}
                    />
                     <Product
                        id='729471090214'
                        title='Short Sleeve Beautiful Shirt for Women Zip Fitness Shirt Winter Warm Gym Top Activewear Running Shirt'
                        price={39.9}
                        image='https://m.media-amazon.com/images/I/81XAfUthANL._AC_UL320_.jpg'
                        rating={5}
                    />
                </div>
            </div>

        </div>

    )
}

export default Home