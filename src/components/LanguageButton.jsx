import langarray from '../../api/langs.json'
import { useLanguage, useCode, useVersion } from '../store/store';
import '../css/LanguageButton.scss';

export const LanguageButton = () =>{
	const {lang,setLang} = useLanguage();
	const {code,setCode} = useCode();
	const {version,setVersion} = useVersion();

	const handleLanguageChange = (e) => {
		const selectedLanguage = langarray.find(item => item.language === e.target.value);
		if (selectedLanguage) {
				setLang(selectedLanguage.language);
				const formattedCode = selectedLanguage.code.replace(/\r?\n/g, "\\n");
				setCode(formattedCode);
				setVersion(selectedLanguage.version);
		}
	}

	return(
		<div className='lang-select'>
			<label htmlFor="languages">Choose a language:</label>
			<select name="langs" id="langs" onChange={handleLanguageChange}>
				{langarray.map((item,idx)=>{
					// const{}
					return <option key={idx}>{item.language}</option>
				})}
			</select>
		</div>
	)
}