import { create } from 'zustand';

//zustand store to manage all state variables. Visit https://www.npmjs.com/package/zustand for more details

const useLanguage = create((set) => ({  //variable to set the currently used language
    lang: "c",
    setLang: (val) => set({ lang: val }),
}));

const useExtension = create((set) => ({ //variable to set the extension for the currently used language
    ext: "c",
    setExt: (val) => set({ ext: val }),
}));

const useCode = create((set) => ({  //variable to set the boiler plate code for the currently used language
    code: "#include<stdio.h>\nint main(){\n\tprintf(\"Hello World\");\n\treturn 0;\n}\n",
    setCode: (val) => set({ code: val }),
}));

const useVersion = create((set) => ({   //variable to set the version of the currently used language for Piston api
    version: "10.2.0",
    setVersion: (val) => set({ version: val }),
}));

const useOutput = create((set) => ({    //variable to display the output
    output: "Your output goes here",
    setOutput: (val) => set({ output: val }),
}));

const useInput = create((set) => ({ //variable to set the inputs given by the user 
    inp: "",
    setInp: (val) => set({ inp: val }),
}));

export { useLanguage, useExtension, useCode, useVersion, useOutput, useInput }