import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
    margin: 50px 0 0;
    width: 100%;
    box-shadow: 0px -2px 10px rgba(0,0,0,0.2);
`;

const FooterLink = styled.a`
    color: #dffb61;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    &:hover {
        color: #dffb61;
        text-decoration: underline;
    }
`;

const Footer = () => {

    return (
        <StyledFooter>
            <p>
                © 2023 by My Company. All rights reserved.
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
            </p>
        </StyledFooter>
    );
}

export default Footer;
