!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"displayStudents",(function(){return r}));var r=function(e){var n=document.createElement("table"),t=document.createElement("thead"),r=document.createElement("tr"),o=document.createElement("tbody");r.insertAdjacentHTML("beforeend","<td>FirstName</td"),r.insertAdjacentHTML("beforeend","<td>Location</td"),t.insertAdjacentElement("beforeend",r);for(var a=0,d=e;a<d.length;a++){var i=d[a],c=document.createElement("tr");c.insertAdjacentHTML("beforeend","<td>"+i.firstName+"</td>"),c.insertAdjacentHTML("beforeend","<td>"+i.location+"</td>"),o.insertAdjacentElement("beforeend",c)}n.insertAdjacentElement("beforeend",t),n.insertAdjacentElement("beforeend",o),document.body.insertAdjacentElement("beforeend",n)};r([{firstName:"isaiah",lastName:"Woko",age:20,location:"PH, Nigeria"},{firstName:"Tope",lastName:"Akin",age:20,location:"Lagos, Nigeria"}]);var o=document.createElement("style");o.innerHTML="\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    font-weight: bold;\n  }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n\n  td:nth-child(1) {\n    text-align: center;\n  }\n",document.head.insertAdjacentElement("beforeend",o),document.title="Task 0"}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImRpc3BsYXlTdHVkZW50cyIsInN0dWRlbnRzIiwidGFibGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWJsZUhlYWQiLCJoZWFkUm93IiwidGFibGVCb2R5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3R1ZGVudCIsImJvZHlSb3ciLCJmaXJzdE5hbWUiLCJsb2NhdGlvbiIsImJvZHkiLCJsYXN0TmFtZSIsImFnZSIsInN0eWxlU2hlZXRFbGVtZW50IiwiaW5uZXJIVE1MIiwiaGVhZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLCtCQzNFckQsMkRBeURhQyxFQUFrQixTQUFDQyxHQUM5QixJQUFNQyxFQUFRQyxTQUFTQyxjQUFjLFNBQy9CQyxFQUFZRixTQUFTQyxjQUFjLFNBQ25DRSxFQUFVSCxTQUFTQyxjQUFjLE1BQ2pDRyxFQUFZSixTQUFTQyxjQUFjLFNBQ3pDRSxFQUFRRSxtQkFBbUIsWUFBYSxxQkFDeENGLEVBQVFFLG1CQUFtQixZQUFhLG9CQUN4Q0gsRUFBVUksc0JBQXNCLFlBQWFILEdBRTdDLElBQXNCLFVBQUFMLEVBQUEsZUFBVSxDQUEzQixJQUFNUyxFQUFPLEtBQ1ZDLEVBQVVSLFNBQVNDLGNBQWMsTUFDdkNPLEVBQVFILG1CQUFtQixZQUFhLE9BQU9FLEVBQVFFLFVBQVMsU0FDaEVELEVBQVFILG1CQUFtQixZQUFhLE9BQU9FLEVBQVFHLFNBQVEsU0FDL0ROLEVBQVVFLHNCQUFzQixZQUFhRSxHQUcvQ1QsRUFBTU8sc0JBQXNCLFlBQWFKLEdBQ3pDSCxFQUFNTyxzQkFBc0IsWUFBYUYsR0FDekNKLFNBQVNXLEtBQUtMLHNCQUFzQixZQUFhUCxJQUduREYsRUFoRXFDLENBZFgsQ0FDeEJZLFVBQVcsU0FDWEcsU0FBVSxPQUNWQyxJQUFLLEdBQ0xILFNBQVUsZUFHYyxDQUN4QkQsVUFBVyxPQUNYRyxTQUFVLE9BQ1ZDLElBQUssR0FDTEgsU0FBVSxvQkFvRVosSUFBTUksRUFBb0JkLFNBQVNDLGNBQWMsU0FDakRhLEVBQWtCQyxVQTdEQyxtZUE4RG5CZixTQUFTZ0IsS0FBS1Ysc0JBQXNCLFlBQWFRLEdBQ2pEZCxTQUFTaUIsTUFBUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0dWRlbnQxOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6IFwiaXNhaWFoXCIsXG4gIGxhc3ROYW1lOiBcIldva29cIixcbiAgYWdlOiAyMCxcbiAgbG9jYXRpb246IFwiUEgsIE5pZ2VyaWFcIixcbn07XG5cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6IFwiVG9wZVwiLFxuICBsYXN0TmFtZTogXCJBa2luXCIsXG4gIGFnZTogMjAsXG4gIGxvY2F0aW9uOiBcIkxhZ29zLCBOaWdlcmlhXCIsXG59O1xuXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW1xuICBzdHVkZW50MSxcbiAgc3R1ZGVudDJcbl07XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBgXG4gIGh0bWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiAxMCU7XG4gIH1cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgdGhlYWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIHRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gIH1cblxuICB0ZDpudGgtY2hpbGQoMSkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuLyoqXG4gKiBEaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCBzdHVkZW50cyBpbiBhIHRhYmxlLlxuICogQHBhcmFtIHN0dWRlbnRzIFRoZSBsaXN0IG9mIHN0dWRlbnRzIHRvIGRpc3BsYXkuXG4gKiBAYXV0aG9yIEJlemFsZWVsIE9sYWt1bm9yaSA8aHR0cHM6Ly9naXRodWIuY29tL0IzemFsZWVsPlxuICovXG5leHBvcnQgY29uc3QgZGlzcGxheVN0dWRlbnRzID0gKHN0dWRlbnRzOiBBcnJheTxTdHVkZW50Pik6IHZvaWQgPT4ge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IHRhYmxlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICBoZWFkUm93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzx0ZD5GaXJzdE5hbWU8L3RkJyk7XG4gIGhlYWRSb3cuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHRkPkxvY2F0aW9uPC90ZCcpO1xuICB0YWJsZUhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBoZWFkUm93KTtcblxuICBmb3IgKGNvbnN0IHN0dWRlbnQgb2Ygc3R1ZGVudHMpIHtcbiAgICBjb25zdCBib2R5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBib2R5Um93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDx0ZD4ke3N0dWRlbnQuZmlyc3ROYW1lfTwvdGQ+YCk7XG4gICAgYm9keVJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8dGQ+JHtzdHVkZW50LmxvY2F0aW9ufTwvdGQ+YCk7XG4gICAgdGFibGVCb2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYm9keVJvdyk7XG4gIH1cblxuICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRhYmxlSGVhZCk7XG4gIHRhYmxlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgdGFibGVCb2R5KTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRhYmxlKTtcbn07XG5cbmRpc3BsYXlTdHVkZW50cyhzdHVkZW50c0xpc3QpO1xuY29uc3Qgc3R5bGVTaGVldEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGVTaGVldEVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVTaGVldDtcbmRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzdHlsZVNoZWV0RWxlbWVudCk7XG5kb2N1bWVudC50aXRsZSA9ICdUYXNrIDAnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==