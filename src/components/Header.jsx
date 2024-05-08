import { AppBar, Toolbar, styled } from "@mui/material";
import WebsiteProfile from "../assets/website-logo.svg";

// `styled` function used to modify the default appearance of MUI components. In this case we are modifying AppBar MUI component styles.
// `AppBar` component is like a header component usually sits at the top and used for branding, screen titles, navigation, and actions.
// `Toolbar` component acts as a container within AppBar component to arrange and manage header elements.
const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`;

const Header = () => {
    return (
        <Container position="static">
            <Toolbar>
                <img
                    style={{ width: "auto", height: "50%" }}
                    src={WebsiteProfile}
                    alt=""
                />
            </Toolbar>
        </Container>
    );
};

export default Header;

/*
IMP points:
[AppBar]
    1. By default position of AppBar component is `fixed`.
    2. Color set to "primary"
    3. Value of `square` set to `false`, means zero border-radius for Element
*/
