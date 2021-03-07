(this["webpackJsonpH-N41K.github.io"]=this["webpackJsonpH-N41K.github.io"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),i=n(11),o=n.n(i),s=n(12),l=n.n(s),u=function(e,t){return function(){return Object(a.useEffect)((function(){return new l.a(t)})),Object(r.jsx)(e,{})}},d=n(2),h=new function e(t,n){var r=this;Object(d.a)(this,e),this.getSectionContent=function(e){return r.languages[r.actualLanguage][e].content},this.getSectionName=function(e){return r.languages[r.actualLanguage][e].name},this.changeLanguage=function(e){if(!r.isValid(e))throw new Error("Unsuported language: "+e);r.actualLanguage=e},this.isValid=function(e){return r.supportedLanguages.includes(e)},this.getSectionNames=function(){var e=r.languages[r.actualLanguage];return Object.keys(e)},this.languages=t,this.supportedLanguages=Object.keys(t),this.actualLanguage=n}({en:{aboutme:{name:"About me",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("p",{children:["Hi \ud83d\udc4b, I'm ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.github.com/H-N41K",children:"Hemendra M. Naik"}),",",Object(r.jsx)("br",{}),"I am a Computer Engineer. I am well-versed in technology and writing code to create systems that are reliable and user-friendly."]})})},skills:{name:"Skills",content:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Programming Languages :"}),"- C, Python"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Web Development Technologies :"}),"- PHP, Flask, MySQL, PostgreSQL, HTML, CSS, Javascript"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Ethereum Frameworks & related technologies :"}),"- Vyper, Solidity, Truffle, Ganache, Web3, MetaMask, Remix IDE, IPFS"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Automation Tools :"}),"- Selenium"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Video Encoding Tools :"}),"- FFmpeg"]})]})},contact:{name:"Contact me",content:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Want to discuss a project or just want to say Hi ? Drop me a message."}),Object(r.jsx)("p",{children:"Here is my contact info:"}),Object(r.jsxs)("p",{children:[" \ud83d\udcbb ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/H-N41K",children:"My Github"})]}),Object(r.jsxs)("p",{children:[" \ud83d\udce8 ",Object(r.jsx)("a",{href:"mailto:hemendranaik@gmail.com",children:"hemendranaik@gmail.com"})]})]})},resume:{name:"My Resume",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("p",{children:[" \ud83d\udcdc ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://drive.google.com/file/d/1Lvq-mkxF5l4hicZn0ltoGZasLkyfsHmS/view?usp=sharing",children:"Click here to view my resume"})]})})}}},"en"),j=h.getSectionContent,m=h.getSectionName,g=h.getSectionNames,b=h.changeLanguage,f=h.isValid,p=h.supportedLanguages,x=(n(21),function(e){return Object(r.jsx)("a",{className:"language",href:"?language="+e,children:e},e)}),O=function(){var e=p.map(x);return Object(r.jsx)("div",{className:"languages",children:e})},S=(n(22),n(10)),C={isHide:!0,textColorsSelected:0,backgroundColorsSelected:0,textColors:["#0f0","red","yellow"],backgroundColors:["rgba(0, 0, 0, 90%)","rgba(0, 0, 0, 60%)","rgba(255, 255, 255, 90%)"]},v=function(e,t){return t+1===e.length?[e[0],0]:[e[t+1],t+1]},T=function(e,t){return e.style.display=t},y=function(e){return e.style.color=function(e){var t=v(e.textColors,e.textColorsSelected),n=Object(S.a)(t,2),r=n[0],a=n[1];return e.textColorsSelected=a,r}(C)},k=function(e){return e.style.backgroundColor=function(e){var t=v(e.backgroundColors,e.backgroundColorsSelected),n=Object(S.a)(t,2),r=n[0],a=n[1];return e.backgroundColorsSelected=a,r}(C)};function w(e){return Object(r.jsx)("div",{className:"button",onClick:e.onClick,style:{color:e.color,backgroundColor:e.color,width:String(12)+"px",height:String(12)+"px",marginLeft:String(6)+"px"}})}var I=function(e){return Object(r.jsxs)("div",{id:"topBar",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(O,{}),Object(r.jsx)(w,{onClick:function(){return e=document.querySelector("div.languages"),C.isHide?T(e,"inline"):T(e,"none"),void(C.isHide=!C.isHide);var e},color:"#f00"}),Object(r.jsx)(w,{onClick:function(){return y(document.querySelector("div#terminalDialog"))},color:"#ff0"}),Object(r.jsx)(w,{onClick:function(){return k(document.querySelector("div#terminalDialog"))},color:"#0f0"})]}),Object(r.jsxs)("p",{id:"title",children:[" ",e.title," "]})]})},N=n(3),L=n(5),B=n(4),H=n(13),M=(n(23),function(e){Object(L.a)(n,e);var t=Object(B.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).setCursorStatus=function(e){e?r.setState({cursorOnStatus:!0,opacity:100}):r.setState({cursorOnStatus:!1,opacity:0})},r.changeCursorState=function(){r.setCursorStatus(!r.state.cursorOnStatus)},r.componentDidMount=function(){r.interval=setInterval((function(){r.changeCursorState()}),r.state.timeToUpdate)},r.componentWillUnmount=function(){clearInterval(r.interval)},r.state={cursorChar:"\u2588",timeToUpdate:500,cursorOnStatus:!0,opacity:100},r}return Object(N.a)(n,[{key:"render",value:function(){var e=String(this.state.opacity)+"%";return Object(r.jsx)("strong",{id:"cursor",style:{opacity:e},children:this.state.cursorChar})}}]),n}(c.a.Component)),D=(n(24),function(e){Object(L.a)(n,e);var t=Object(B.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).checkIfLeftCharToBeShowed=function(){return Boolean(""!==String(r.state.charsToBeShowed))},r.showOneChar=function(){var e=Object(H.a)(r.state.charsToBeShowed),t=e[0],n=e.slice(1),a=r.state.textInsideTerminalText+t;r.setState({textInsideTerminalText:a,charsToBeShowed:n})},r.showACharIfIsMissingACharToBeShown=function(){r.checkIfLeftCharToBeShowed()?r.showOneChar():clearInterval(r.interval)},r.componentDidMount=function(){r.interval=setInterval(r.showACharIfIsMissingACharToBeShown,r.state.timeToWaitBetweenEachChar)},r.state={timeToWaitBetweenEachChar:e.totalTime/e.text.length,textInsideTerminalText:"",charsToBeShowed:e.text.split("")},r}return Object(N.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"textTyped",children:Object(r.jsxs)("p",{id:"textTyped",children:[this.state.textInsideTerminalText,Object(r.jsx)(M,{})]})})}}]),n}(c.a.Component)),F=(n(25),function(e){Object(L.a)(n,e);var t=Object(B.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){return window.addEventListener("load",a.renderSection)},a.renderSection=function(){var e=Object(r.jsxs)(r.Fragment,{children:[" ",g().map((function(e){return Object(r.jsx)("a",{className:"sectionLinks",onClick:function(){return a.props.onClick(e)},href:"#"+e,children:m(e)},e)}))]});a.setState({sections:e})},a.state={sections:Object(r.jsx)(r.Fragment,{})},a}return Object(N.a)(n,[{key:"render",value:function(){return Object(r.jsx)("p",{className:"sections",children:this.state.sections})}}]),n}(c.a.Component)),E=function(){var e=new URLSearchParams(window.location.search).get("language"),t=navigator.language.split("-")[0];f(e)?b(e):f(t)&&b(t)},W=(n(26),function(e){Object(L.a)(n,e);var t=Object(B.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){E(),setTimeout(r.changeSection,1e3,r.state.section)},r.changeSection=function(e){r.updateSectionNameAndClearContent(e),setTimeout(r.updateSectionContent,r.state.timeToWaitTheCommadIsTyped+100,e)},r.updateSectionNameAndClearContent=function(e){r.setState({section:e,sectionContent:""}),r.updateSectionName(e)},r.updateSectionName=function(e){var t="cat "+e+".txt",n=r.state.timeToWaitTheCommadIsTyped/t.length;r.textTyped.setState({timeToWaitBetweenEachChar:n,textInsideTerminalText:"",charsToBeShowed:t.split("")}),r.textTyped.componentDidMount()},r.updateSectionContent=function(e){r.setState({sectionContent:j(e)})},r.state={timeToWaitTheCommadIsTyped:1e3,section:"aboutme",promptString:"[H-N41K@github]$ ",sectionName:"",sectionContent:""},r}return Object(N.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"outputDiv",children:[Object(r.jsxs)("div",{className:"promptDiv",children:[Object(r.jsx)("p",{id:"promptText",children:this.state.promptString}),Object(r.jsx)(D,{ref:function(t){return e.textTyped=t},totalTime:0,text:""})]}),Object(r.jsxs)("div",{id:"outputText",children:[Object(r.jsx)("br",{}),this.state.sectionContent]})]}),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(F,{onClick:this.changeSection})})]})}}]),n}(c.a.Component)),A=(n(27),u((function(){return Object(r.jsxs)("div",{id:"terminalDialog",children:[Object(r.jsx)("div",{children:Object(r.jsx)(I,{title:"Terminal"})}),Object(r.jsx)("div",{className:"terminalScreen",children:Object(r.jsx)(W,{})})]})}),{dialogId:"terminalDialog",elementThatCaptureTheClick:"topBar",centerElement:!0}));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.efba9a97.chunk.js.map