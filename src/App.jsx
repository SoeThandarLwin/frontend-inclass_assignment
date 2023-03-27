import Appbar from "./components/Appbar"
import Content from "./components/Content";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Container from "@mui/material/Container";
function App() {
  
  return (
    <div className='App'>
      <div>
        <Appbar />
        <Container>
          <Content />
        </Container>
        {/* <Sidebar /> */}
        {/* <Rightbar /> */}
      </div>
    </div>
  )
}

export default App;
