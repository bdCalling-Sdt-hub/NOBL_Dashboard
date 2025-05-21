import UserModal from "../component/Users/UserModal";
import UserTable from "../component/Users/UserTable";
import { useState } from "react";

function Users() {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className=" flex justify-between items-center mt-5 mb-[43px]">
        <div className="flex justify-center">
          <input
            type="search"
            className="w-[534px] p-4 border border-[#D9D9D9]"
            placeholder="Search for user"
            name=""
            id=""
            value={search}
            onChange={handleSearch}
          />
          <button className="bg-[#4b5320] p-[18px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_972_369)">
                <path
                  d="M13.2125 12.3535L9.15469 8.2957C9.78438 7.48164 10.125 6.48633 10.125 5.43945C10.125 4.18633 9.63594 3.01133 8.75156 2.12539C7.86719 1.23945 6.68906 0.751953 5.4375 0.751953C4.18594 0.751953 3.00781 1.24102 2.12344 2.12539C1.2375 3.00977 0.75 4.18633 0.75 5.43945C0.75 6.69102 1.23906 7.86914 2.12344 8.75352C3.00781 9.63945 4.18438 10.127 5.4375 10.127C6.48438 10.127 7.47813 9.78633 8.29219 9.1582L12.35 13.2145C12.3619 13.2264 12.376 13.2358 12.3916 13.2422C12.4071 13.2487 12.4238 13.252 12.4406 13.252C12.4575 13.252 12.4741 13.2487 12.4897 13.2422C12.5052 13.2358 12.5194 13.2264 12.5312 13.2145L13.2125 12.5348C13.2244 12.5229 13.2338 12.5087 13.2403 12.4932C13.2467 12.4776 13.2501 12.461 13.2501 12.4441C13.2501 12.4273 13.2467 12.4106 13.2403 12.3951C13.2338 12.3795 13.2244 12.3654 13.2125 12.3535ZM7.9125 7.91445C7.25 8.57539 6.37187 8.93945 5.4375 8.93945C4.50312 8.93945 3.625 8.57539 2.9625 7.91445C2.30156 7.25195 1.9375 6.37383 1.9375 5.43945C1.9375 4.50508 2.30156 3.62539 2.9625 2.96445C3.625 2.30352 4.50312 1.93945 5.4375 1.93945C6.37187 1.93945 7.25156 2.30195 7.9125 2.96445C8.57344 3.62695 8.9375 4.50508 8.9375 5.43945C8.9375 6.37383 8.57344 7.25352 7.9125 7.91445Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_972_369">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          {/* Add mamber modul */}
        </div>
        <button
          onClick={showModal}
          className="font-semibold flex items-center gap-6 text-base font-roboto text-white bg-[#4b5320] py-3 px-[63px]"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.07143 11.4286H0.5V8.57143H9.07143V0H11.9286V8.57143H20.5V11.4286H11.9286V20H9.07143V11.4286Z"
              fill="white"
            />
          </svg>
          Add member
        </button>
      </div>
      {/* user modal */}
      <UserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <UserTable search={search} />
    </div>
  );
}

export default Users;
