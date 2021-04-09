



export const Cleaner = () => {


  return (
    <>
    
    <div className="myTable">
      <table style={{ width: "100%" }}>
        <caption>Cleaner</caption>
        <tbody>
          <tr className="border_bottom">
            <th>All Rooms</th>
            <th>Cleaned Rooms</th>
            <th>Uncleaned Rooms</th>
          </tr>
          <tr>
            <td>Single room</td>
            <td>10</td>
            <td>22</td>
          </tr>
          <tr>
            <td>King size</td>
            <td>15</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <button
          type="button"
          className="forwardButton2 clean-room"
          disabled={false}
          //onClick={() => {setCurrentPage(6)}}
        >
          <b>
            <b>Clean a room</b>
          </b>
        </button>
    </div>

  </>
  );
};

export default Cleaner;