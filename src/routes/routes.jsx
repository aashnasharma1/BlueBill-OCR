import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from '../components/dashboard/Main';
import Invoice from '../components/invoices/invoice';
import AppLayout from '../components/layout/appLayout';
import Ledgers from '../components/tally/ledgers/ledgers';
import VendorZoho from '../components/zoho/VendorZoho';
import ExpenseZoho from '../components/zoho/ExpenseZoho';
import Drafts from '../components/zoho/Tabs/Drafts';
import Analyzed from '../components/zoho/Tabs/Analyzed.jsx';
import Synced from '../components/zoho/Tabs/Synced';
import VendorTally from '../components/tally/VendorTally';
import ExpenseTally from '../components/tally/ExpenseTally';
import Credentials from '../components/zoho/settingsTab/Credentials';
import Vendor from '../components/zoho/settingsTab/Vendor';
import Coa from '@/components/zoho/settingsTab/Coa';
import TdsTcs from '@/components/zoho/settingsTab/TdsTcs';
import Taxes from '@/components/zoho/settingsTab/Taxes';
import Workspace from '@/components/dashboard/Workspace';
import AllInvoices from '@/components/dashboard/AllInvoices';
import Details from '@/components/dashboard/Details';

const childRoutes = [
  { index: true, element: <Navigate to="analyzed" replace /> },
  { path: 'drafts', element: <Drafts /> },
  { path: 'analyzed', element: <Analyzed /> },
  { path: 'synced', element: <Synced /> },
];

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/workspace', element: <Workspace /> },
      { path: '/all-invoices', element: <AllInvoices /> },
      { path: '/details', element: <Details /> },
      { path: '/zoho/vendor', element: <VendorZoho />, children: childRoutes },
      { path: '/zoho/expense', element: <ExpenseZoho />, children: childRoutes },
      { path: '/tally/vendor', element: <VendorTally />, children: childRoutes },
      { path: '/tally/expense', element: <ExpenseTally />, children: childRoutes },
      { path: '/zoho/settings/credentials', element: <Credentials /> },
      { path: '/zoho/settings/vendor', element: <Vendor /> },
      { path: '/zoho/settings/coa', element: <Coa /> },
      { path: '/zoho/settings/tds-tcs', element: <TdsTcs /> },
      { path: '/zoho/settings/taxes', element: <Taxes /> },
      { path: '/allInvoices', element: <Invoice /> },
      { path: '/tally/settings/ledgers', element: <Ledgers /> },
    ],
  },
];
