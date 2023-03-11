import { Link } from "react-router-dom";
import { Sidebar } from "../../shared/Sidebar/Sidebar";

const TestPage = () => {
  return (
   <div style={{display: 'flex'}}>
     <Sidebar/>

     {/*Main content*/}
     <div style={{marginLeft: '284px'}}>
       <Link to="/2">
         <div>Test Page</div>
       </Link>
     </div>
   </div>
  );
};

export default TestPage;
