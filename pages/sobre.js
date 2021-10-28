import Head from 'next/head';
import Menu from '../components/Menu';

function Sobre() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Daniel Oliveira" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Sapup3 - Home</title>
            </Head>
            <Menu /><br/>
            Conteúdo do topo do site!
        </div>
    )
}

export default Sobre;