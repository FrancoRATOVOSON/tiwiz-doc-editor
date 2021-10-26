import { ContentBlock } from 'draft-js'
import { ReactElement } from 'react'
import Code from './assets/icons/components/Blocs/Code'
import OrderedList from './assets/icons/components/Blocs/OrderedList'
import Paragraph from './assets/icons/components/Blocs/Paragraph'
import Quote from './assets/icons/components/Blocs/Quote'
import UnorderedList from './assets/icons/components/Blocs/UnorderedList'
import Title1 from './assets/icons/components/Titles/Title1'
import Title2 from './assets/icons/components/Titles/Title2'
import Title3 from './assets/icons/components/Titles/Title3'
import Title4 from './assets/icons/components/Titles/Title4'
import Title5 from './assets/icons/components/Titles/Title5'
import Title6 from './assets/icons/components/Titles/Title6'

export interface ToolOptionType {
  label: string
  style: string
  icon: () => ReactElement
}

export const TitleList: ToolOptionType[] = [
  {
    label: 'Title 1',
    style: 'header-one',
    icon: Title1,
  },
  {
    label: 'Title 2',
    style: 'header-two',
    icon: Title2,
  },
  {
    label: 'Title 3',
    style: 'header-three',
    icon: Title3,
  },
  {
    label: 'Title 4',
    style: 'header-four',
    icon: Title4,
  },
  {
    label: 'Title 5',
    style: 'header-five',
    icon: Title5,
  },
  {
    label: 'Title 6',
    style: 'header-six',
    icon: Title6,
  },
]

export const BlocTypeList: ToolOptionType[] = [
  {
    label: 'Paragraph',
    style: 'paragraph',
    icon: Paragraph,
  },
  {
    label: 'Quote',
    style: 'blockquote',
    icon: Quote,
  },
  {
    label: 'Code',
    style: 'code-block',
    icon: Code,
  },
  {
    label: 'Ordered List',
    style: 'ordered-list-item',
    icon: OrderedList,
  },
  {
    label: 'Unordered List',
    style: 'unordered-list-item',
    icon: UnorderedList,
  },
]
export const blockStyling = (contentBlock: ContentBlock): string => contentBlock.getType()
