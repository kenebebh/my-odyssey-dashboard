"use client";

import React, { useState } from "react";
import { usersQuery, UsersAdapter } from "@/adapters";
import { IUser } from "@/lib/types/user";
import {
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ColumnDef,
  ColumnFiltersState,
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useRouter } from "next/navigation";

// A TanStack fork of Kent C. Dodds' match-sorter library that provides ranking information
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";

declare module "@tanstack/react-table" {
  //add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

// Define a custom fuzzy filter function that will apply ranking info to rows (using match-sorter utils)
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export default function UserTable() {
  const { data: users, isLoading } = usersQuery<IUser[]>(
    UsersAdapter.getAllUsers,
    ["allUsers"],
    ""
  );

  // console.log(users);

  const router = useRouter();

  const columnHelper = createColumnHelper<IUser>();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = React.useMemo<ColumnDef<IUser, any>[]>(
    () => [
      {
        header: "Serial Number",
        cell: (info) => info.row.index + 1, // Use row.index to generate the serial number dynamically
        filterFn: "equalsString", //note: normal non-fuzzy filter column - exact match required
      },
      {
        header: "User Name",
        accessorKey: "username",
        cell: (info) => info.getValue(),
        filterFn: "includesString", //note: normal non-fuzzy filter column
      },
      columnHelper.accessor("userImage", {
        cell: (info) => (
          <img
            src={info?.getValue()}
            alt="User Profile picture"
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "User Image",
      }),
      columnHelper.accessor("location", {
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
    []
  );

  const [data] = React.useState<IUser[]>(users!);

  const table = useReactTable({
    data: users || [],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter, //define as a filter function that can be used in column definitions
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "fuzzy", //apply fuzzy filter to the global filter (most common use case for fuzzy filter)
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  //apply the fuzzy sort if the fullName column is being filtered
  React.useEffect(() => {
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
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="capitalize pl-2 py-3 bg-gray-200"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center gap-x-3 hover:underline"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: (
                              <span className="">
                                <ArrowUpIcon fill="#2F4F4F" />
                              </span>
                            ),
                            desc: (
                              <span className="">
                                <ArrowDownIcon fill="#2F4F4F" />
                              </span>
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => {
            // console.log("Row Details: ", row.original._id);
            return (
              <tr
                onClick={() => router.push(`/user/${row.original._id}`)}
                key={row.id}
                className="border-b cursor-pointer hover:bg-gray-100"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="px-3.5 py-2">
                      {/* <Link href={`/user/${row.original._id}`}> */}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      {/* </Link> */}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* pagination */}
      <div className="flex items-center justify-end mt-4 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        ></button>

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

// A typical debounced input react component
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
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
