import React from "react";
import { MdAccessTime } from "react-icons/md";

const Loading = () => {
  return (
    <table border="0" cellPadding="0" cellSpacing="0" align="center">
      <tbody>
        <tr>
          <td align="center">
            <MdAccessTime />
            &nbsp;Loading...
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Loading;
