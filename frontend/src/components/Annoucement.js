import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    width: 100%;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
export default function Annoucement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over ₹50,000
    </Container>
  );
}
