import {
  // Table able,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

import { cn } from '../utils';

const DataTable = ({
  columns,
  data,
  className,
  handleClickRow,
  headerClassName,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualGlobalFilter: true,
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={cn('bg-table rounded-lg', className)}>
      <div>
        <Table>
          <TableHeader className="overflow-hidden whitespace-nowrap text-ellipsis">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className={cn(headerClassName, 'bg-[#F0F4FE]')}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => (handleClickRow ? handleClickRow(row) : null)}
                  className={handleClickRow && 'cursor-pointer'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="capitalize">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns?.length}
                  className="h-24 text-center"
                >
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  );
};

export default DataTable;
