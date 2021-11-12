import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Contato() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const onChangeInput = e => setDataForm( {...dataForm, [e.target.name]: e.target.value});

    const sendContact = async e => {
        e.preventDefault()
        console.log(dataForm.email);
    }


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
            <form onSubmit={sendContact}>
                <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.name}/><br/><br/>
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={onChangeInput} value={dataForm.email}/><br/><br/>

                <input type="text" name="subject" placeholder="Digite o assunto da mensagem" onChange={onChangeInput} value={dataForm.subject}/><br/><br/>
                <input type="text" name="content" placeholder="Digite o conteúdo da mensagem" onChange={onChangeInput} value={dataForm.content}/><br/><br/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contato;