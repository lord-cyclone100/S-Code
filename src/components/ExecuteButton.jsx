import axios from 'axios';
import { useLanguage, useCode, useVersion, useOutput, useInput } from '../store/store';
import '../css/ExecuteButton.css';
import { FaPlay } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify'
// import to

export const ExecuteButton = () =>{
	const {lang,setLang} = useLanguage();
	const {code,setCode} = useCode();
	const {version,setVersion} = useVersion();
	const {output,setOutput} = useOutput();
	const {inp,setInp} = useInput();


	const api = axios.create({
		baseURL : "https://emkc.org/api/v2/piston"
	})

	const executeCode = async() => {
		const response = await api.post('/execute',{
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

	const handleCodeRun = async () =>{
		if(!code){
			return;
		}
		try {
			const {run} = await executeCode();
			setOutput(run.output);
			if(run.stderr == ""){
				toast.success("Code Execution Successful")
			}
			else{
				toast.error("Code Execution failed");
			}
		} catch (error) {
			
		}
	}

	return(
		<>
			<button onClick={handleCodeRun}>Execute <FaPlay /></button>
		</>
	)
}