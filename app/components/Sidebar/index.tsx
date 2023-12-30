
'use client'

import RIDER_LOGO from '../../../assets/logo.png'
import Image, { StaticImageData } from "next/image"

import DASHBOARD_ICON from '../../../assets/sidebaricons/dashborad.png'
import RIDERS_ICON from '../../../assets/sidebaricons/riders.png'
import DRIVERS_ICON from '../../../assets/sidebaricons/drivers.png'
import VENDORS_ICON from '../../../assets/sidebaricons/vendors.png'
import TRIPS_ICON from '../../../assets/sidebaricons/trips.png'
import PUSH_NOTIFICATIONS_ICON from '../../../assets/sidebaricons/push_notifications.png'
import WALLET_MANAGEMENT_ICON from '../../../assets/sidebaricons/wallet.png'
import PAYOUT_MANAGEMENT_ICON from '../../../assets/sidebaricons/payout.png'
import BOOKINGS_ICON from '../../../assets/sidebaricons/bookings.png'
import REFERRALS_ICON from '../../../assets/sidebaricons/referrals.png'
import SERVICES_ICON from '../../../assets/sidebaricons/services.png'
import SOS_UPDATE_ICON from '../../../assets/sidebaricons/sos_update.png'
import UPDATE_BANNER_ICON from '../../../assets/sidebaricons/update_banner.png'
import PROMO_CODE_ICON from '../../../assets/sidebaricons/promo_code.png'
import LIVE_CHAT_ICON from '../../../assets/sidebaricons/live_chat.png'
import { useRouter } from 'next/navigation'

const Sidebar: React.FC = () => {

    const router = useRouter()

    const navigate = (path : string) => {
        router.push(path)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center space-y-4 overflow-y-scroll">
            <Image src={RIDER_LOGO} alt="Rider Logo" className='w-32' />

            <ul>
                {SidebarLinks.map((link, index) => (
                    <li onClick={()=>navigate(link.path)} key={index} className='flex cursor-pointer items-center py-2 space-x-4'>
                        <Image src={link.icon} alt={link.title} className='w-6 h-6' />
                        <span className='text-white'>{link.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar


type SidebarLinksType = {
    icon: StaticImageData
    title: string
    path: string
}

const SidebarLinks: SidebarLinksType[] = [
    {
        icon: DASHBOARD_ICON,
        title: "Dashboard",
        path: "/"
    },
    {
        icon: RIDERS_ICON,
        title: "All Riders",
        path: "/riders"
    },
    {
        icon: DRIVERS_ICON,
        title: "All Drivers",
        path: "/drivers"
    },
    {
        icon: VENDORS_ICON,
        title: "All Vendors",
        path: "/vendors"
    },
    {
        icon: TRIPS_ICON,
        title: "All Trips",
        path: "/trips"
    },
    {
        icon: PUSH_NOTIFICATIONS_ICON,
        title: "Push Notifications",
        path: "/push-notifications"
    },
    {
        icon: WALLET_MANAGEMENT_ICON,
        title: "Wallet Management",
        path: "/wallet-management"
    },
    {
        icon: PAYOUT_MANAGEMENT_ICON,
        title: "Payout Management",
        path: "/payout-management"
    },
    {
        icon: BOOKINGS_ICON,
        title: "All Bookings",
        path: "/bookings"
    },
    {
        icon: REFERRALS_ICON,
        title: "All Referrals",
        path: "/referrals"
    },
    {
        icon: SERVICES_ICON,
        title: "Services",
        path: "/services"
    },
    {
        icon: SOS_UPDATE_ICON,
        title: "SOS Updates",
        path: "/sos-update"
    },
    {
        icon: UPDATE_BANNER_ICON,
        title: "Update Banner",
        path: "/update-banner"
    },
    {
        icon: PROMO_CODE_ICON,
        title: "Promo Code",
        path: "/promo-code"
    },
    {
        icon: LIVE_CHAT_ICON,
        title: "Live Chat",
        path: "/live-chat"
    },
]