import Markdown from "./lib/Markdown";

function App() {
  return (
    <>
      <Markdown>
        {`
# Hello, world!


[google](https://google.com)
`}
      </Markdown>
    </>
  );
}

export default App;
