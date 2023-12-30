
'use client'

import Image, { StaticImageData } from 'next/image'
import USER_ICON from '../../../assets/topbaricons/user_icon.png'

import SETTINGS_ICON from '../../../assets/topbaricons/settings.png'
import HISTORY_ICON from '../../../assets/topbaricons/history.png'
import FILTERS_ICON from '../../../assets/topbaricons/filters.png'
import { useRouter } from 'next/navigation'

const Topbar: React.FC = () => {
    const router = useRouter()

    return (
        <nav className="w-full bg-white h-28 flex items-center justify-between px-8">
            <div onClick={()=>{
                router.push('/auth/login')
            }} className="flex items-center cursor-pointer space-x-2">
                <Image src={USER_ICON} alt="User Icon" className='w-16' />
                <div className="flex flex-col -space-y-1">
                    <h1 className="text-lg font-medium">Mr. Admin</h1>
                    <p className="text-sm font-thin">lorem ipsum</p>
                </div>
            </div>

            <div>
                <div>

                </div>
                <div className="flex items-center h-full">
                    {Options.map((option, index) => (
                        <div key={index} className='flex w-full h-full mx-4 items-center justify-center flex-col'>
                            <Image src={option.icon} alt={option.title} className={`${option.small ? 'w-8' : 'w-9'}`} />
                            <span className={`text-black text-xs ${option.small ? 'mt-3' : 'mt-2'}`}>{option.title}</span>
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