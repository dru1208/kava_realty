import { useState } from "react";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3em;
`

const Left = styled.div``

const Right = styled.div`
  display: flex;
  flex-direction: row;
`

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Left>Austin Ma Real Estate</Left>
      <Right>
        <button onClick={() => setIsModalOpen(true)}>Open Form</button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Right>
    </HeaderContainer>
  )
}

export default Header;