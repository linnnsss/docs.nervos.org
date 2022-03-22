"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},973:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>f});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"pprof",title:"Tips for profiling CKB script"},l=void 0,p={unversionedId:"essays/pprof",id:"essays/pprof",title:"Tips for profiling CKB script",description:"Before starting, make sure you have understood the concept of cycles.",source:"@site/docs/essays/pprof.md",sourceDirName:"essays",slug:"/essays/pprof",permalink:"/docs/essays/pprof",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1647929638,formattedLastUpdatedAt:"3/22/2022",frontMatter:{id:"pprof",title:"Tips for profiling CKB script"},sidebar:"Essays",previous:{title:"Tips for debugging CKB script",permalink:"/docs/essays/debug"},next:{title:"The General Workflow for Constructing a Transaction",permalink:"/docs/essays/rules"}},c=[{value:"Get ckb-vm-pprof",id:"get-ckb-vm-pprof",children:[],level:2},{value:"Basic usage",id:"basic-usage",children:[{value:"Build with -g option",id:"build-with--g-option",children:[],level:3},{value:"Install visualization package",id:"install-visualization-package",children:[],level:3},{value:"Get reports",id:"get-reports",children:[],level:3}],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before starting, make sure you have understood the concept of ",(0,o.kt)("a",{parentName:"p",href:"basics/glossary#cycles"},"cycles"),"."),(0,o.kt)("p",null,"In the development phase of dapps, it is a wide range of needs to estimate how many cycles our dapp will consume."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-vm-pprof"},"ckb-vm-pprof")," is a tool for visualization and analysis of profiling data. It can run a script off-chain and then collect the runtime data. According to your preference, It can generate both text and graphical reports."),(0,o.kt)("h2",{id:"get-ckb-vm-pprof"},"Get ckb-vm-pprof"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/nervosnetwork/ckb-vm-pprof\n$ cd ckb-vm-pprof\n$ cargo build --release\n")),(0,o.kt)("p",null,"The executable file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"./target/release/ckb-vm-pprof"),", you can copy it to any ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," you like."),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"Suppose the program to be tested is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int fib(int n) {\n    if (n == 0 || n == 1) {\n        return n;\n    } else {\n        return fib(n-1) + fib(n-2);\n    }\n}\n\nint main() {\n    if (fib(10) != 55) {\n        return 1;\n    }\n    return 0;\n}\n")),(0,o.kt)("p",null,"The Fibonacci function is used in the example because it is not only simple enough, but also a recursive function."),(0,o.kt)("h3",{id:"build-with--g-option"},"Build with -g option"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-g")," option, described in the gcc documentation as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"-g\nProduce debugging information in the operating system\u2019s native format (stabs, COFF, XCOFF, or DWARF). GDB can work with this debugging information.\n\nOn most systems that use stabs format, -g enables use of extra debugging information that only GDB can use; this extra information makes debugging work better in GDB but probably makes other debuggers crash or refuse to read the program. If you want to control for certain whether to generate the extra information, use -gstabs+, -gstabs, -gxcoff+, -gxcoff, or -gvms (see below).\n")),(0,o.kt)("p",null,"It is necessary to bring it when compiling, so the compilation command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ riscv64-unknown-elf-gcc -g -o fib fib.c\n")),(0,o.kt)("h3",{id:"install-visualization-package"},"Install visualization package"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you only need a text report, you can ignore this step.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo install inferno\n")),(0,o.kt)("p",null,"Inferno is a port of parts of the flamegraph toolkit to Rust, with the aim of improving the performance of the original flamegraph tools."),(0,o.kt)("h3",{id:"get-reports"},"Get reports"),(0,o.kt)("p",null,"We just need to use ckb-vm-pprof to run the binary fib:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ckb-vm-pprof --bin fib > flamegraph.txt\n\n$ cat flamegraph.txt\n??:?? 938\n??:??; /src/ckb-vm-pprof/res/fib.c:main 24\n??:??; /src/ckb-vm-pprof/res/fib.c:main; /src/ckb-vm-pprof/res/fib.c:fib 7311\n")),(0,o.kt)("p",null,"The basic format of the text report is ",(0,o.kt)("inlineCode",{parentName:"p"},"Function0; Function1; ... FunctionN Cycles"),", that is, the call stack and the final cycles. ",(0,o.kt)("inlineCode",{parentName:"p"},"??:??")," means that some codes that does not belong to any user defined function(usually generated by the compiler)."),(0,o.kt)("p",null,"Generate graphics for easy reading:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat flamegraph.txt | inferno-flamegraph > fib.svg\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nervosnetwork/ckb-vm-pprof/master/res/fib.svg",alt:"fib.svg"})),(0,o.kt)("p",null,"Please note that the function with too small proportion will not be displayed on the flamegraph by default."))}f.isMDXComponent=!0}}]);