import "./styles/index.css";
import "./styles/Reset.css";
import { withProviders } from "./providers";
import Routing from "./../pages/index";

function Index() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(Index);
