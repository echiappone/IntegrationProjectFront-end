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
                    <a href="https://www.linkedin.com/in/echiappone/" target="_blank">
                        <img src="https://i.imgur.com/niKPbTs.png" alt="Erick"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/naomy-santana//" target="_blank">
                        <img src="https://i.imgur.com/QLM5RNl.png" alt="Naomy"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/renatanunes97/" target="_blank">
                        <img src="https://i.imgur.com/VfYBMBm.png" alt="Renata"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/yasmim-cristine//" target="_blank">
                        <img src="https://i.imgur.com/onATXyJ.png" alt="Yasmim"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/dev-fabricio-dias/" target="_blank">
                        <img src="https://i.imgur.com/5VwoA2o.png" alt="Fabricio"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/gustavo-carvalho-dev/" target="_blank">
                        <img src="https://i.imgur.com/BacBbSq.png" alt="Gustavo"></img>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/nickole-bueno/" target="_blank">
                        <img src="https://i.imgur.com/0nDlJYT.png" alt="Nickole"></img>
                    </a>
                </div>
            </div>

        </>
    )
}

export default FooterNao;