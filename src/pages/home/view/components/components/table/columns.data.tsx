import { type ColumnDef } from '@tanstack/react-table';
import SvgPlay from '../../../../../../common/view/components/icons/Play';
import { HomeDataTableUIPersenter } from '../../../presenters/interfaces';

export const columns: ColumnDef<HomeDataTableUIPersenter>[] = [
  {
    accessorKey: 'id',
    header: () => <div className="w-auto text-left">#</div>,
    cell: () => <SvgPlay />,
  },
  {
    accessorKey: 'name',
    header: () => <div className="w-auto  text-left">Name</div>,
    cell: ({ row }) => <div className="w-auto">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'description',
    header: () => <div className="w-auto text-right">Description</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('description'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="w-auto  text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: 'Released',
    header: () => <div className="w-auto text-left">Released</div>,
    cell: () => <div className="w-auto  text-left">an hour ago</div>,
  },
];
