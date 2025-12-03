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
      {/* Title */}
      <div className="flex justify-between ">
        <h2 className="md:text-2xl xs:text-lg font-semibold text-[#464255] mb-6">
          Employee Information
        </h2>
        <h1 onClick={() => setIsModalOpen(false)} className="cursor-pointer">
          <IconSvg name={"crossModal"} />
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-end md:gap-18 ">
        <div>
          {/* Employee ID */}
          <div className="mb-5 max-w-[158px]">
            <label className="block text-sm  mb-1">Employee ID</label>
            <input
              type="text"
              defaultValue="#1250"
              className="w-40 border border-gray-300  rounded-md px-3 py-2 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Employee Name */}
          <div className="mb-8 max-w-[441px]">
            <label className="block text-sm  mb-1">Type Employee Name*</label>
            <input
              type="text"
              defaultValue="Sadik Hasan"
              className="w-full border  border-gray-300 rounded-md px-3 py-2  focus:outline-none"
            />
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-1  @min-[380px]:grid-cols-2  gap-8 mb-10">
            {/* Department */}
            <div>
              <label className="block text-sm mb-1">Select Department*</label>

              <div className="flex max-w-[181px]  items-center gap-3">
                <div className="flex-1">
                  <CustomDropdown
                    placeholder="Department"
                    data={tableSearchDepartmentData}
                  ></CustomDropdown>
                </div>
              </div>
            </div>

            {/* Project */}
            <div>
              <label className="block text-sm  mb-1">Select Project</label>

              <div className="flex items-center  max-w-[181px] gap-3">
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
            <div className="max-w-[130px]">
              <label className="block text-sm  mb-1">Select Start Time*</label>

              <div className="flex   items-center gap-3">
                <input
                  type="text"
                  defaultValue="10:15 am"
                  className="flex-1 border border-gray-300   max-w-[120px] rounded-md px-3 py-2 text-gray-700 focus:outline-none"
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
                  className="flex-1 border max-w-[120px] border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none"
                />
                <button className="border border-primary rounded-lg px-[7px]  pt-1.5">
                  <IconSvg name={"plusIcon"} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
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
