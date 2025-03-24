'use client';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const TextEditor = ({ onChange, value, setSnippet }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc mx-9'
          }
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal mx-9'
          }
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: 'my-custom-class'
        }
      }),
      Image
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'outline-none min-h-[50vh] p-3'
      }
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      setSnippet(editor.getText().slice(0, 200).replace(/\n+/g, ". "));
    }
  });

  return (
    <div className='rounded-sm border'>
      <MenuBar editor={editor} />
      <div className='lg:grid lg:min-h-[80vh] lg:grid-cols-2'>
        <EditorContent editor={editor} />
        <div
          className='min-h-[50vh] border-t p-3 lg:border-t-0 lg:border-l'
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
