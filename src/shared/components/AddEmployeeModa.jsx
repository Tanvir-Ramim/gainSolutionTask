import IconSvg from "../utils/IconSvg";
import {
  projectSelect,
  tableSearchDepartmentData,
} from "../constants/AllDropDownData";
import MainButton from "../utils/MainButton";
import CustomDropdown from "./CustomDropdown";

const AddEmployeeModa = ({ setIsModalOpen }) => {
  return (
    <div className="w-full    mx-auto bg-white  py-4  md:px-6 sm:px-4 px-3 rounded-lg">
 
      <div className="flex justify-between ">
        <h2 className="md:text-2xl  font-semibold text-[#464255] @min-[380px]:mb-6 mb-3">
          Employee Information
        </h2>
        <h1 onClick={() => setIsModalOpen(false)} className="cursor-pointer">
          <IconSvg name={"crossModal"}  size={14}/>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-end md:gap-18 ">
        <div>
       
          <div className="@min-[380px]:mb-5 mb-3 @min-[380px]:max-w-[158px] w-full ">
            <label className="block text-sm  mb-1">Employee ID</label>
            <input
              type="text"
              defaultValue="#1250"
              className="@min-[380px]:w-40 w-full border border-gray-300  rounded-md px-3 py-2 text-gray-700 focus:outline-none"
            />
          </div>
          <div className="@min-[380px]:mb-8 mb-3 max-w-[441px]">
            <label className="block text-sm  mb-1">Type Employee Name*</label>
            <input
              type="text"
              defaultValue="Sadik Hasan"
              className="w-full border  border-gray-300 rounded-md px-3 py-2  focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1  @min-[380px]:grid-cols-2  @min-[380px]:gap-8 gap-3 @min-[380px]:mb-10 mb-3">
         
            <div>
              <label className="block text-sm mb-1">Select Department*</label>

              <div className="flex @min-[380px]:max-w-[181px]  items-center gap-3">
                <div className="flex-1">
                  <CustomDropdown
                    placeholder="Department"
                    data={tableSearchDepartmentData}
                  ></CustomDropdown>
                </div>
              </div>
            </div>

           
            <div>
              <label className="block text-sm  mb-1">Select Project</label>

              <div className="flex items-center  @min-[380px]:max-w-[181px] gap-3">
                <div className="flex-1">
                  <CustomDropdown
                    placeholder="Project"
                    data={projectSelect}
                  ></CustomDropdown>
                </div>
                {/* <select className="flex-1 w-fit border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none">
                  <option hidden selected>
                    {" "}
                    Project
                  </option>
                  {projectSelect?.map((project) => (
                    <option key={project.id}>{project.name}</option>
                  ))}
                </select> */}
              </div>
            </div>

            {/* Start Time */}
            <div className="@min-[380px]:max-w-[130px]">
              <label className="block text-sm  mb-1">Select Start Time*</label>

              <div className="flex   items-center gap-3">
                <input
                  type="text"
                  defaultValue="10:15 am"
                  className="flex-1 border border-gray-300   @min-[380px]:max-w-[120px] rounded-md px-3 py-2 text-gray-700 focus:outline-none"
                />
                <button className="border border-primary rounded-lg px-[7px]  pt-1.5">
                  <IconSvg name={"plusIcon"} />
                </button>
              </div>
            </div>

            {/* End Time */}
            <div className="">
              <label className="block text-sm  mb-1">Select End Time</label>

              <div className="flex items-center  gap-3">
                <input
                  type="text"
                  defaultValue="08:15 pm"
                  className="flex-1 border @min-[380px]:max-w-[120px] border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none"
                />
                <button className="border border-primary rounded-lg px-[7px]  pt-1.5">
                  <IconSvg name={"plusIcon"} />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div
          onClick={() => setIsModalOpen(false)}
          className="flex justify-end items-center gap-6 mt-4"
        >
          <button className="text-gray-600 cursor-pointer">Cancel</button>

          <MainButton className="bg-primary cursor-pointer text-white  ">
            Add Employee
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModa;
