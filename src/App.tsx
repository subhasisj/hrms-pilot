import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Dashboard from '@/pages/Dashboard';
import RequisitionList from '@/pages/RequisitionList';
import RequisitionForm from '@/pages/RequisitionForm';
import Layout from '@/components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/requisitions" element={<RequisitionList />} />
            <Route path="/requisitions/new" element={<RequisitionForm />} />
            <Route path="/requisitions/:id" element={<RequisitionForm />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;