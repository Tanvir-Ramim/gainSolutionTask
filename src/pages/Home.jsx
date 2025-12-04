import Navbar from "../shared/components/Navbar";

import Table from "../shared/components/Table";
import TableTitle from "../shared/components/TableTitle";

const Home = () => {
  return (
    <div className="@container   w-full">
      <Navbar></Navbar>
      <div className="  lg:px-9 md:px-6 xs:px-3 px-3   md:mt-[34px] sm:mt-8 mt-6  ">
        <div className="max-w-[1900px]  mx-auto">
          {/* table title */}
          <TableTitle></TableTitle>

          {/* table  */}
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
