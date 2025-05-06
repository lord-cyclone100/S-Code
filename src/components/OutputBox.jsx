import '../css/OutputBox.scss'
import { useOutput } from '../store/store'

export const OutputBox = () => {
	const { output, setOutput } = useOutput();
	return(	//Display the output on the screen
		<>
			<div className="output-box">
				<p>Output :- </p>
				<br />
				<hr />
				<br />
				<p>{output}</p>	
			</div>
		</>
	)
}