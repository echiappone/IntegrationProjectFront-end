import React from "react";
import './Banner.css';

function Banner() {
    return (
        <> 
            <main id="banner">
                <section id="banner_txt">
                    <h1>Quem tem fome </h1>
                    <h1>tem <span id='span-borda'>pressa.</span> </h1>
                    <section id="banner_txt_conteudo">
                        <p>Fome extrema atinge quase 200 milhões de pessoas no mundo</p>
                        <p>Conectamos empresas que querem doar rapidamente alimentos a ONGs que distribuem refeições a quem mais precisa</p>
                    </section>
                </section>
                <section id="banner_btn">
                    <a href="">DOAQUI!</a>
                </section>
            </main>
        </>
    );
}

export default Banner;