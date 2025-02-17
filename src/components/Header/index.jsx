import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { useNavigate  } from "react-router-dom";
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {

  const navigate = useNavigate()
  const handleClickRegister = () => {
    navigate('/register')
}

  const handleClickSignIn = () => {
  navigate('/login')
}

  return (
    <Wrapper>
      <Container>
          <Row>
            <img href="/" src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button onClick={handleClickSignIn} title="Entrar" />
                <Button onClick={handleClickRegister} title="Cadastrar" />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
