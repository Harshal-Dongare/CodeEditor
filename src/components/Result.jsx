import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { Box, styled } from "@mui/material";
const Result = () => {
    const [src, setSrc] = useState("");
    const { html, css, js } = useContext(DataContext);

    const sourceCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

    const Container = styled(Box)`
        height: 41vh;
    `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(sourceCode);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                frameBorder={0}
                width={"100%"}
                height={"100%"}
            />
        </Container>
    );
};

export default Result;
