import Head from 'next/head';
import Menu from '../components/Menu';

function Contato() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Daniel Oliveira" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Sapup3 - Contato</title>
            </Head>
            <Menu /><br/><br/><br/><br/><br/>
            <form>
                <input type="text" name="name" placeholder="Digite o nome"/><br/><br/>
                <input type="email" name="email" placeholder="Digite o seu e-mail"/><br/><br/>

                <input type="text" name="subject" placeholder="Digite o assunto da mensagem"/><br/><br/>
                <input type="text" name="content" placeholder="Digite o conteúdo da mensagem"/><br/><br/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contato;