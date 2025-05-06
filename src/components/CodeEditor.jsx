import Editor from '@monaco-editor/react';
import { useLanguage, useCode } from '../store/store';
import '../css/CodeEditor.scss';

export const CodeEditor = () =>{
	const {lang,setLang} = useLanguage();
	const {code,setCode} = useCode();
	return(
		<div className='op'>
			<Editor 
				height="74vh" 
				width="100%" 
				language={lang}
				value={code} 
				className='editor-box'
				theme='vs-dark'
				onChange={(val)=>{
					setCode(val);
				}}
			/>
		</div>
	)
}