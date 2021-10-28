import { ToolOptionType } from '.'
import ACenter from '../assets/icons/components/Format/ACenter'
import AJustify from '../assets/icons/components/Format/AJustify'
import ALeft from '../assets/icons/components/Format/ALeft'
import ARight from '../assets/icons/components/Format/ARight'
import Bold from '../assets/icons/components/Format/Bold'
import Italic from '../assets/icons/components/Format/Italic'
import Underlined from '../assets/icons/components/Format/Underlined'

export const StyleTypeList: ToolOptionType[] = [
  // Default DraftJS inline style
  {
    label: 'Bold',
    style: 'BOLD',
    icon: Bold,
  },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: Italic,
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: Underlined,
  },
  // Custom inline style
  {
    label: 'Align Left',
    style: 'LEFTALIGN',
    icon: ALeft,
  },
  {
    label: 'Align Right',
    style: 'RIGHTALIGN',
    icon: ARight,
  },
  {
    label: 'Align Center',
    style: 'CENTERALIGN',
    icon: ACenter,
  },
  {
    label: 'Justify',
    style: 'JUSTIFYALIGN',
    icon: AJustify,
  },
]

export default StyleTypeList
