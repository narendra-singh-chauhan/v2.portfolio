(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1802:function(e,t,a){Promise.resolve().then(a.bind(a,2630))},2630:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var r=a(7437),i=a(5922),n=a(2265),s=a(521),o=a(8614),l=a(7648),d=a(3145),c=a(7996),m=()=>{let[e,t]=(0,n.useState)(!1),{theme:a,setTheme:m}=(0,i.F)(),[x,p]=(0,n.useState)(!1);(0,n.useEffect)(()=>p(!0),[]);let h=["Home","Experience","Skills","Projects","Contact"],u={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}};return(0,r.jsx)("header",{className:"fixed w-full bg-background/80 backdrop-blur-sm shadow-md z-50",children:(0,r.jsxs)("nav",{className:"container mx-auto px-6 py-3",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(s.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5},children:(0,r.jsx)(l.default,{href:"/",className:"text-2xl font-bold text-primary flex items-center space-x-2",children:(0,r.jsx)("div",{className:"relative w-10 h-10",children:(0,r.jsx)(d.default,{src:"/v2.portfolio/icon.webp",alt:"Narendra Singh",layout:"fill",objectFit:"cover",className:"rounded-full shadow-2xl"})})})}),(0,r.jsxs)("div",{className:"hidden md:flex space-x-4 items-center",children:[h.map(e=>(0,r.jsx)(s.E.a,{href:"#".concat(e.toLowerCase()),className:"text-foreground hover:text-primary transition duration-300",whileHover:{scale:1.1},whileTap:{scale:.95},children:e},e)),x&&(0,r.jsx)("button",{onClick:()=>m("dark"===a?"light":"light"===a?"system":"dark"),className:"p-2 rounded-full bg-primary text-primary-foreground",children:"dark"===a?(0,r.jsx)(c.kXG,{}):"light"===a?(0,r.jsx)(c.hRw,{}):(0,r.jsx)(c.wOW,{})})]}),(0,r.jsxs)("div",{className:"md:hidden flex items-center space-x-4",children:[x&&(0,r.jsx)("button",{onClick:()=>m("dark"===a?"light":"light"===a?"system":"dark"),className:"p-2 rounded-full bg-primary text-primary-foreground",children:"dark"===a?(0,r.jsx)(c.kXG,{}):"light"===a?(0,r.jsx)(c.hRw,{}):(0,r.jsx)(c.wOW,{})}),(0,r.jsx)("button",{onClick:()=>t(!e),className:"text-foreground focus:outline-none",children:(0,r.jsx)("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24",children:e?(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):(0,r.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})]})]}),(0,r.jsx)(o.M,{children:e&&(0,r.jsx)(s.E.div,{initial:"closed",animate:"open",exit:"closed",variants:{open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},className:"md:hidden mt-4 space-y-2",children:h.map(e=>(0,r.jsx)(s.E.a,{href:"#".concat(e.toLowerCase()),className:"block text-foreground hover:text-primary transition duration-300 py-2 px-4 rounded-md hover:bg-primary/10",onClick:()=>t(!1),variants:u,whileHover:{scale:1.05},whileTap:{scale:.95},children:e},e))})})]})})},x=a(9089),p=a(8913),h=()=>(0,r.jsx)("section",{id:"home",className:"min-h-screen flex items-center justify-center bg-background",children:(0,r.jsxs)("div",{className:"container mx-auto px-6 flex flex-col-reverse md:flex-row items-center",children:[(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},className:"md:w-1/2 text-center md:text-left",children:[(0,r.jsxs)(s.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},className:"text-4xl md:text-6xl font-bold mb-4",children:["Hi, I'm ",(0,r.jsx)("span",{className:"text-primary",children:"Narendra Singh"})]}),(0,r.jsx)(s.E.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},className:"text-2xl md:text-3xl text-muted-foreground mb-6",children:"Full Stack Developer"}),(0,r.jsx)(s.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},className:"text-muted-foreground mb-8",children:"With 3 years of experience, I specialize in crafting high-performance web applications using MERN stack technologies."}),(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.8},className:"flex flex-wrap justify-center md:justify-start gap-4",children:[(0,r.jsx)(s.E.a,{href:"#contact",className:"bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get in Touch"}),(0,r.jsxs)(s.E.div,{className:"relative group",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1,duration:.8},children:[(0,r.jsx)("button",{className:"bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300",children:"My Resume"}),(0,r.jsxs)("div",{className:"absolute left-1/2 transform -translate-x-1/2 mt-2 bg-secondary text-secondary-foreground px-4 py-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-4",children:[(0,r.jsxs)("a",{href:"https://drive.google.com/file/d/1XWcxAcpLLCc7Gg7QenUjLupdto1j75HN/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition duration-300 flex items-center",children:[(0,r.jsx)(p.Rbo,{className:"mr-2"})," Preview"]}),(0,r.jsxs)("a",{href:"https://drive.google.com/file/d/1XWcxAcpLLCc7Gg7QenUjLupdto1j75HN/view?usp=drive_link",download:!0,className:"hover:text-primary transition duration-300 flex items-center",children:[(0,r.jsx)(p.H_7,{className:"mr-2"})," Download"]})]})]}),(0,r.jsxs)(s.E.div,{className:"relative group",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.8},children:[(0,r.jsx)("button",{className:"bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300",children:"Profile Links"}),(0,r.jsxs)("div",{className:"absolute left-1/2 transform -translate-x-1/2 mt-2 bg-secondary text-secondary-foreground px-4 py-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-4",children:[(0,r.jsxs)("a",{href:"https://github.com/narendra-singh-chauhan",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition duration-300 flex items-center",children:[(0,r.jsx)(x.hJX,{className:"mr-2"})," GitHub"]}),(0,r.jsxs)("a",{href:"https://linkedin.com/in/narendra-singh-982a2b247",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition duration-300 flex items-center",children:[(0,r.jsx)(x.ltd,{className:"mr-2"})," LinkedIn"]}),(0,r.jsxs)("a",{href:"https://leetcode.com/u/narendra-singh",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition duration-300 flex items-center",children:[(0,r.jsx)(x.tvD,{className:"mr-2"})," LeetCode"]})]})]})]})]}),(0,r.jsx)(s.E.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8},className:"md:w-1/2 mb-10 md:mb-0",children:(0,r.jsx)("div",{className:"relative w-64 h-64 md:w-96 md:h-96 mx-auto mt-20 md:mt-0",children:(0,r.jsx)(d.default,{src:"/v2.portfolio/profile.v1.jpeg",alt:"Narendra Singh",layout:"fill",objectFit:"cover",className:"rounded-full shadow-2xl"})})})]})});let u=[{title:"Full Stack Developer",company:"FOG Technologies",duration:"Jan 2024 - Present",description:["Worked primarily on a project named Hyper Grid, an LED floor-based game, focusing on software development.","Utilized MERN stack and Electron with Realm DB for offline support.","Successfully completed various projects within specified timelines, ensuring 100% client satisfaction.","Enhanced communication skills and overall performance through collaboration with multiple clients.","Took on the role of training new talent in MERN stack technology, elevating my capabilities as a team leader and a more senior."]},{title:"Full Stack Developer",company:"Codelink Infotech",duration:"May 2022 - Dec 2023",description:["Sharpened problem-solving skills and gained a robust full-stack foundation.","Collaborated with the team to develop an ERP system for the company, which is now actively in use.","Worked on various projects involving both frontend and backend development.","Developed and maintained web applications using the MERN stack.","Implemented responsive design and ensured cross-browser compatibility."]}];var f=()=>{let[e,t]=(0,n.useState)(null);return(0,r.jsx)("section",{id:"experience",className:"py-20 bg-background",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center text-foreground mb-12",children:"Work Experience"}),(0,r.jsx)("div",{className:"space-y-6",children:u.map((a,i)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2*i},className:"bg-card rounded-lg shadow-md overflow-hidden",children:[(0,r.jsxs)("div",{className:"p-6 cursor-pointer flex justify-between items-center",onClick:()=>t(e===i?null:i),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(x.I8D,{className:"text-primary mr-4",size:24}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-card-foreground",children:a.title}),(0,r.jsx)("p",{className:"text-muted-foreground",children:a.company})]})]}),(0,r.jsx)(s.E.div,{animate:{rotate:e===i?180:0},transition:{duration:.3},children:(0,r.jsx)(x.RiI,{className:"text-primary",size:18})})]}),(0,r.jsx)(o.M,{children:e===i&&(0,r.jsxs)(s.E.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"px-6 pb-6",children:[(0,r.jsx)("p",{className:"text-muted-foreground mb-4",children:a.duration}),(0,r.jsx)("ul",{className:"list-disc list-inside space-y-2",children:a.description.map((e,t)=>(0,r.jsx)("li",{className:"text-card-foreground",children:e},t))})]})})]},i))})]})})},g=a(2909);let y=[{name:"HTML",icon:x.gtO,color:"text-orange-500 dark:text-orange-400"},{name:"CSS",icon:x.r8,color:"text-blue-500 dark:text-blue-400"},{name:"JavaScript",icon:x.zPb,color:"text-yellow-500 dark:text-yellow-400"},{name:"TypeScript",icon:g.WZi,color:"text-blue-600 dark:text-blue-500"},{name:"React",icon:x.huN,color:"text-blue-400 dark:text-blue-300"},{name:"Next.js",icon:g.Xou,color:"text-black dark:text-white"},{name:"Node.js",icon:x.jPo,color:"text-green-500 dark:text-green-400"},{name:"Express",icon:g.AmJ,color:"text-gray-500 dark:text-gray-400"},{name:"MongoDB",icon:g.t$b,color:"text-green-600 dark:text-green-500"},{name:"MySQL",icon:x.i1q,color:"text-blue-800 dark:text-blue-700"},{name:"Tailwind CSS",icon:g.YnA,color:"text-teal-500 dark:text-teal-400"},{name:"Redux",icon:g.PoL,color:"text-purple-600 dark:text-purple-500"}];var j=()=>(0,r.jsx)("section",{id:"skills",className:"py-20 bg-background text-foreground",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center text-foreground mb-12",children:"My Skills"}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:y.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1*t},className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"text-5xl mb-4 ".concat(e.color),children:(0,r.jsx)(e.icon,{})}),(0,r.jsx)("p",{className:"text-foreground font-medium",children:e.name})]},t))})]})});let b=[{title:"Six Fintech",description:"Implemented tables for forex, crypto, stocks, ETFs, and MTFs using API data. Integrated TradingView charts and various other chart types.",tech:"React JS, Material UI, Redux Toolkit",image:"/v2.portfolio/placeholder.svg",link:"#"},{title:"Hydrus",description:"Designed components, integrated APIs, and managed data through charts, tables, and forms. Generated reports on survey data and facilitated media uploading using AWS S3.",tech:"React JS, GraphQL, AWS Amplify, Lambda Functions, Ant Design",image:"/v2.portfolio/projects/hydrus.png",link:"https://www.hydrus.ai"},{title:"HRM",description:"Developed user and admin features for leave management, payroll, and more. Created APIs and integrated email functionality.",tech:"TypeScript, Metronic, Redux Toolkit, Formik & Yup, MERN Stack, Job Queue",image:"/v2.portfolio/projects/hrm.png",link:"https://hrm-h12f.onrender.com"},{title:"YourPromate",description:"Developed a project management tool with features to oversee employees, projects, tasks, and teams. Introduced bidirectional sliders for listing project tasks.",tech:"Next.js, TypeScript, Redux Toolkit, Formik & Yup, Lodash",image:"/v2.portfolio/projects/your-promate.png",link:"https://yp-next.vercel.app/"},{title:"SkyLudo",description:"Integrated payment gateways, managed user and admin panels, implemented online and offline Aadhar KYC, socket connections, and push notifications.",tech:"Material UI, Bootstrap, MERN Stack",image:"/v2.portfolio/placeholder.svg",link:"https://skyludo.com"},{title:"HyperGrid",description:"Developed a product with multiple games like escape the lava, find the color, red light green light, sharp shooter and human vs zombies using mern stack technologies with electron for desktop app and realm db for offline database.",tech:"MERN Stack, Electron, Realm DB",image:"/v2.portfolio/projects/hyper-grid.jpeg",link:"https://skyludo.com"}];var v=()=>(0,r.jsx)("section",{id:"projects",className:"py-20 bg-background text-foreground",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center text-foreground mb-12",children:"My Projects"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:b.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},className:"bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg",children:[(0,r.jsx)(d.default,{src:e.image||"/v2.portfolio/placeholder.svg",alt:e.title,width:400,height:200,className:"w-full h-48 object-cover"}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-foreground mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-muted-foreground mb-4",children:e.description}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:e.tech})]})]},t))})]})}),N=()=>{let e=async e=>{e.preventDefault()};return(0,r.jsx)("section",{id:"contact",className:"py-20 bg-background text-foreground",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Get in Touch"}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8",children:[(0,r.jsxs)(s.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-full md:w-1/2",children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:"Contact Information"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)(s.E.p,{className:"flex items-center text-muted-foreground",whileHover:{scale:1.05,color:"var(--primary)"},children:[(0,r.jsx)(x.SRX,{className:"mr-2 text-primary"}),"narendrasinghks2019@gmail.com"]}),(0,r.jsxs)(s.E.p,{className:"flex items-center text-muted-foreground",whileHover:{scale:1.05,color:"var(--primary)"},children:[(0,r.jsx)(x.I7T,{className:"mr-2 text-primary"}),"+91 6378949412"]}),(0,r.jsxs)(s.E.p,{className:"flex items-center text-muted-foreground",whileHover:{scale:1.05,color:"var(--primary)"},children:[(0,r.jsx)(x.Nh4,{className:"mr-2 text-primary"}),"Adajan Gam, Surat"]})]})]}),(0,r.jsx)(s.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-full md:w-1/2",children:(0,r.jsxs)("form",{onSubmit:e,className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-foreground font-medium mb-2",children:"Name"}),(0,r.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-foreground font-medium mb-2",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"message",className:"block text-foreground font-medium mb-2",children:"Message"}),(0,r.jsx)("textarea",{id:"message",name:"message",rows:4,className:"w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground",required:!0})]}),(0,r.jsx)(s.E.button,{type:"submit",className:"bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Send Message"})]})})]})]})})},k=()=>(0,r.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,r.jsx)("div",{className:"container mx-auto px-6",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[(0,r.jsxs)("div",{className:"mb-4 md:mb-0 flex gap-4 items-center",children:[(0,r.jsx)(x.Sq9,{size:20}),(0,r.jsxs)("p",{children:[new Date().getFullYear()," Narendra Singh. All rights reserved."]})]}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)("a",{href:"https://linkedin.com/in/narendra-singh-982a2b247",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400 transition duration-300",children:(0,r.jsx)(x.ltd,{size:24})}),(0,r.jsx)("a",{href:"https://github.com/narendra-singh-chauhan",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400 transition duration-300",children:(0,r.jsx)(x.hJX,{size:24})}),(0,r.jsx)("a",{href:"https://leetcode.com/u/narendra-singh",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-300 transition duration-300",children:(0,r.jsx)(x.tvD,{size:24})})]})]})})});let w=[{degree:"Bachelor of Computer Applications",institution:"Smt Devkiba Mohansinhji Chauhan College of Commerce & Science",year:"2019 - 2022",description:"Focused on computer science fundamentals and application development."},{degree:"Higher Secondary Education",institution:"Gujarat Secondary and Higher Secondary Education Board",year:"2017 - 2019",description:"Completed with a focus on Computer Science."},{degree:"Secondary Education",institution:"Board of Secondary Education, Rajasthan",year:"2016 - 2017",description:"Completed general education with distinction."}];var E=()=>(0,r.jsx)("section",{id:"education",className:"py-20 bg-background text-foreground",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Education"}),(0,r.jsx)("div",{className:"space-y-8",children:w.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2*t},className:"flex flex-col md:flex-row items-start md:items-center bg-card text-card-foreground rounded-lg p-6 shadow-md",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mr-4 mb-4 md:mb-0",children:(0,r.jsx)(x.nGB,{className:"text-4xl text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold",children:e.degree}),(0,r.jsx)("p",{className:"text-muted-foreground",children:e.institution}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground mt-1",children:e.year}),(0,r.jsx)("p",{className:"mt-2",children:e.description})]})]},t))})]})});let S=[{name:"React",level:95},{name:"Node.js",level:85},{name:"JavaScript",level:95},{name:"TypeScript",level:95},{name:"MongoDB",level:90},{name:"Next.js",level:60},{name:"Express",level:95},{name:"HTML/CSS",level:85}];var C=()=>(0,r.jsx)("section",{className:"py-20 bg-background text-foreground",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Skills Matrix"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:S.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1*t},className:"bg-card text-card-foreground rounded-lg p-6 shadow-md",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-2",children:e.name}),(0,r.jsxs)("div",{className:"relative pt-1",children:[(0,r.jsx)("div",{className:"flex mb-2 items-center justify-between",children:(0,r.jsx)("div",{children:(0,r.jsxs)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground",children:[e.level,"%"]})})}),(0,r.jsx)("div",{className:"flex h-2 mb-4 overflow-hidden rounded bg-primary/20",children:(0,r.jsx)(s.E.div,{initial:{width:0},animate:{width:"".concat(e.level,"%")},transition:{duration:1,delay:.1*t},className:"flex flex-col justify-center overflow-hidden bg-primary text-xs text-primary-foreground text-center whitespace-nowrap"})})]})]},t))})]})});function M(){return(0,r.jsx)(i.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,r.jsxs)("main",{className:"min-h-screen bg-background text-foreground",children:[(0,r.jsx)(m,{}),(0,r.jsx)(h,{}),(0,r.jsx)(f,{}),(0,r.jsx)(E,{}),(0,r.jsx)(j,{}),(0,r.jsx)(C,{}),(0,r.jsx)(v,{}),(0,r.jsx)(N,{}),(0,r.jsx)(k,{})]})})}}},function(e){e.O(0,[957,422,956,699,324,971,117,744],function(){return e(e.s=1802)}),_N_E=e.O()}]);