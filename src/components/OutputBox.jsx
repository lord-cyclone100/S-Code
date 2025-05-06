import '../css/OutputBox.scss'
import { useOutput } from '../store/store'

export const OutputBox = () => {
	const { output, setOutput } = useOutput();
	return(
		<>
			<div className="output-box">
				<p>Output :- </p>
				<br />
				<hr />
				<br />
				{/* {setTimeout()} */}
				<p>{output}</p>
			</div>
		</>
	)
}