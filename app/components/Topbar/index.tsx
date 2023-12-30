
'use client'

import Image, { StaticImageData } from 'next/image'
import USER_ICON from '../../../assets/topbaricons/user_icon.png'

import SETTINGS_ICON from '../../../assets/topbaricons/settings.png'
import HISTORY_ICON from '../../../assets/topbaricons/history.png'
import FILTERS_ICON from '../../../assets/topbaricons/filters.png'
import SEARCH_ICON from '../../../assets/search_icon.png'

import { useRouter } from 'next/navigation'
import { RED_COLOR } from '@/contants'

const Topbar: React.FC = () => {
    const router = useRouter()

    return (
        <nav className="w-full bg-white h-28 flex items-center justify-between px-8">

            <div onClick={() => {
                router.push('/auth/login')
            }} className="flex items-center cursor-pointer space-x-2">
                <Image src={USER_ICON} alt="User Icon" className='w-16' />
                <div className="flex flex-col w-full -space-y-1">
                    <h1 className="md:text-lg text-sm font-medium">Mr. Admin</h1>
                    <p className="md:text-sm text-xs font-thin">lorem ipsum</p>
                </div>
            </div>

            <div className="flex items-center justify-endw-full h-full">
                <div className="md:flex hidden items-center h-10 bg-pink-500">
                    <div className="relative h-full">
                        <div style={{
                            backgroundColor: RED_COLOR
                        }} className="absolute h-full px-4 flex items-center justify-center">
                            <Image src={SEARCH_ICON} alt="Search Icon" className="" />
                        </div>
                        <input type="text" placeholder="Search in Admin Panel" className="bg-white pl-14 placeholder:text-sm h-full outline outline-gray-400 text-black px-6 " />
                    </div>
                </div>

                <div className="flex items-center h-full">
                    {Options.map((option, index) => (
                        <div key={index} className='flex w-full h-full mx-4 items-center justify-center flex-col'>
                            <Image src={option.icon} alt={option.title} className={`${option.small ? 'md:w-8 w-7' : 'md:w-9 w-8'}`} />
                            <span className={`text-black text-xs ${option.small ? 'md:mt-3 mt-2' : 'md:mt-2 mt-1'}`}>{option.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Topbar

type OptionType = {
    title: string
    path: string
    icon: StaticImageData,
    small?: boolean
}

const Options: OptionType[] = [
    {
        title: "Settings",
        path: "/settings",
        icon: SETTINGS_ICON
    },
    {
        title: "History",
        path: "/history",
        icon: HISTORY_ICON,
        small: true
    },
    {
        title: "Filters",
        path: "/filters",
        icon: FILTERS_ICON,
        small: true
    }
]