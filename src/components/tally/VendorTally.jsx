import { InboxStackIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import TabLayout from '../layout/TabLayout'

const tabs = [
  { name: 'Drafts', href: '/tally/vendor/drafts', icon: InboxStackIcon },
  { name: 'Analyzed', href: '/tally/vendor/analyzed', icon: ChartBarIcon },
  { name: 'Synced', href: '/tally/vendor/synced', icon: CheckCircleIcon },
]

const VendorTally = () => <TabLayout title="Vendor Bills" tabs={tabs} uploadLabel="Upload" />

export default VendorTally
