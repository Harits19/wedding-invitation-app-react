import { Table } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  items: {
    header: string;
    className?: string;
    value: ReactNode;
  }[][];
}

export default function MyTable({ items }: Props) {
  const defaultTableColumn = `border  text-left p-2 `;
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {items[0]?.map((item, index) => (
            <Table.Th key={index}>{item.header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((value, idx1) => (
          <Table.Tr key={idx1}>
            {value?.map((item, idx2) => {
              return <Table.Td key={idx2}>{item.value}</Table.Td>;
            })}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
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
