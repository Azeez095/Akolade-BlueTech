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
          
          <p>{row.id}</p>
        </div>
      ),
    },
    {
      accessorKey: 'image',
      header: 'Image',
      key: 'image',
    },
    {
      accessorKey: 'sku',
      header: 'SKU',
      key: 'sku',
    },
    {
      accessorKey: 'name',
      header: 'Name',
      key: 'name',
    },
    {
      accessorKey: 'title',
      header: 'Title',
      key: 'title',
    },
    {
      accessorKey: 'description',
      header: 'Description',
      key: 'description',
    },
    {
      accessorKey: 'brand',
      header: 'Brand',
      key: 'brand',
    },
    {
      accessorKey: 'price',
      header: 'Cost Price',
      key: 'price',
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      key: 'quantity',
    },
  ];
  