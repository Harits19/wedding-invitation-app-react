import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import { ReactNode } from "react";

interface TableObject {
  key?: string | number;
  render?: ReactNode;
}

export default function WedTable({
  add,
  items = {},
}: {
  add?: ReactNode;
  items?: {
    [key: string]: {
      title: ReactNode;
      cell: TableObject[];
    };
  };
}) {
  return (
    <div className="m-4">
      {add && add}
      <Table>
        <TableHeader>
          <TableRow>
            {Object.entries(items).map((item) => {
              return <TableHead key={item[0]}>{item[1].title}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(items)
            .at(0)?.[1]
            .cell.map((cell, index) => {
              return (
                <TableRow key={cell.key}>
                  {Object.entries(items).map((item) => {
                    return (
                      <TableCell key={item[0]}>
                        {item[1].cell.at(index)?.render}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
