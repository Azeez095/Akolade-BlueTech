import React, { useMemo } from 'react';
import {
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
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  // Get current page data
  const currentPageData = useMemo(() => {
    const startIndex = table.getState().pagination.pageIndex * table.getState().pagination.pageSize;
    const endIndex = startIndex + table.getState().pagination.pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, table.getState().pagination.pageIndex, table.getState().pagination.pageSize]);

  return (
    <div className={cn('bg-table rounded-lg', className)}>
      <div>
        <Table>
          <TableHeader className="overflow-hidden whitespace-nowrap text-ellipsis">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className={cn(headerClassName, 'bg-[#F0F4FE] mb-10')}>
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
          <TableBody className='bg-white mt-6'>
            {currentPageData?.length ? (
              currentPageData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  data-state={row.getIsSelected && 'selected'}
                  onClick={() => (handleClickRow ? handleClickRow(row) : null)}
                  className={handleClickRow && 'cursor-pointer'}
                >
                  {table.getRowModel().rows[rowIndex].getVisibleCells().map((cell) => (
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
        {/* Pagination Controls */}
        <div className="flex items-center justify-between p-4">
          <button
            className="px-4 py-2 text-sm bg-gray-300 rounded"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <span className="text-sm">
            Page{' '}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            className="px-4 py-2 text-sm bg-gray-300 rounded"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
