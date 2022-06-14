import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@mui/material';
import './FooterNao.css'

function FooterNao() {
    return (
        <>
            <div className='footer'>
                <div className="row">

                    <div className="col">
                        <h2>
                            Time Dev
                        </h2>

                        <p>
                            Nosso time de desenvolvedores foi formado na 1ª Turma de pessoas Desenvolvedoras .Net com o desafio
                            de propor uma aplicação que buscasse ajudar a combater o problema da fome em nosso país.
                        </p>
                    </div>

                    <div className="col">
                        <h2>
                            Entre em contato conosco
                        </h2>

                        <p>Para bater um papo com a gente, basta clicar sobre a foto do membro da equipe e você será
                            redirecionado ao Linkedin desta pessoa.Lá poderá conhecer mais sobre ela e acessar links como github
                            e outros projetos.
                        </p>
                    </div>
                </div>

                <div id="footer_img" >
                    <img src="https://pbs.twimg.com/profile_images/1496323515750006785/0Lx6Fn2Q_400x400.jpg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-01 at 09.23.14.jpeg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-02 at 14.25.55.jpeg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-07 at 16.36.44.jpeg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-07 at 16.03.30.jpeg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-01 at 09.27.03.jpeg" alt=""></img>
                    <img src="./img.css/WhatsApp Image 2022-06-01 at 09.25.01.jpeg" alt=""></img>
                </div>
            </div>

        </>
    )
}

export default FooterNao;