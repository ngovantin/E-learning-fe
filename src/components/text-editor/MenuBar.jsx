import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  ImageUp,
  Italic,
  List,
  ListOrdered,
  Pilcrow,
  Strikethrough
} from 'lucide-react';

import { Toggle } from '../ui/toggle';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

const MenuBar = ({ editor }) => {
  const [image, setImage] = useState('');
  if (!editor) {
    return null;
  }
  const handleImageUpload = (result) =>{
    editor.chain().focus().setImage({ src: result.info.secure_url }).run()
  }
  const options = [
    {
      icon: <Heading1 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive('heading', { level: 1 }),
      label: 'H1'
    },
    {
      icon: <Heading2 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive('heading', { level: 2 }),
      label: 'H2'
    },
    {
      icon: <Heading3 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive('heading', { level: 3 }),
      label: 'H3'
    },
    {
      icon: <Pilcrow className='size-4' />, // Icon tượng trưng cho đoạn văn
      onClick: () => editor.chain().focus().setParagraph().run(),
      pressed: editor.isActive('paragraph'),
      label: 'Paragraph'
    },
    {
      icon: <Bold className='size-4' />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive('bold'),
      label: 'Bold'
    },
    {
      icon: <Italic className='size-4' />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive('italic'),
      label: 'Italic'
    },
    {
      icon: <Strikethrough className='size-4' />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive('strike'),
      label: 'Strike'
    },
    {
      icon: <Highlighter className='size-4' />, // Icon highlight
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive('highlight'),
      label: 'Highlight'
    },
    {
      icon: <AlignLeft className='size-4' />,
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      pressed: editor.isActive({ textAlign: 'left' }),
      label: 'Left'
    },
    {
      icon: <AlignCenter className='size-4' />,
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      pressed: editor.isActive({ textAlign: 'center' }),
      label: 'Center'
    },
    {
      icon: <AlignRight className='size-4' />,
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      pressed: editor.isActive({ textAlign: 'right' }),
      label: 'Right'
    },
    {
      icon: <AlignJustify className='size-4' />,
      onClick: () => editor.chain().focus().setTextAlign('justify').run(),
      pressed: editor.isActive({ textAlign: 'justify' }),
      label: 'Justify'
    },
    {
      icon: <List className='size-4' />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive('bulletList'),
      label: 'Bullet List'
    },
    {
      icon: <ListOrdered className='size-4' />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive('orderedList'),
      label: 'Ordered List'
    }
  ];

  return (
    <div className='z-50 mb-1 flex items-center space-x-2 bg-slate-50 p-1 flex-wrap'>
      {options.map((option, index) => (
        <Toggle key={index} pressed={option.pressed} onPressedChange={option.onClick}>
          {option.icon}
        </Toggle>
      ))}
      <CldUploadWidget uploadPreset='tinn-blog' onSuccess={handleImageUpload}>
        {({ open }) => {
          return <ImageUp onClick={() => open()} className='size-4' />;
        }}
      </CldUploadWidget>
    </div>
  );
};
export default MenuBar;
