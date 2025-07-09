import { InboxStackIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import TabLayout from '../layout/TabLayout'

const tabs = [
  { name: 'Drafts', href: '/tally/expense/drafts', icon: InboxStackIcon },
  { name: 'Analyzed', href: '/tally/expense/analyzed', icon: ChartBarIcon },
  { name: 'Synced', href: '/tally/expense/synced', icon: CheckCircleIcon },
]

const ExpenseTally = () => <TabLayout title="Expense Bills" tabs={tabs} uploadLabel="Upload" />

export default ExpenseTally
