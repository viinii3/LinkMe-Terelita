import './LinkMeTerelita.css'
import logo from './logo2.png'
import cafe from './cafe.png'

function LinkMeTerelita(){
    return(
        <div className="containerMaster">
            <div class="container">
                <section class="header">
                    <div class="info">
                        <img src={logo} alt='logo'></img>
                    </div>
                    <div class="paragrafo">
                        <p>
                            Somos a TERELITA CAFÉ, uma empresa especializada em cafés especiais.
                        </p>
                    </div>
                </section>
                <section class="btns">
                <div class="contato-btn">
                        <p><span className='color1'>Ped</span><span className='color2'>idos</span> 👇🏼</p>
                        <a href="https://wa.me/5511947079030">
                            <img src={cafe} alt='icone-cafe'></img>
                        </a>
                    </div>
                    <div class="site-btn">
                        <p><span className='color1'>Vem con</span><span className='color2'>ferir nosso </span> site oficial 👇🏼</p>
                        <a href="https://cafeterelita.com.br">
                            <img src={cafe} alt='icone-cafe'></img>
                        </a>
                    </div>
                    <div class="insta-btn">
                        <p><span className='color1'>Vem con</span><span className='color2'>ferir nosso </span>Instagram 👇🏼</p>
                        <a href="https://www.instagram.com/terelitacafe">
                            <img src={cafe} alt='icone-cafe'></img>
                        </a>
                    </div>
                    <div class="face-btn">
                        <p><span className='color1'>Vem con</span><span className='color2'>ferir nosso </span>Facebook👇🏼</p>
                        <a href="https://www.facebook.com/profile.php?id=61552178273850&locale=pt_BR">
                            <img src={cafe} alt='icone-cafe'></img>
                        </a>
                    </div>
                </section>
                <div className="footer">
                    <p>
                        Copyright <span className='color1'>Café</span> <span className='color2'>Terelita</span> - 2021. Todos os direitos reservados.
                    </p>
                    <p>
                        Desenvolvido por : <a href='https://devzoneinnovations.com.br'>DevZone</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LinkMeTerelita