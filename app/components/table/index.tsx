import { ReactNode } from "react";

interface Props {
  items: {
    header: string;
    className?: string;
    value: ReactNode;
  }[][];
}

export default function Table({ items }: Props) {
  const defaultTableColumn = `border  text-left p-2 `;
  return (
    <table className=" rounded-xl border">
      <thead>
        <tr className="border" key={"header row"}>
          {items[0]?.map((item, index) => (
            <th
              className={`${defaultTableColumn} ${item.className}`}
              key={"index"}
            >
              {item.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((value, idx1) => (
          <tr className="border" key={idx1}>
            {value?.map((item, idx2) => {
              return (
                <td
                  className={`${defaultTableColumn} ${item.className}`}
                  key={idx2}
                >
                  {item.value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
