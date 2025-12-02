
import Navbar from "../shared/components/Navbar";

import Table from "../shared/components/Table";
import TableTitle from "../shared/components/TableTitle";



const Home = () => {

  return (
    <div className="@container w-full">
      <Navbar></Navbar>
      <div className="max-w-[1800px]  mt-[34px] lg:px-9 md:px-6 xs:px-3 px-2  mx-auto">
        {/* table title */}
         <TableTitle></TableTitle>
          
          {/* table  */}
         <Table></Table>
 
      </div>
    </div>
  );
};

export default Home;
