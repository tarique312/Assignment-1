import { MdSettings, MdFastfood, MdMenuBook } from "react-icons/md";

const ActivityTable = () => {
  return (
    <div className="card sec-card">
      <table className="table table-dark text-center">
        <thead>
          <tr className="text-light">
            <th>Icon</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-light">
            <td>
              <MdSettings />
            </td>
            <td>Orders</td>
          </tr>
          <tr className="text-light">
            <td>
              <MdFastfood />
            </td>
            <td>Popular Dishes</td>
          </tr>
          <tr className="text-light">
            <td>
              <MdMenuBook />
            </td>
            <td>Menus</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
