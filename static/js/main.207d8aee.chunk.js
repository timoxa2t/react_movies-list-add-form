(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),r=i(1),l=(i(15),i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/;function j(e){return!m.test(e)}var b=i(7),u=i.n(b);var h=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,o=void 0!==c&&c,d=e.validation,m=void 0===d?function(){return!1}:d,j=e.onChange,b=void 0===j?function(){}:j,h=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),O=Object(s.a)(h,1)[0],g=Object(r.useState)(!1),v=Object(s.a)(g,2),p=v[0],f=v[1],w=Object(r.useMemo)((function(){return m(i)}),[i])&&p,x=p&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:O,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":x}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return b(e.target.value)},onBlur:function(){return f(!0)}})}),x&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),w&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is not valid")})]})},O=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],b=d[1],u=Object(r.useState)(""),O=Object(s.a)(u,2),g=O[0],v=O[1],p=Object(r.useState)(""),f=Object(s.a)(p,2),w=f[0],x=f[1],M=Object(r.useState)(""),N=Object(s.a)(M,2),y=N[0],U=N[1],I=Object(r.useState)(""),T=Object(s.a)(I,2),B=T[0],_=T[1],S=[m,w,y,B];return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),!S.every((function(e){return e.trim()}))||j(y)||j(w)||(t({title:m,description:g,imgUrl:w,imdbUrl:y,imdbId:B}),b(""),v(""),x(""),U(""),_(""),c((function(e){return e+1})))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(h,{name:"title",label:"Title",value:m,onChange:b,required:!0}),Object(l.jsx)(h,{name:"description",label:"Description",value:g,onChange:v}),Object(l.jsx)(h,{name:"imgUrl",label:"Image URL",value:w,onChange:x,validation:j,required:!0}),Object(l.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:y,onChange:U,validation:j,required:!0}),Object(l.jsx)(h,{name:"imdbId",label:"Imdb ID",value:B,onChange:_,required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!S.every((function(e){return e})),children:"Add"})})})]},n)},g=i(8),v=function(){var e=Object(r.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.207d8aee.chunk.js.map