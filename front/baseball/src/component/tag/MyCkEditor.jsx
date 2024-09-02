import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Autosave,
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Highlight,
	Italic,
	Paragraph,
	SelectAll,
	Strikethrough,
	Underline,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ko.js';

import 'ckeditor5/ckeditor5.css';
import '../../CkEditor.css';

export default function MyCkEditor() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'selectAll',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'|',
				'highlight',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autosave,
			Bold,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Highlight,
			Italic,
			Paragraph,
			SelectAll,
			Strikethrough,
			Underline,
			Undo
		],
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		initialData: '', // 초기 내용을 빈 상태로 설정
		language: 'ko',
		placeholder: '메모장에 기록하세요!',
		translations: [translations]
	};

	return (
		<div className="main-container">
			<div className="editor-container" ref={editorContainerRef}>
				<div className="editor-container__editor">
					<div ref={editorRef} style={{ width: '100%', height: '50vh', overflowY: 'auto' }}>
						{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}
					</div>
				</div>
			</div>
		</div>
	);
}
