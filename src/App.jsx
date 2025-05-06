import { useEffect } from 'react'
import { FaCopy } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { toast } from 'react-toastify'
import { CodeEditor } from './components/CodeEditor'
import { OutputBox } from './components/OutputBox'
import { LanguageButton } from './components/LanguageButton'
import { ExecuteButton } from './components/ExecuteButton'
import { Navbar } from './components/Navbar'
import { useInput, useCode, useLanguage, useExtension } from './store/store'
import './App.scss'


export const App = () => {

  const {inp,setInp} = useInput();
  const {code,setCode} = useCode();
  const {lang,setLang} = useLanguage();
  const {ext,setExt} = useExtension();
  
  const inputDisplay = (e) => {
    const value = e.target.value;
    setInp(value);
  };

  const copyToClipBoard = async() =>{ //Code copy functionality
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

  const downloadCode = () =>{ //Download functionality
    if(code == ""){
      toast.error("Nothing to download");
      return;
    }
    const blob = new Blob([code],{type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `code.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded successfully");
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
            <button onClick={downloadCode}><FaDownload /></button>
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
