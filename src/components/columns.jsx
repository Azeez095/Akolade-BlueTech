export const columns = [
    {
      accessorKey: 'select',
      header: ({ table }) => {
        return (
          <div className="flex items-center space-x-2">
            <input
              id="selectAll"
              aria-label="Select all"
              type='checkbox'
              className="translate-y-[2px]"
              // checked={
              //   table.getIsAllPageRowsSelected() ||
              //   (table.getIsSomePageRowsSelected() && 'indeterminate')
              // }
              // onCheckedChange={(value) =>
              //   table.toggleAllPageRowsSelected(!!value)
              // }
            />
            <p>S/N</p>
          </div>
        );
      },
      key: 'select',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <input
            id="selectAll"
            type='checkbox'
            // checked={row.getIsSelected()}
            // onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
          
          <p>{Number(row.id)+1}.</p>
        </div>
      ),
    },
    {
      accessorKey: 'Image_1',
      header: 'Image',
      key: 'Image_1',
      cell: ({ row }) => <img src={row.original.Image_1} className="w-[50px] h-[50px] object-cover" />,
    },
    {
      accessorKey: 'SKU',
      header: 'SKU',
      key: 'SKU',
    },
    {
      accessorKey: 'Name',
      header: 'Name',
      key: 'Name',
      cell: ({ row }) => <p>{row.original.Name || '-'}</p>,
    },
    {
      accessorKey: 'Title',
      header: 'Title',
      key: 'Title',
      cell: ({ row }) => <p>{row.original.Title || '-'}</p>,
    },
    {
      accessorKey: 'Description',
      header: 'Description',
      key: 'Description',
    },
    {
      accessorKey: 'Brand',
      header: 'Brand',
      key: 'Brand',
    },
    {
      accessorKey: 'Cost Price',
      header: 'Cost Price',
      key: 'Cost Price',
    },
    {
      accessorKey: 'Quantity',
      header: 'Quantity',
      key: 'Quantity',
    },
  ];
  