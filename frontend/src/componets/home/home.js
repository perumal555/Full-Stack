import React from 'react'
import Banner1 from './banner1'
import Main from './Main';
import Navbar from './navbar';
import Add from './add';
import Sliders from './sliders';
import ImgBanner from './imgbanner';
import Custem from './custem';
import FeedBack from './feedback';



const Home = ({token}) => {

    return (
        <>

        {/* =============== carousel start ==============> */}  
            <Banner1 />
        {/* =============== carousel end ==============> */}

        {/* ============= img card start==============> */}
            <Main/>
        {/* ============= img card end==============> */}

        {/* =============== navbar1 title start============> */}
            <Navbar token={token}/>
        {/* ===============navbar1 title end============>  */}

        {/* ============add img card start========> */}
            <Add/>
        {/* ============add img card end========> */}

        {/* ============ slider start ============> */}
            <Sliders/>
        {/* ============ slider end ============> */}

        {/* =============== apple baner img start================> */}
            <ImgBanner/>
        {/* =============== apple baner img end================> */}

        {/* =========== custem start ==============> */}
            <Custem/>
        {/* =========== custem start ==============> */}

        {/* ============ FeedBack start ============> */}
            <FeedBack/>
        {/* ============ FeedBack start ============> */}

        </>
    )
}

export default Home
