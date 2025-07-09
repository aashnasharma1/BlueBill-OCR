import { InboxStackIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import TabLayout from '../layout/TabLayout'

const tabs = [
  { name: 'Drafts', href: '/zoho/expense/drafts', icon: InboxStackIcon },
  { name: 'Analyzed', href: '/zoho/expense/analyzed', icon: ChartBarIcon },
  { name: 'Synced', href: '/zoho/expense/synced', icon: CheckCircleIcon },
]

const ExpenseZoho = () => <TabLayout title="Expense Bills" tabs={tabs} uploadLabel="Upload" />

export default ExpenseZoho
