import { useEffect, useState } from 'react'
import { FaCopy } from "react-icons/fa";
import './App.css'
import { CodeEditor } from './components/CodeEditor'
import { OutputBox } from './components/OutputBox'
import { LanguageButton } from './components/LanguageButton'
import { ExecuteButton } from './components/ExecuteButton'
import { Navbar } from './components/Navbar'
import { useInput, useCode } from './store/store'
import { toast, ToastContainer } from 'react-toastify'

export const App = () => {

  const {inp,setInp} = useInput();
  const {code,setCode} = useCode();
  
  const inputDisplay = (e) => {
    const value = e.target.value;
    setInp(value);
    // console.log(inp);
  };

  const copyToClipBoard = async() =>{
    try{
      if(code == ""){
        toast.error("Nothing to Copy")
      }
      else{
        await navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard");
      }
    }
    catch (err){

    }
  }

  useEffect(() => {
    console.log('Updated inp state:', inp);
  }, [inp]);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="button-section">
          <LanguageButton />
          <div>
            <button onClick={copyToClipBoard}><FaCopy /></button>
            {/* <ToastContainer/> */}
            <ExecuteButton />
          </div>
        </div>
        <div className="code-space">
          <div>
            <CodeEditor />
          </div>
          <div className="window">
            <div className="inp-txt">
              <p>Inputs :- </p>
              <br />
              <textarea placeholder='Type one input per line' onResize="none" cols="1" rows="4" onChange={inputDisplay}></textarea>  
            </div>
            <OutputBox />
          </div>
        </div>
      </div>
      
    </>
  )
}
