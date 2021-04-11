(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96d33b7a"],{"1dde":function(t,e,i){var n=i("d039"),s=i("b622"),r=i("2d00"),o=s("species");t.exports=function(t){return r>=51||!n((function(){var e=[],i=e.constructor={};return i[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2e44":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quiz"},[t.quizDisplay?i("b-container",{staticClass:"content"},[i("QuizArea",{attrs:{options:t.options},on:{returnToOptions:t.endQuiz}})],1):i("b-container",{staticClass:"content"},[i("Options",{on:{setOptions:t.setOptions}}),i("b-row",[i("b-col"),t.settingsValid?i("b-col",[i("b-btn",{attrs:{variant:"success",size:"lg"},on:{click:t.beginQuiz}},[t._v(" Start Quiz ")])],1):t._e(),i("b-col")],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"options"},[i("b-container",[i("b-row",[i("b-col"),i("b-col",{staticClass:"text-right"},[t._v("Question Options:")]),i("b-col",{staticClass:"text-left"},[i("b-form-checkbox-group",{attrs:{options:t.contentOptions,size:"lg",stacked:""},model:{value:t.contentSelect,callback:function(e){t.contentSelect=e},expression:"contentSelect"}})],1),i("b-col")],1),i("br"),i("b-row",[i("b-col"),i("b-col",{staticClass:"text-right"},[t._v("Question Display:")]),i("b-col",{staticClass:"text-left"},[i("b-form-checkbox-group",{attrs:{options:t.displayOptions,size:"lg",stacked:""},model:{value:t.displaySelect,callback:function(e){t.displaySelect=e},expression:"displaySelect"}})],1),i("b-col")],1),i("br"),i("b-row",[i("b-col"),i("b-col",{staticClass:"text-right"},[t._v("Answer Types:")]),i("b-col",{staticClass:"text-left"},[i("b-form-checkbox-group",{attrs:{options:t.typeOptions,size:"lg",stacked:""},model:{value:t.typeSelect,callback:function(e){t.typeSelect=e},expression:"typeSelect"}})],1),i("b-col")],1),i("br"),i("b-row",[i("b-col"),i("b-col",{staticClass:"text-center"},[i("b-form-group",[i("b-form-radio-group",{attrs:{id:"btn-radios-2",options:t.timeOptions,"button-variant":"outline-primary",size:"lg",name:"radio-btn-outline",buttons:""},model:{value:t.timeSelect,callback:function(e){t.timeSelect=e},expression:"timeSelect"}})],1),"#"==t.timeSelect?i("div",[i("b-row",[i("b-col",{staticClass:"my-auto"},[t._v("Number of Questions:")]),i("b-col",[i("b-form-input",{attrs:{type:"number",min:"1",max:t.numberOfQuestionsMax},model:{value:t.numberOfQuestionsString,callback:function(e){t.numberOfQuestionsString=e},expression:"numberOfQuestionsString"}}),t._v(t._s(t.numberOfQuestionsValue)+" question(s) ")],1)],1)],1):"Timed"==t.timeSelect?i("div",[i("b-row",[i("b-col",{staticClass:"my-auto text-right"},[t._v("Overall:")]),i("b-col",[i("b-form-input",{attrs:{type:"number",min:t.overallTimeMin,max:t.overallTimeMax},model:{value:t.overallTimeString,callback:function(e){t.overallTimeString=e},expression:"overallTimeString"}}),t._v(t._s(t.overallTimeValue)+" minute(s) ")],1)],1),i("br"),i("b-row",[i("b-col",{staticClass:"my-auto text-right"},[t._v("Question:")]),i("b-col",[i("b-form-input",{attrs:{type:"number",min:t.questionTimeMin,max:t.questionTimeMax},model:{value:t.questionTimeString,callback:function(e){t.questionTimeString=e},expression:"questionTimeString"}}),t._v(t._s(t.questionTimeValue)+" second(s) ")],1)],1)],1):"Unlimited"==t.timeSelect?i("div",[i("b-row",[i("b-col",{staticClass:"my-auto text-right"},[t._v("Mistake Limit:")]),i("b-col",[i("b-form-input",{attrs:{type:"number",min:t.mistakeLimitMin,max:t.mistakeLimitMax},model:{value:t.mistakeLimitString,callback:function(e){t.mistakeLimitString=e},expression:"mistakeLimitString"}}),t._v(t._s(t.mistakeLimitValue)+" mistake(s) ")],1)],1)],1):t._e()],1),i("b-col")],1),i("br")],1)],1)},o=[],a={name:"Options",computed:{selectedOptions:function(){return{answerTypes:this.typeSelect,questionDisplay:this.displaySelect,questionContent:this.contentSelect,timeOption:this.timeSelect,numberOfQuestions:this.numberOfQuestionsValue,overallTime:this.overallTimeValue,questionTimeValue:this.questionTimeValue,mistakeLimitValue:this.mistakeLimitValue}},overallTimeValue:function(){return this.numberCheck(this.overallTimeString,this.overallTimeDefault,this.overallTimeMin,this.overallTimeMax)},questionTimeValue:function(){return this.numberCheck(this.questionTimeString,this.questionTimeDefault,this.questionTimeMin,this.questionTimeMax)},numberOfQuestionsValue:function(){return this.numberCheck(this.numberOfQuestionsString,this.numberOfQuestionsDefault,this.numberOfQuestionsMin,this.numberOfQuestionsMax)},mistakeLimitValue:function(){return this.numberCheck(this.mistakeLimitString,this.mistakeLimitDefault,this.mistakeLimitMin,this.mistakeLimitMax)}},data:function(){return{typeOptions:["Multichoice Romaji","Multichoice Hiragana","Multichoice Katakana"],typeSelect:["Multichoice Romaji"],contentOptions:["Symbol"],contentSelect:["Symbol"],displayOptions:["Romaji","Hiragana","Katakana"],displaySelect:["Hiragana"],timeOptions:["#","Timed","Unlimited"],timeSelect:"Unlimited",numberOfQuestionsString:"10",numberOfQuestionsDefault:10,numberOfQuestionsMin:1,numberOfQuestionsMax:1e4,overallTimeString:"2",overallTimeDefault:2,overallTimeMin:1,overallTimeMax:60,questionTimeString:"20",questionTimeDefault:20,questionTimeMin:5,questionTimeMax:60,mistakeLimitString:"5",mistakeLimitDefault:5,mistakeLimitMin:1,mistakeLimitMax:1e4}},mounted:function(){this.$emit("setOptions",this.selectedOptions)},methods:{numberCheck:function(t,e,i,n){var s=parseInt(t);return s?s<i?i:s>n?n:s:e}},watch:{selectedOptions:function(t){this.$emit("setOptions",t)}}},u=a,c=i("2877"),l=Object(c["a"])(u,r,o,!1,null,null,null),m=l.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quizArea"},[i("br"),i("b-btn",{attrs:{variant:"danger"},on:{click:t.endGame}},[t._v("End Quiz")]),"ended"!=t.gameState?i("div",{attrs:{id:"questionUI"}},[i("br"),i("b-container",[i("b-row",[i("b-col",[i("h5",[t._v(t._s(t.formattedTime))])]),i("b-col",[i("h5",[t._v(t._s(t.questionsAnsweredCorrectly)+" / "+t._s(t.questionsAnswered))])])],1),i("br"),i("Question",{attrs:{question:t.currentQuestion},on:{answerQuestion:t.answerQuestion}}),i("b-row",{staticStyle:{"min-height":"80px"}},[i("b-col",[i("b-alert",{attrs:{variant:t.currentAnswerCorrect?"success":"danger"},model:{value:t.displayFooter,callback:function(e){t.displayFooter=e},expression:"displayFooter"}},[i("h5",[t._v(t._s(t.currentAnswerCorrect?"Correct!":"Incorrect"))]),i("p",{staticStyle:{"font-weight":"bold"}},[t._v(" "+t._s(t.currentQuestion.answer[t.currentQuestion.displayType])+" ")]),i("b-btn",{attrs:{block:"",pill:"",variant:"primary",size:"lg"},on:{click:t.displayNextQuestion}},[t._v(" Next Question "),i("b-icon",{attrs:{icon:"arrow-right"}})],1)],1)],1)],1)],1)],1):i("div",{attrs:{id:"resultsUI"}},[i("br"),i("br"),i("br"),i("br"),i("b-container",[i("b-row",[i("b-col",[i("h3",[t._v("Game Over")])])],1),i("br"),i("br"),(t.options.timeOption,i("b-row",[i("b-col",[i("h3",[t._v(" "+t._s(t.formattedTime)+" ")])])],1)),i("br"),i("b-row",[i("b-col",[i("h3",[t._v(t._s(t.questionsAnsweredCorrectly)+" / "+t._s(t.questionsAnswered))])])],1),i("b-row",[i("b-col",[i("b-btn",{attrs:{variant:"secondary"},on:{click:t.returnToOptions}},[t._v("Options")])],1)],1),i("br"),i("br"),i("br")],1)],1)],1)},d=[],b=(i("7db0"),i("4fad"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"question"},[i("b-row",[i("b-col",[i("h1",[t._v(t._s(t.question.answer[t.question.displayType]))])])],1),i("b-row",[i("b-col",[i("b-container",t._l(t.rowNum,(function(e){return i("b-row",{key:e},[t._l(2,(function(n){return i("b-col",{key:n},[t.choiceArray[2*e+n-3]?i("b-btn",{attrs:{block:"",pill:"",variant:t.getButtonVariant(2*e+n-3),disabled:t.disabledState,size:"lg"},on:{click:function(i){return t.answer(2*e+n-3)}}},[t._v(" "+t._s(t.choiceArray[2*e+n-3][t.answerDisplay])+" ")]):t._e()],1)})),i("br"),i("br"),i("br")],2)})),1)],1)],1)],1)}),f=[],p=(i("99af"),i("a434"),{name:"Question",props:{question:Object},computed:{rowNum:function(){return this.choiceArray.length?Math.ceil(this.choiceArray.length/2):0},choiceArray:function(){var t=[];return t=t.concat(this.question.choices),this.setAnswerIndex(),t.splice(this.answerIndex,0,this.question.answer),t},answerDisplay:function(){switch(this.question.answerType){case"Multichoice Romaji":return"Romaji";case"Multichoice Hiragana":return"Hiragana";case"Multichoice Katakana":return"Katakana";default:return""}}},data:function(){return{answerIndex:void 0,disabledState:!1}},methods:{answer:function(t){this.$emit("answerQuestion",t===this.answerIndex),this.disabledState=!0},setAnswerIndex:function(){var t=Math.floor(Math.random()*(this.question.choices.length+1));this.answerIndex=t},getButtonVariant:function(t){return!1===this.disabledState?"outline-primary":t!==this.answerIndex?"danger":t===this.answerIndex?"success":void 0}},watch:{question:function(){this.disabledState=!1}}}),v=p,y=Object(c["a"])(v,b,f,!1,null,null,null),g=y.exports,w=i("82b1"),S={name:"QuizArea",components:{Question:g},props:{options:Object},computed:{footerVariant:function(){return this.currentAnswerCorrect?"success":"danger"}},data:function(){return{questionsAnsweredCorrectly:0,questionsAnswered:0,ticker:void 0,formattedTime:"00:00:00",currentTimer:0,timerState:"stopped",gameState:"ended",currentQuestion:void 0,currentAnswerCorrect:!1,displayFooter:!1}},mounted:function(){this.startGame()},methods:{startGame:function(){this.gameState="ongoing",this.displayNextQuestion(),this.startTimer()},endGame:function(){this.stopTimer(),this.gameState="ended"},displayNextQuestion:function(){this.displayFooter=!1,this.currentAnswerCorrect=!1;var t=this.options.questionContent[Math.floor(Math.random()*this.options.questionContent.length)];switch(t){case"Symbol":this.getRandomSymbol(),this.currentQuestion=this.buildSymbolQuestion();break;default:break}},startTimer:function(){var t=this;this.clearTimer(),this.timerState="started","Timed"==this.options.timeOption&&(this.ticker=setInterval((function(){t.currentTimer--,t.formattedTime=t.formatTime(t.currentTimer)}),1e3)),"Unlimited"!=this.options.timeOption&&"#"!=this.options.timeOption||(this.ticker=setInterval((function(){t.currentTimer++,t.formattedTime=t.formatTime(t.currentTimer)}),1e3))},stopTimer:function(){clearInterval(this.ticker),this.timerState="stopped"},clearTimer:function(){switch(this.stopTimer(),this.options.timeOption){case"#":break;case"Timed":this.currentTimer=60*this.options.overallTime;break;default:break}},formatTime:function(t){var e=new Date(null);return e.setSeconds(t),e.toISOString().substring(11,19)},getRandomSymbol:function(){var t=Object.entries(w.Gojūon),e=Object.entries(t[Math.floor(Math.random()*t.length)][1].columns),i=e[Math.floor(Math.random()*e.length)];return i[1]},buildSymbolQuestion:function(){var t=this,e={};e.displayType=this.options.questionDisplay[Math.floor(Math.random()*this.options.questionDisplay.length)],e.answerType=this.options.answerTypes[Math.floor(Math.random()*this.options.answerTypes.length)],e.answer=this.getRandomSymbol();var i=[],n=function(){var n=t.getRandomSymbol();n.Hiragana===e.answer.Hiragana||i.find((function(t){return t.Hiragana===n.Hiragana}))||i.push(n)};while(i.length<3)n();return e.choices=i,e},answerQuestion:function(t){this.questionsAnswered++,t?(this.playSound("akiNoises/yes".concat(this.questionsAnsweredCorrectly%9,".mp3")),this.currentAnswerCorrect=!0,this.questionsAnsweredCorrectly++):(this.currentAnswerCorrect=!1,this.playSound("akiNoises/no".concat((this.questionsAnswered-this.questionsAnsweredCorrectly)%16,".mp3"))),"#"===this.options.timeOption&&this.questionsAnswered>=this.options.numberOfQuestions||"Unlimited"===this.options.timeOption&&this.options.mistakeLimitValue<=this.questionsAnswered-this.questionsAnsweredCorrectly?this.endGame():this.displayFooter=!0},playSound:function(t){if(t){var e=new Audio(i("1771")("./"+t));e.play()}},returnToOptions:function(){this.$emit("returnToOptions")}},watch:{currentTimer:function(t){"Timed"==this.options.timeOption&&t<=0&&this.endGame()}}},T=S,x=Object(c["a"])(T,h,d,!1,null,null,null),O=x.exports,k={name:"Quiz",components:{Options:m,QuizArea:O},computed:{settingsValid:function(){return!!(this.options.answerTypes&&this.options.answerTypes.length&&this.options.questionContent&&this.options.questionContent.length)}},data:function(){return{options:{},quizDisplay:!1}},methods:{setOptions:function(t){this.options=t},beginQuiz:function(){this.quizDisplay=!0},endQuiz:function(){this.quizDisplay=!1}}},q=k,_=Object(c["a"])(q,n,s,!1,null,null,null);e["default"]=_.exports},"4fad":function(t,e,i){var n=i("23e7"),s=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"65f0":function(t,e,i){var n=i("861d"),s=i("e8b5"),r=i("b622"),o=r("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"6f53":function(t,e,i){var n=i("83ab"),s=i("df75"),r=i("fc6a"),o=i("d1e7").f,a=function(t){return function(e){var i,a=r(e),u=s(a),c=u.length,l=0,m=[];while(c>l)i=u[l++],n&&!o.call(a,i)||m.push(t?[i,a[i]]:a[i]);return m}};t.exports={entries:a(!0),values:a(!1)}},"7db0":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").find,r=i("44d2"),o=i("ae40"),a="find",u=!0,c=o(a);a in[]&&Array(1)[a]((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},8418:function(t,e,i){"use strict";var n=i("c04e"),s=i("9bf2"),r=i("5c6c");t.exports=function(t,e,i){var o=n(e);o in t?s.f(t,o,r(0,i)):t[o]=i}},"99af":function(t,e,i){"use strict";var n=i("23e7"),s=i("d039"),r=i("e8b5"),o=i("861d"),a=i("7b0b"),u=i("50c4"),c=i("8418"),l=i("65f0"),m=i("1dde"),h=i("b622"),d=i("2d00"),b=h("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",v=d>=51||!s((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=m("concat"),g=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},w=!v||!y;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,i,n,s,r,o=a(this),m=l(o,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?o:arguments[e],g(r)){if(s=u(r.length),h+s>f)throw TypeError(p);for(i=0;i<s;i++,h++)i in r&&c(m,h,r[i])}else{if(h>=f)throw TypeError(p);c(m,h++,r)}return m.length=h,m}})},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),r=i("a691"),o=i("50c4"),a=i("7b0b"),u=i("65f0"),c=i("8418"),l=i("1dde"),m=i("ae40"),h=l("splice"),d=m("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var i,n,l,m,h,d,y=a(this),g=o(y.length),w=s(t,g),S=arguments.length;if(0===S?i=n=0:1===S?(i=0,n=g-w):(i=S-2,n=f(b(r(e),0),g-w)),g+i-n>p)throw TypeError(v);for(l=u(y,n),m=0;m<n;m++)h=w+m,h in y&&c(l,m,y[h]);if(l.length=n,i<n){for(m=w;m<g-n;m++)h=m+n,d=m+i,h in y?y[d]=y[h]:delete y[d];for(m=g;m>g-n+i;m--)delete y[m-1]}else if(i>n)for(m=g-n;m>w;m--)h=m+n-1,d=m+i-1,h in y?y[d]=y[h]:delete y[d];for(m=0;m<i;m++)y[m+w]=arguments[m+2];return y.length=g-n+i,l}})},ae40:function(t,e,i){var n=i("83ab"),s=i("d039"),r=i("5135"),o=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(r(a,t))return a[t];e||(e={});var i=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:u,m=r(e,1)?e[1]:void 0;return a[t]=!!i&&!s((function(){if(c&&!n)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:u}):t[1]=1,i.call(t,l,m)}))}},b727:function(t,e,i){var n=i("0366"),s=i("44ad"),r=i("7b0b"),o=i("50c4"),a=i("65f0"),u=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,l=4==t,m=6==t,h=7==t,d=5==t||m;return function(b,f,p,v){for(var y,g,w=r(b),S=s(w),T=n(f,p,3),x=o(S.length),O=0,k=v||a,q=e?k(b,x):i||h?k(b,0):void 0;x>O;O++)if((d||O in S)&&(y=S[O],g=T(y,O,w),t))if(e)q[O]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(q,y)}else switch(t){case 4:return!1;case 7:u.call(q,y)}return m?-1:c||l?l:q}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-96d33b7a.6a6b0007.js.map