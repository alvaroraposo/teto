import React from 'react';
import './style/style.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {theme, avatarStyle, bubbleOptionStyle, bubbleStyle, rootStyle, contentStyle, footerStyle, inputStyle, submitButtonStyle} from './style/theme'
import imageBot from '../../src/skycoders.png'

export default function Skybot({changeSite}) {
    const steps=[
        {
          id: '1',
          message: 'Essa é a página do TETO! Aqui você obterá maiores informações sobre essa importante iniciativa. Posso ser seu guia, gostaria de alguma informação?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 1, label: 'O que é o TETO?', trigger: () => { changeSite("https://www.techo.org/brasil/teto/"); return '4' }},
            { value: 2, label: 'Como ajudar?', trigger: '3' },
            { value: 3, label: 'Transparência', trigger: () => { changeSite("https://www.techo.org/brasil/#rendicion"); return '11'}},
            { value: 4, label: 'Parceiros', trigger: () => { changeSite("https://www.techo.org/brasil/#aliados"); return '12'}}
          ],
        },
        {
            id: '3',
            options: [
                { value: 1, label: 'Sou pessoa-física e quero ajudar', trigger: () => { changeSite("https://www.techo.org/brasil/#comoparticipar"); return '10' }},
                { value: 2, label: 'Sou pessoa-jurídica e quero ajudar', trigger: () => { changeSite("https://www.techo.org/brasil/doar/#rse"); return '9'} },
            ],
        },
        {
          id: '4',
          message: 'Aqui você encontrará informações gerais sobre essa importante iniciativa que faz a diferença na vida de milhares de pessoas.',
          trigger: '5',
        },
        {
            id: '5',
            message: 'Outras informações?',
            trigger: '6',
        },
        {
            id: '6',
            options: [
                { value: 1, label: 'Sim! Quero outras informações.', trigger: '7'},
                { value: 2, label: 'Estou satisfeito.', trigger: '8' },
            ],
        },
        {
            id: '7',
            message: 'Em que mais posso ajudar?',
            trigger: '2',
        },
        {
          id: '8',
          message: 'Os Skycoders agradecem sua atenção e sua consciência social! Se possível divulgue a iniciativa em suas redes sociais. Volte sempre! :)',
          end: true,
        },
        {
            id: '9',
            message: 'Aqui você descobre como tornar sua empresa Amiga do TETO!',
            trigger: '5'
        },
        {
            id: '10',
            message: 'Aqui você pode ajudar o TETO com doações pontuais, mensais, ou ainda, botar a mão na massa junto conosco!',
            trigger: '5'
        },
        {
            id: '11',
            message: 'Transparência é coisa séria. Aqui prestamos contas de todo o valor arrecadado, pode conferir :)',
            trigger: '5'
        },
        {
            id: '12',
            message: 'Credibilidade é algo construído com muito trabalho. Aqui você encontra as empresas que acreditam em uma sociedade mais justa.',
            trigger: '5'
        }
      ]

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                className='chat-container'
                headerTitle="Seja bem-vindo"
                avatarStyle={avatarStyle}
                floating={true}
                floatingIcon={imageBot}
                placeholder="Digite uma mensagem"
                recognitionEnable={true}
                recognitionLang="pt-br"
                recognitionPlaceholder="Estou ouvindo ..."
                botAvatar={imageBot}
                hideUserAvatar={true}
                bubbleOptionStyle={bubbleOptionStyle}
                bubbleStyle={bubbleStyle}
                contentStyle={contentStyle}
                footerStyle={footerStyle}
                inputStyle={inputStyle}
                enableSmoothScroll={true}
                submitButtonStyle={submitButtonStyle}
                enableMobileAutoFocus={true}
                style={rootStyle}
                steps={steps}
            />                
        </ThemeProvider>
    )
}