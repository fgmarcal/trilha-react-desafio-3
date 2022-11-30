import React from 'react'

import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPermIdentity, MdPhone } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
// import { api } from '../../services/api';
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper, Gotlogin } from './styles';

const Register = () => {

    const navigate = useNavigate()

    const handleClickLogin = () => {
        navigate('/login')
    }

    const { control, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

 
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="Nome completo" leftIcon={<MdPermIdentity />} name="fullName" control={control} />

                        <Input placeholder="Seu melhor @E-mail" leftIcon={<MdEmail />} name="email" control={control}/>

                        <Input type="phone" placeholder="Celular" leftIcon={<MdPhone />} name="celular" control={control}/>
                        
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control}/>
                     
                        <Button title="Registrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <Gotlogin onClick={handleClickLogin}>Já possuo Login!</Gotlogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>

    </>)
}

export { Register }