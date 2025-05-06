import axios from 'axios';
import { useLanguage, useCode, useVersion, useOutput, useInput } from '../store/store';
import '../css/ExecuteButton.scss';
import { FaPlay } from "react-icons/fa";
import { toast } from 'react-toastify'

export const ExecuteButton = () =>{
	const {lang,setLang} = useLanguage();
	const {code,setCode} = useCode();
	const {version,setVersion} = useVersion();
	const {output,setOutput} = useOutput();
	const {inp,setInp} = useInput();

	const api = axios.create({
		baseURL : "https://emkc.org/api/v2/piston"	//api endpoint
	})

	const executeCode = async() => {
		const response = await api.post('/execute',{	//api call with post request
			language : lang,
			version : version,
			files : [
				{
					content : code
				}
			],
			stdin:inp,
		});
		return response.data;
	}

	//Piston API for code execution. Check out the docs https://piston.readthedocs.io/en/latest/

	const handleCodeRun = async () =>{	//when Execute button is clicked
		if(!code){
			return;
		}
		try {
			const {run} = await executeCode();
			setOutput(run.output);
			if(run.stderr == ""){
				toast.success("Code Execution Successful");	//Success notification
			}
			else{
				toast.error("Code Execution failed");	//Compilation error notification
			}
		} catch (error) {
			console.log(error);
		}
	}

	return(
		<>
			<button onClick={handleCodeRun}>Execute <FaPlay /></button>
		</>
	)
}