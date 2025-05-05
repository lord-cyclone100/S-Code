import { create } from 'zustand';

const useLanguage = create((set) => ({
    lang: "c",
    setLang: (val) => set({ lang: val }),
}));

const useCode = create((set) => ({
    code: "#include<stdio.h>\nint main(){\n\tprintf(\"Hello World\");\n\treturn 0;\n}\n",
    setCode: (val) => set({ code: val }),
}));

const useVersion = create((set) => ({
    version: "10.2.0",
    setVersion: (val) => set({ version: val }),
}));

const useOutput = create((set) => ({
    output: "Your output goes here",
    setOutput: (val) => set({ output: val }),
}));

const useInput = create((set) => ({
    inp: "",
    setInp: (val) => set({ inp: val }),
}));

export { useLanguage, useCode, useVersion, useOutput, useInput }