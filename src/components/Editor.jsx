import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";
import { useState } from "react";

const HeaderLogo = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
    color: #fff;
`;

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #aaaebc;
    font-weight: 700;
`;

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    };
    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            {/* Header section of the Editor */}
            <Header>
                {/* Editor Name and Logo */}
                <HeaderLogo>
                    {/* Logo */}
                    <Box
                        component={"span"}
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: "flex",
                            placeContent: "center",
                            borderRadius: 5,
                            paddingTop: 2,
                            marginRight: 5,
                            color: "#000",
                        }}
                    >
                        {icon}
                    </Box>
                    {/* tech name */}
                    {heading}
                </HeaderLogo>

                {/* full-screen icon */}
                <CloseFullscreenIcon
                    style={{ alignSelf: "center" }}
                    fontSize="small"
                    onClick={() => setOpen((prev) => !prev)}
                />
            </Header>

            {/* Coding playground of the editor */}
            <ControlledEditor
                value={value}
                onBeforeChange={handleChange}
                className="controlled-editor"
                options={{
                    theme: "material",
                    lineNumbers: true,
                }}
            />
        </Container>
    );
};

export default Editor;

/*
Box component is a flexible component that serves as a wrapper for other components. By default it uses flexbox under the hood. It offers utility props such as `display`, `flexDirection`, `padding`, `justifyContent` and more.
*/
