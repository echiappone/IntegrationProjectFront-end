import React from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import './Home.css';
import Banner from '../../components/statics/banner/Banner';
import Fazemos from '../../components/statics/fazemos/Fazemos';
import Contribuir from '../../components/statics/contribuir/Contribuir';
import Footer from '../../components/statics/footer/Footer';
import Navbar from '../../components/statics/navbar/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Fazemos />
            <Contribuir />
            <Footer />
        </>
    );
}

export default Home;

// escreve com efeito de digitação
/*<
    div class="typing-block">
        <h1 class="h1-new typing-effect">
            Fast and Easy
        </h1>
    </div>
 */