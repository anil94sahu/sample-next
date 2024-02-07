'use client'
import { useAppSelector } from "@/src/redux/store";

const Dashboard = () => {
  const dashboardState = useAppSelector((state) => state.dashboard);
  console.log(dashboardState);

  return (
    <div className="w-5/5 h-3/5 mt-20 flex justify-center items-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only"> Edit </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dashboardState &&
              dashboardState.map((ele) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ele.productName}
                  </th>
                  <td class="px-6 py-4">{ele.color}</td>
                  <td class="px-6 py-4">{ele.category}</td>
                  <td class="px-6 py-4">{ele.price}</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {" "}
                      Edit{" "}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
