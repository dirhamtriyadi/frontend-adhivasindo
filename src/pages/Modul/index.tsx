// Modul.tsx

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchModul } from "../../features/modulSlice";

const Modul: React.FC = () => {
  const dispatch = useAppDispatch();
  const { modul, isLoading, error, meta } = useAppSelector((state) => state.modul);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchModul(page));
  }, [dispatch, page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-full px-2 space-y-6 flex flex-col rounded-lg">
      <table className="w-full table-auto text-left">
        <thead className="border-b text-white bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">No</th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Judul</th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Isi</th>
          </tr>
        </thead>
        <tbody>
          {modul.map((data, index) => (
            <tr key={data.id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td>{(page - 1) * 10 + (index + 1)}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Previous
        </button>
        <span>Page {page} of {meta.last_page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === meta.last_page}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Modul;
