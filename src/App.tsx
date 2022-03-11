import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
* {
  font-family: 'Smooch Sans', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
body {
  line-height: 1.2;
  font-weight: inherit;
  line-height: 1;
  box-sizing: border-box;
  background: linear-gradient(135deg, #e09, #d0e);}
  
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
`;
const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 400px;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  width: 50vw;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Content = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 375px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Switch = styled(motion.button)`
  position: absolute;
  width: 70px;
  height: 40px;
  top: 600px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06), 0 10px 20px rgba(0, 0, 0, 0.06);
  color: rgb(9, 132, 227);
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const OverLayVars = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 0.5 } },
  leave: { opacity: 0 },
};

const contentVars = {
  hover: { scale: 1.05 },
};
function App() {
  const [clicked, setClicked] = useState(false);
  const [switched, setSwitch] = useState(false);
  const [curItem, setCurItem] = useState<string | null>(null);
  const onSwitch = () => setSwitch((prev) => !prev);
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Box>
          <Content
            variants={contentVars}
            whileHover="hover"
            onClick={() => {
              setCurItem("item1");
              setClicked((prev) => !prev);
            }}
            key="item1"
            layoutId="item1"
          ></Content>
          <AnimatePresence>
            <Content
              variants={contentVars}
              initial="start"
              whileHover="hover"
              onClick={() => {
                setCurItem("item2");
                setClicked((prev) => !prev);
              }}
              key="item2"
              layoutId="item2"
            >
              {!switched ? <Circle layoutId="circle"></Circle> : null}
            </Content>
            <Content
              variants={contentVars}
              whileHover="hover"
              onClick={() => {
                setCurItem("item3");
                setClicked((prev) => !prev);
              }}
              key="item3"
              layoutId="item3"
            >
              {switched ? <Circle layoutId="circle"></Circle> : null}
            </Content>
          </AnimatePresence>
          <Content
            variants={contentVars}
            whileHover="hover"
            onClick={() => {
              setCurItem("item4");
              setClicked((prev) => !prev);
            }}
            key="item4"
            layoutId="item4"
          ></Content>
        </Box>
        <Switch
          whileHover={{ color: "rgb(225, 112, 85)", scale: 1.1 }}
          animate={{ type: "spring" }}
          transition={{ duration: 0.4 }}
          onClick={onSwitch}
        >
          Switch
        </Switch>
        <AnimatePresence>
          {clicked && curItem === "item1" ? (
            <OverLay
              variants={OverLayVars}
              initial="start"
              animate="end"
              exit="leave"
              onClick={() => {
                setCurItem(null);
                setClicked((prev) => !prev);
              }}
            >
              <Box
                layoutId="item1"
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              ></Box>
            </OverLay>
          ) : clicked && curItem === "item2" ? (
            <OverLay
              variants={OverLayVars}
              initial="start"
              animate="end"
              exit="leave"
              onClick={() => {
                setCurItem(null);
                setClicked((prev) => !prev);
              }}
            >
              <Box
                layoutId="item2"
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              ></Box>
            </OverLay>
          ) : clicked && curItem === "item3" ? (
            <OverLay
              variants={OverLayVars}
              initial="start"
              animate="end"
              exit="leave"
              onClick={() => {
                setCurItem(null);
                setClicked((prev) => !prev);
              }}
            >
              <Box
                layoutId="item3"
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              ></Box>
            </OverLay>
          ) : clicked && curItem === "item4" ? (
            <OverLay
              variants={OverLayVars}
              initial="start"
              animate="end"
              exit="leave"
              onClick={() => {
                setCurItem(null);
                setClicked((prev) => !prev);
              }}
            >
              <Box
                layoutId="item4"
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              ></Box>
            </OverLay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
