import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <Cta>
          <CtaLogoOne src="/images/cta-logo-one.svg" alt=" " />
          <SignUp>GET IT ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CtaLogoTwo src="/images/cta-logo-two.png" alt="" />
        </Cta>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottam: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  backgroud-position: top;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  width: 100%;
`;

const CtaLogoOne = styled.img`
  width: 100%;

  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  margin-bottom: 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0, 95.3%, 1);
  font-size: 11px;
  line-height: 1.5;
  margin: 0 0 24px;
`;

const CtaLogoTwo = styled.img`
  width: 100%;
  margin-bottom: 20px;
  max-width: 600px;
  
`;
export default Login;
