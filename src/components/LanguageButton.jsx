import langarray from '../../api/langs.json'
import { useLanguage, useCode, useVersion, useExtension } from '../store/store';
import '../css/LanguageButton.scss';

export const LanguageButton = () =>{
	const {lang,setLang} = useLanguage();
	const {code,setCode} = useCode();
	const {version,setVersion} = useVersion();
	const {ext,setExt} = useExtension();

	const handleLanguageChange = (e) => {	//Wnenever a language is selected from the menu
		const selectedLanguage = langarray.find(item => item.language === e.target.value);
		if (selectedLanguage) {
				setLang(selectedLanguage.language);	//set the currently selected language
				setCode(selectedLanguage.code);	//set the boiler plate code for the currently selected language
				setVersion(selectedLanguage.version);	//set the required version for the Piston api to work
				setExt(selectedLanguage.extension);	//set the extension from code download purposes
		}
	}

	return(
		<div className='lang-select'>
			<label htmlFor="languages">Choose a language:</label>
			<select name="langs" id="langs" onChange={handleLanguageChange}>
				{langarray.map((item,idx)=>{	//setting each language from the langs.json api
					return <option key={idx}>{item.language}</option>
				})}
			</select>
		</div>
	)
}