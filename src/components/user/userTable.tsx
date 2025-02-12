"use client";

import React, { useState, useEffect } from "react";
import { usersQuery, UsersAdapter } from "@/adapters";
import type { IUser, IUsers } from "@/lib/types/user";
import {
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import {
  type ColumnDef,
  type ColumnFiltersState,
  createColumnHelper,
  type FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { type RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { DisplayErrorMessage } from "@/utils/displayErrorMessage";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export default function UserTable() {
  const router = useRouter();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const {
    data: users,
    isError,
    isLoading,
    errorMessage,
    refetch,
  } = usersQuery<IUsers>(UsersAdapter.getAllUsers, ["allUsers"], "");

  console.log(users);

  const columnHelper = createColumnHelper<IUser>();

  const columns = React.useMemo<ColumnDef<IUser, any>[]>(
    () => [
      {
        header: "Serial Number",
        cell: (info) => info.row.index + 1,
        filterFn: "equalsString",
      },
      columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
        id: "Full Name",
        filterFn: "includesString",
      }),
      columnHelper.accessor("userImage", {
        cell: (info) => (
          <img
            src={info?.getValue() || "/placeholder.svg"}
            alt="User Profile picture"
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "User Image",
      }),
      columnHelper.accessor("country", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Location",
      }),
      columnHelper.accessor("createdAt", {
        cell: (info) => (
          <span>{new Date(info.getValue()).toLocaleDateString()}</span>
        ),
        header: "Date Joined",
      }),
      columnHelper.accessor("savedTripsCount", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Saved Trips",
      }),
    ],
    [columnHelper] // Added columnHelper to dependencies
  );

  const table = useReactTable({
    data: users?.data || [],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "fuzzy",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  if (isLoading) {
    return (
      <div className="space-y-2">
        <div className="w-full flex items-center justify-between gap-1 pl-2 pr-5 mb-6">
          <div>
            <Skeleton className="h-20 w-[200px]" />
          </div>
          <Skeleton className="h-20 w-[300px]" />
        </div>
        <Skeleton className="h-[70vh] w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <DisplayErrorMessage
        message={errorMessage || "An error occured while fetching events."}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="p-2">
      <div className="w-full flex items-center justify-between gap-1 pl-2 pr-5 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-theme">All Users</h1>
        </div>
        <div className="p-2 px-4 font-lg shadow border border-block flex items-center gap-x-3 rounded-sm">
          <MagnifyingGlassIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="focus:outline-none"
            placeholder="Search all columns..."
          />
        </div>
      </div>
      <div className="h-2 w-full" />

      <table className="w-full text-left">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="capitalize pl-2 py-3 bg-gray-200"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none flex items-center gap-x-3 hover:underline"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ArrowUpIcon fill="#2F4F4F" />,
                        desc: <ArrowDownIcon fill="#2F4F4F" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              onClick={() => router.push(`/user/${row.original.id}`)}
              key={row.id}
              className="border-b cursor-pointer hover:bg-gray-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3.5 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-end mt-4 gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-transparent"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
