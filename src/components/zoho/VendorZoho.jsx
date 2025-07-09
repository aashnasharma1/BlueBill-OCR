import { InboxStackIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import TabLayout from '../layout/TabLayout'

const tabs = [
  { name: 'Drafts', href: '/zoho/vendor/drafts', icon: InboxStackIcon },
  { name: 'Analyzed', href: '/zoho/vendor/analyzed', icon: ChartBarIcon },
  { name: 'Synced', href: '/zoho/vendor/synced', icon: CheckCircleIcon },
]

const VendorZoho = () => <TabLayout title="Vendor Bills" tabs={tabs} uploadLabel="Upload" />

export default VendorZoho
