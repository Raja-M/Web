import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import TocIcon from '@mui/icons-material/Toc';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <AddBusinessIcon />,
        label: 'Add Program',
        route: '/program/add',
    },
    {
        id: 1,
        icon: <TocIcon />,
        label: 'List',
        route: '/program/list',
    } 
]