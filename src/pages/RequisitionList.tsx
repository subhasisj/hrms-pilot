import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { requisitionApi } from '@/lib/api';

export default function RequisitionList() {
  const { data: requisitions, isLoading } = useQuery({
    queryKey: ['requisitions'],
    queryFn: requisitionApi.getAll,
  });

  const getStatusColor = (status: string) => {
    const colors = {
      Draft: 'bg-gray-500',
      Open: 'bg-green-500',
      'In Progress': 'bg-blue-500',
      'On Hold': 'bg-yellow-500',
      Closed: 'bg-red-500',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Requisitions</h1>
        <Button asChild>
          <Link to="/requisitions/new">
            <Plus className="mr-2 h-4 w-4" /> New Requisition
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requisitions?.map((req: any) => (
              <TableRow key={req._id}>
                <TableCell>
                  <Link
                    to={`/requisitions/${req._id}`}
                    className="font-medium hover:underline"
                  >
                    {req.title}
                  </Link>
                </TableCell>
                <TableCell>{req.department}</TableCell>
                <TableCell>{req.location}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(req.status)}
                  >
                    {req.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{req.priority}</Badge>
                </TableCell>
                <TableCell>
                  {new Date(req.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}