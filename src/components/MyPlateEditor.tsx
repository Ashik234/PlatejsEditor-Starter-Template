'use client';

import React from 'react';
import { Plate, usePlateEditor, PlateContent, ParagraphPlugin } from 'platejs/react';
import { type Value } from 'platejs';
import { H1Plugin, H2Plugin, H3Plugin } from '@platejs/basic-nodes/react';

import { EditorContainer, Editor } from './ui/editor';

export function MyPlateEditor() {
  const initialValue: Value = [
    {
      id: '1',
      type: 'p',
      children: [
        { text: 'Hello, Plate.js!' },
      ],
    },
  ];

  const editor = usePlateEditor({
    plugins: [ParagraphPlugin, H1Plugin, H2Plugin, H3Plugin],
    value: initialValue,
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <PlateContent />
      </EditorContainer>
    </Plate>
  );
}

export default MyPlateEditor; 