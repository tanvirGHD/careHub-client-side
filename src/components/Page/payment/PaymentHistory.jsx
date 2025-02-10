
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [payment, setPayment] = useState([]);
  const [filteredPayment, setFilteredPayment] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    axiosSecure("/payments")
      .then((response) => {
        setPayment(response.data);
        setFilteredPayment(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = payment.filter((item) =>
      item.charityName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPayment(filtered);
  }, [searchTerm, payment]);

  const handleSort = () => {
    const sorted = [...filteredPayment].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setFilteredPayment(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen w-5/5 mx-auto shadow-md border-2 border-[#336699]">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#214970] mb-6">
        Payment History
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by Charity Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1d657a] w-full sm:w-64"
        />
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-[#1d657a] text-white rounded cursor-pointer transition duration-200 w-full sm:w-auto"
        >
          Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Table Wrapper for Responsive Scroll */}
      <div className="overflow-x-auto">
        <div className="w-full min-w-max">
          <table className="w-full min-w-[800px] md:min-w-[1000px] bg-white border border-gray-200 rounded-lg shadow-md text-xs sm:text-sm lg:text-base stacked-table">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase">
                  Charity Name
                </th>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase">
                  Email
                </th>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase hidden-mobile">
                  Transaction ID
                </th>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase">
                  Price
                </th>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase">
                  Date
                </th>
                <th className="py-2 px-3 text-left font-semibold text-[#336699] uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayment.length > 0 ? (
                filteredPayment.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td
                      className="py-2 px-3 text-gray-700"
                      data-label="Charity Name"
                    >
                      {item.charityName}
                    </td>
                    <td className="py-2 px-3 text-gray-700" data-label="Email">
                      {item.email}
                    </td>
                    <td
                      className="py-2 px-3 text-gray-700 hidden-mobile"
                      data-label="Transaction ID"
                    >
                      {item.transactionId}
                    </td>
                    <td
                      className="py-2 px-3 text-green-600 font-medium"
                      data-label="Price"
                    >
                      ${item.price}
                    </td>
                    <td className="py-2 px-3 text-gray-700" data-label="Date">
                      {item.date}
                    </td>
                    <td className="py-2 px-3 font-medium" data-label="Status">
                      <span
                        className={`px-2 py-1 rounded ${
                          item.status === "success"
                            ? "bg-green-200 text-green-700"
                            : "bg-red-200 text-red-700"
                        }`}
                      >
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;