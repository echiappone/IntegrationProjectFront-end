import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import './Home.css';
import Banner from '../../components/statics/banner/Banner';
import Fazemos from '../../components/statics/fazemos/Fazemos';
import Contribuir from '../../components/statics/contribuir/Contribuir';
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import FooterNao from '../../components/statics/footerNao/FooterNao';
import Carrossel from '../../components/statics/carrossel/Carrossel';
import Poema from '../../components/statics/poema/Poema';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token !== '') {
            navigate('/doacoes')
            toast.success('Você já esta logado', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }, [token])
    
    return (
        <>
            <img id='background' src="https://i.imgur.com/uF7VOmS.png" alt="Back" />
            <NavbarIndex />
            <Banner />
            <Fazemos />
            <Contribuir />
            <Carrossel />
            <FooterNao />
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