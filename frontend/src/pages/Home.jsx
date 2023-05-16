import { useEffect, useState } from "react";

// Homepage
const Home = () => {
  // Inits
  const [users, setUser] = useState([]);
  // For fetch all users from database
  const fetchAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/get-users");
      const data = await response.json();
      setUser(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // JSX
  return (
    <div className="flex flex-col max-w-full">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {users.length > 0 ? (
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      UserName
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone No
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((singleUser, index) => {
                    return (
                      <tr
                        className="border-b transition duration-300 ease-in-out  border-neutral-500 hover:bg-neutral-600 hover:text-white"
                        key={index}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {singleUser.userName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {singleUser.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {singleUser.contactNo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p>No Users Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
