"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6060],{97714:function(e,t,n){n.d(t,{default:function(){return d}});var r=n(57437),a=n(2265),i=n(19615),o=n(51123),l=n(93953),c=n(45652);let s="https://cdn.pika.art";function d(e){let{effect:t,image:n,skip:d}=e,[u,p]=(0,a.useState)(0),[h,_]=(0,a.useState)(d),[f,g]=(0,a.useState)(!0),m=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=setInterval(()=>{p(t=>t<100?Math.min(t+4,100):(clearInterval(e),t))},100);return()=>clearInterval(e)},[]),(0,a.useEffect)(()=>{if(h){var e;null===(e=m.current)||void 0===e||e.play()}},[h]),(0,r.jsxs)("div",{className:"relative aspect-video h-auto max-h-[360px] w-auto shrink-0 overflow-hidden rounded-[.625rem]",children:[(0,r.jsx)("video",{className:"h-full w-full object-cover",loop:!0,muted:f,poster:"".concat(s,"/feature/v1.5/cached_results/").concat(t,"_").concat(n,"_poster.jpg"),playsInline:!0,controls:!1,ref:m,children:(0,r.jsx)("source",{src:"".concat(s,"/feature/v1.5/cached_results/").concat(t,"_").concat(n,".mp4"),type:"video/mp4"})}),(0,r.jsx)(o.Z,{className:"absolute bottom-2 right-2",onClick:()=>g(!f),secondary:!0,small:!0,icon:f?(0,r.jsx)(l.Z,{className:"h-4"}):(0,r.jsx)(c.Z,{className:"h-4"})}),h?null:(0,r.jsxs)("div",{className:"absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 bg-dark-elements-upper",children:[(0,r.jsx)(i.Z,{percentage:u,onComplete:e=>{100===e&&_(!0)}}),(0,r.jsx)("p",{className:"text-center text-m-mobile text-white text-opacity-60 xl:text-m",children:"Your video is generating"})]})]})}},89360:function(e,t,n){var r=n(57437),a=n(2265),i=n(51123),o=n(38563),l=n(89593),c=n(3548),s=n(18920);t.Z=function(){let[e,t]=(0,a.useState)(!1),n=(0,l.e)();return(0,r.jsxs)(i.Z,{type:"button",onClick:function(){t(!0),(0,c.Z)({eventName:s.hO.SignIn,properties:{provider:"discord"}}),n.auth.signInWithOAuth({provider:"discord",options:{redirectTo:"".concat(document.location.origin,"/auth/callback")}}).finally(()=>t(!1))},loading:e,className:"flex items-center justify-center gap-2 !bg-white hover:!bg-accent-hover",children:[(0,r.jsx)(o.Z,{className:"fill-[#5865F2]"}),(0,r.jsx)("span",{className:"text-m-mobile font-extra-thick text-dark-background lg:text-m",children:"Sign in with Discord"})]})}},20441:function(e,t,n){n.d(t,{w:function(){return h},o:function(){return p}});var r=n(57437),a=n(2265),i=n(51123),o=e=>(0,r.jsx)("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M18.3333 3.83398L10.8583 8.58398C10.6011 8.74517 10.3036 8.83066 10 8.83066C9.6964 8.83066 9.39894 8.74517 9.14167 8.58398L1.66667 3.83398M3.33333 1.33398H16.6667C17.5871 1.33398 18.3333 2.08018 18.3333 3.00065V13.0007C18.3333 13.9211 17.5871 14.6673 16.6667 14.6673H3.33333C2.41286 14.6673 1.66667 13.9211 1.66667 13.0007V3.00065C1.66667 2.08018 2.41286 1.33398 3.33333 1.33398Z",stroke:e.color||"#0D0D0D",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});n(83079);var l=(0,n(12119).$)("637d5cdf3dd6eb3495a8848330653adc4f4c5f2b"),c=n(9763),s=n(82603),d=n(3548),u=n(18920);function p(){let[e,t]=(0,a.useState)("idle"),[n,o]=(0,a.useState)(null);async function p(e){e.preventDefault(),t("loading"),(0,d.Z)({eventName:u.hO.SignIn,properties:{provider:"email",position:"inner"}});let n=new FormData(e.currentTarget),{error:r}=await l(n);r?(t("error"),o(r)):t("success")}return(0,r.jsxs)("form",{onSubmit:p,className:"flex flex-col gap-5",children:[(0,r.jsx)(c.Z,{name:"email",label:"Email",placeholder:"example@gmail.com",type:"email",required:!0}),(0,r.jsx)(s.Z,{name:"password",label:"Password",placeholder:"Your password",required:!0,hasForgotPassword:!0}),(0,r.jsx)("input",{type:"text",name:"to",value:"/",hidden:!0,readOnly:!0}),(0,r.jsx)(i.Z,{type:"submit",className:"w-full",loading:"loading"===e,children:(0,r.jsx)("span",{className:"text-m-mobile font-extra-thick text-dark-background lg:text-m",children:"Sign in"})}),n?(0,r.jsxs)("p",{className:"text-s text-danger-primary",children:[n,"."]}):null]})}function h(e){let{onClick:t}=e;return(0,r.jsxs)(i.Z,{type:"button",onClick:t,className:"flex w-full items-center justify-center gap-2",children:[(0,r.jsx)(o,{}),(0,r.jsx)("span",{className:"text-m-mobile font-extra-thick text-dark-background lg:text-m",children:"Sign in with an email"})]})}},72052:function(e,t,n){var r=n(57437),a=n(2265),i=n(51123),o=n(89593),l=n(3548),c=n(18920),s=n(70576);t.Z=function(){let[e,t]=(0,a.useState)(!1),n=(0,o.e)();return(0,r.jsxs)(i.Z,{type:"button",onClick:function(){t(!0),(0,l.Z)({eventName:c.hO.SignIn,properties:{provider:"facebook"}}),n.auth.signInWithOAuth({provider:"facebook",options:{redirectTo:"".concat(document.location.origin,"/auth/callback")}}).finally(()=>t(!1))},loading:e,className:"flex items-center justify-center gap-2 !bg-white hover:!bg-accent-hover",children:[(0,r.jsx)(s.Z,{className:"fill-[#4267B2]"}),(0,r.jsx)("span",{className:"text-m-mobile font-extra-thick text-dark-background lg:text-m",children:"Sign in with Facebook"})]})}},82774:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(57437),a=n(2265),i=n(51123),o=n(89593),l=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e,children:[(0,r.jsx)("path",{d:"M18.1711 8.36775H17.4998V8.33317H9.99984V11.6665H14.7094C14.0223 13.6069 12.1761 14.9998 9.99984 14.9998C7.23859 14.9998 4.99984 12.7611 4.99984 9.99984C4.99984 7.23859 7.23859 4.99984 9.99984 4.99984C11.2744 4.99984 12.434 5.48067 13.3169 6.26609L15.674 3.909C14.1857 2.52192 12.1948 1.6665 9.99984 1.6665C5.39775 1.6665 1.6665 5.39775 1.6665 9.99984C1.6665 14.6019 5.39775 18.3332 9.99984 18.3332C14.6019 18.3332 18.3332 14.6019 18.3332 9.99984C18.3332 9.44109 18.2757 8.89567 18.1711 8.36775Z",fill:"#FFC107"}),(0,r.jsx)("path",{d:"M2.62744 6.12109L5.36536 8.129C6.10619 6.29484 7.90036 4.99984 9.99994 4.99984C11.2745 4.99984 12.4341 5.48067 13.317 6.26609L15.6741 3.909C14.1858 2.52192 12.1949 1.6665 9.99994 1.6665C6.79911 1.6665 4.02327 3.47359 2.62744 6.12109Z",fill:"#FF3D00"}),(0,r.jsx)("path",{d:"M9.9998 18.3331C12.1523 18.3331 14.1081 17.5094 15.5869 16.1698L13.0077 13.9873C12.1429 14.645 11.0862 15.0007 9.9998 14.9998C7.8323 14.9998 5.99189 13.6177 5.29855 11.689L2.58105 13.7827C3.96022 16.4815 6.76105 18.3331 9.9998 18.3331Z",fill:"#4CAF50"}),(0,r.jsx)("path",{d:"M18.1712 8.36808H17.5V8.3335H10V11.6668H14.7096C14.3809 12.5903 13.7889 13.3973 13.0067 13.9881L13.0079 13.9872L15.5871 16.1697C15.4046 16.3356 18.3333 14.1668 18.3333 10.0002C18.3333 9.44141 18.2758 8.896 18.1712 8.36808Z",fill:"#1976D2"})]}),c=n(3548),s=n(18920),d=function(){let[e,t]=(0,a.useState)(!1),n=(0,o.e)();return(0,r.jsxs)(i.Z,{type:"button",onClick:function(){(0,c.Z)({eventName:s.hO.SignIn,properties:{provider:"google"}}),t(!0),n.auth.signInWithOAuth({provider:"google",options:{redirectTo:"".concat(document.location.origin,"/auth/callback")}}).finally(()=>t(!1))},loading:e,className:"flex items-center justify-center gap-2 !bg-white hover:!bg-accent-hover",children:[(0,r.jsx)(l,{}),(0,r.jsx)("span",{className:"text-m-mobile font-extra-thick text-dark-background lg:text-m",children:"Sign in with Google"})]})}},82603:function(e,t,n){var r=n(57437),a=n(2265),i=n(84772),o=n.n(i),l=n(54661),c=n(27648),s=n(70364);let d=a.forwardRef((e,t)=>{let{className:n,label:i,isLightBackground:d=!1,errorMessage:u,setErrorFunction:p,containerClassName:h,hasForgotPassword:_=!1,hasReveal:f=!1,...g}=e,[m,C]=(0,a.useState)("password"),x=o()(h,{"relative w-full tablet:h-16 h-[3.375rem] rounded-[.625rem]":d,"flex flex-col gap-2":!d}),w=o()("rounded-lg h-full w-full",{"w-full px-5 tablet:px-10 py-4 bg-light-primary text-dark-background placeholder:text-dark-tags":d,"bg-dark-elements px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed":!d,"border border-dark-background":!u,"border border-danger-primary":u},n);return(0,r.jsxs)("div",{className:x,children:[i&&(0,r.jsxs)("label",{className:o()("flex justify-between text-s-mobile lg:text-s",{"text-dark-background":d,"text-white":!d}),htmlFor:g.id,children:[(0,r.jsx)("span",{children:i}),_?(0,r.jsx)(c.default,{prefetch:!0,href:"/forgot-password",className:"underline opacity-60",children:"Forgot Password?"}):null]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{ref:t,className:w,type:m,...g}),f?(0,r.jsx)("button",{type:"button",className:"absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer",onClick:()=>{"password"===m?C("text"):C("password")},children:"password"===m?(0,r.jsx)(s.Z,{closed:!0,strokeOpacity:"0.6"}):(0,r.jsx)(s.Z,{strokeOpacity:"0.6"})}):null]}),u&&(0,r.jsx)(l.Z,{message:u,setErrorFunction:p})]})});d.displayName="PasswordInput",t.Z=d},48086:function(e,t,n){var r=n(57437);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"white",strokeWidth:"1.5",...e,children:(0,r.jsx)("path",{d:"M9.99935 15.8332L4.16602 9.99984M4.16602 9.99984L9.99935 4.1665M4.16602 9.99984H15.8327",strokeLinecap:"round",strokeLinejoin:"round"})})}},38563:function(e,t,n){var r=n(57437);n(2265),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"white",...e,children:(0,r.jsx)("path",{d:"M12.55 3C12.3716 3.32065 12.2125 3.65179 12.0738 3.99163C10.7107 3.77532 9.3221 3.77532 7.95895 3.99163C7.82022 3.65179 7.66121 3.32065 7.48277 3C6.19871 3.22014 4.95043 3.61439 3.7722 4.17192C1.6653 7.2228 0.709802 10.9267 1.07687 14.6201C2.44991 15.6558 3.99094 16.4457 5.63198 16.9549C6.00566 16.4597 6.33915 15.9351 6.62925 15.3863C6.09385 15.1883 5.57924 14.9377 5.09291 14.6381C5.2263 14.5491 5.35247 14.4496 5.47026 14.3406C6.88842 15.026 8.44228 15.382 10.0164 15.382C11.5905 15.382 13.1444 15.026 14.5625 14.3406C14.6883 14.4488 14.8141 14.548 14.9399 14.6381C14.4509 14.9353 13.9368 15.1887 13.4035 15.3954C13.6816 15.9566 14.0062 16.4933 14.3738 17C16.0128 16.4925 17.5512 15.7024 18.92 14.6652C19.2958 10.9711 18.3396 7.26417 16.2246 4.217C15.0596 3.64793 13.8237 3.2386 12.55 3ZM7.03355 12.5106C6.58396 12.4782 6.16435 12.2723 5.86281 11.9362C5.56127 11.6 5.40126 11.1597 5.41635 10.7077C5.39898 10.255 5.55821 9.81347 5.8602 9.47679C6.16219 9.14011 6.58313 8.93488 7.03355 8.9047C7.48398 8.93488 7.90492 9.14011 8.20691 9.47679C8.5089 9.81347 8.66813 10.255 8.65075 10.7077C8.66813 11.1603 8.5089 11.6019 8.20691 11.9385C7.90492 12.2752 7.48398 12.4805 7.03355 12.5106ZM12.9992 12.5106C12.5496 12.4782 12.13 12.2723 11.8285 11.9362C11.5269 11.6 11.3669 11.1597 11.382 10.7077C11.3646 10.255 11.5239 9.81347 11.8259 9.47679C12.1279 9.14011 12.5488 8.93488 12.9992 8.9047C13.4505 8.93262 13.8728 9.13719 14.1752 9.47439C14.4777 9.81158 14.6361 10.2544 14.6164 10.7077C14.6361 11.1609 14.4777 11.6037 14.1752 11.9409C13.8728 12.2781 13.4505 12.4827 12.9992 12.5106Z"})})},70364:function(e,t,n){var r=n(57437);t.Z=function(e){return e.closed?(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"white",...e,children:[(0,r.jsx)("g",{clipPath:"url(#clip0_11382_7230)",children:(0,r.jsx)("path",{d:"M8.23366 8.23268C7.98804 8.46156 7.79103 8.73756 7.65439 9.04422C7.51775 9.35089 7.44428 9.68193 7.43835 10.0176C7.43243 10.3533 7.49418 10.6867 7.61992 10.998C7.74565 11.3093 7.9328 11.5921 8.1702 11.8295C8.40759 12.0669 8.69037 12.254 9.00167 12.3798C9.31296 12.5055 9.64639 12.5672 9.98207 12.5613C10.3177 12.5554 10.6488 12.4819 10.9555 12.3453C11.2621 12.2086 11.5381 12.0116 11.767 11.766M8.94199 4.23268C9.29308 4.18894 9.64652 4.16668 10.0003 4.16602C14.4846 4.16602 16.9991 7.61325 17.9222 9.2077C18.2077 9.70072 18.2044 10.2995 17.922 10.7943C17.6342 11.2985 17.3066 11.7796 16.942 12.2327M5.50866 5.50768C4.1004 6.46691 2.93125 7.7306 2.08512 9.20064C1.79909 9.69758 1.794 10.3004 2.08158 10.7964C3.00731 12.3933 5.52113 15.8327 10.0003 15.8327C11.5969 15.837 13.1593 15.3703 14.492 14.491M1.66699 1.66602L18.3337 18.3327",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_11382_7230",children:(0,r.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]}):(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"white",...e,children:[(0,r.jsx)("path",{d:"M2.05967 10.7585C1.78698 10.2839 1.78698 9.71481 2.05967 9.24021C2.96722 7.66066 5.4853 4.16602 10.0003 4.16602C14.5153 4.16602 17.0334 7.66066 17.941 9.24021C18.2137 9.71481 18.2137 10.2839 17.941 10.7585C17.0334 12.338 14.5153 15.8327 10.0003 15.8327C5.4853 15.8327 2.96722 12.338 2.05967 10.7585Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M10.0003 12.4993C11.381 12.4993 12.5003 11.3801 12.5003 9.99935C12.5003 8.61864 11.381 7.49935 10.0003 7.49935C8.61961 7.49935 7.50033 8.61864 7.50033 9.99935C7.50033 11.3801 8.61961 12.4993 10.0003 12.4993Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}},19103:function(e,t,n){var r=n(57437);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"white",stroke:"none",...e,children:(0,r.jsx)("path",{d:"M10.475 2.34378C10.4075 2.13853 10.2158 1.99987 9.9997 2C9.78364 2.00013 9.59211 2.13902 9.52485 2.34435L7.94151 7.17768L7.94087 7.17966C7.88412 7.35536 7.78647 7.5151 7.65595 7.64571C7.52544 7.77633 7.36578 7.87409 7.19012 7.93098L2.34378 9.52503C2.13853 9.59254 1.99987 9.78424 2 10.0003C2.00013 10.2164 2.13902 10.4079 2.34435 10.4752L7.17768 12.0585L7.17966 12.0591C7.35536 12.1159 7.5151 12.2135 7.64571 12.344C7.77633 12.4746 7.8741 12.6342 7.93099 12.8099L7.9317 12.8121L9.52503 17.6562C9.59254 17.8615 9.78424 18.0001 10.0003 18C10.2164 17.9999 10.4079 17.861 10.4752 17.6557L12.0585 12.8223L12.0591 12.8203C12.1159 12.6446 12.2135 12.4849 12.344 12.3543C12.4746 12.2237 12.6342 12.1259 12.8099 12.069L12.8121 12.0683L17.6562 10.475C17.8615 10.4075 18.0001 10.2158 18 9.9997C17.9999 9.78364 17.861 9.59211 17.6557 9.52485L12.8223 7.94151L12.8203 7.94087C12.6446 7.88412 12.4849 7.78647 12.3543 7.65595C12.2237 7.52544 12.1259 7.36578 12.069 7.19012L10.475 2.34378Z"})})}},18920:function(e,t,n){var r,a,i,o,l,c,s,d,u,p,h,_,f,g,m,C,x,w;n.d(t,{CT:function(){return a},Ch:function(){return r},Gm:function(){return s},SQ:function(){return c},hO:function(){return o},l6:function(){return u},rK:function(){return l},ty:function(){return d},xN:function(){return p},y7:function(){return k}}),(h=r||(r={})).GenerateVideo="generate_video",h.ReGenerateVideo="regenerate_video",h.UpScaleVideo="upscale_video",h.AdjustVideo="adjust_video",h.FirstGeneration="new_user_generating_4_times",h.DeleteVideo="delete_video",(_=a||(a={})).ContentViolation="content_violation",_.RateLimited="rate_limited",_.UpgradeNeeded="upgrade_needed",_.NoEarlyAccess="no_early_access",_.NoWebCredits="no_web_credits",_.DailyLimitReached="daily_limit_reached",(f=i||(i={})).CreateFolder="create_folder",f.DeleteFolder="delete_folder",f.RenameFolder="rename_folder",f.AddVideoToFolder="add_to_folder",f.RemoveVideoFromFolder="remove_from_folder",(g=o||(o={})).ClickTryPika="try_pika",g.SignIn="sign_in",g.SignInSuccess="sign_in_success",g.SignUpWithEmail="sign_up_with_email",g.SignUpSuccess="sign_up_success",g.InvalidPassword="invalid_password_for_sign_up",(m=l||(l={})).CopyPrompt="copy_prompt",m.ShareOnTwitter="share_twitter",m.ShareOnFacebook="share_facebook",m.ShareLink="share",m.DownloadVideo="download_video",m.ShareOnWhatsApp="share_whatsapp",m.ShareOnNative="share_native",(C=c||(c={})).ClickUpgradeCTA="upgrade_cta_click",C.TogglePlanPeriod="plan_period_toggle_click",C.ShowPlanFeatures="show_plan_features_button_click",C.ClosePlanFeatures="close_plan_features_button_click",C.FreeUserClickSubscribe="free_user_subscribe_button_click",C.FreeUserSubscribeSuccess="free_user_subscribe_success",C.ClickUpgrade="upgrade_plan_button_click",C.ConfirmUpgrade="upgrade_plan_confirm_button_click",C.UpgradeSuccess="upgrade_plan_success",C.ClickDowngrade="downgrade_plan_button_click",C.ConfirmDowngrade="downgrade_plan_confirm_button_click",C.DowngradeScheduled="downgrade_plan_scheduled",C.DowngradeSuccess="downgrade_plan_success",C.ClickCancel="cancel_plan_button_click",C.ConfirmCancel="cancel_plan_confirm_button_click",C.CancelScheduled="cancel_plan_scheduled",C.CancelSuccess="cancel_plan_success",C.ClickCancelPlanChange="cancel_plan_change_button_click",C.ConfirmCancelPlanChange="cancel_plan_change_confirm_button_click",C.ClickManagePayment="manage_payment_button_click",C.ClickBuyCredits="buy_credits_button_click",C.ConfirmBuyCredits="buy_credits_confirm_button_click",(x=s||(s={})).ModelSelectUse="model_select_use",x.ModelModeSelectUse="model_mode_select_use",x.PikaffectButtonClick="pikaffect_button_click",x.PikaffectUse="pikaffect_use",x.TryWithPikaffectButtonClick="try_with_pikaffect_button_click",x.OnboardingRandomImageButtonClick="onboarding_random_image_button_click",x.GenerationLoadingUpgradeButtonClick="generation_loading_upgrade_button_click",x.TryNewModelButtonClick="try_new_model_button_click",x.ShowOnboardingIntroModal="show_onboarding_intro_modal",x.ShowVideoReadyModal="show_video_ready_modal",x.GenerationLoadingScreenShown="generation_loading_screen_shown",x.OnboardingStepViewed="onboarding_step_viewed",x.TryModelTwoPointOneButtonClick="try_model_two_point_one_button_click";let k="suggest_prompt";(w=d||(d={})).TrialEffectUse="trial_effect_use",w.TrialImageUse="trial_image_use",w.TrialUploadYourOwnImageButtonClick="trial_upload_your_own_image_button_click",w.TrialGenerateButtonClick="trial_generate_button_click",(u||(u={})).IngredientsTemplateUse="ingredients_template_use",(p||(p={})).PageView="page_view"},3548:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(51974),a=n(29734),i=n.n(a),o=n(13786);function l(e){let{eventName:t,userId:n,email:a,fullName:l,properties:c,formData:s}=e;try{let e={};s&&s.forEach((t,n)=>{if(t instanceof File)e[n]="File: ".concat(t.name);else try{let r=JSON.parse(t);e[n]=r}catch(r){e[n]=t.toString()}}),(0,o.sendGTMEvent)({event:t,value:c,formData:e}),r.ZP.capture(t,{...c,...e,userId:n,email:a,fullName:l}),i().track(t,{...c,...e,userId:n,email:a,fullName:l})}catch(e){console.error("Error capturing form data with PostHog:",e)}}},89930:function(e,t,n){n.d(t,{Provider:function(){return p},default:function(){return h}});var r=n(2265),a="undefined"==typeof window?r.useEffect:r.useLayoutEffect,i="__wrap_b",o="__wrap_n",l="__wrap_o",c=(e,t,n)=>{let r=(n=n||document.querySelector('[data-br="'.concat(e,'"]'))).parentElement,a=e=>n.style.maxWidth=e+"px";n.style.maxWidth="";let i=r.clientWidth,o=r.clientHeight,l=i/2-.25,c=i+.5,s;if(i){for(a(l),l=Math.max(n.scrollWidth,l);l+1<c;)a(s=Math.round((l+c)/2)),r.clientHeight===o?c=s:l=s;a(c*t+i*(1-t))}n.__wrap_o||"undefined"!=typeof ResizeObserver&&(n.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+n.dataset.brr,n)})).observe(r)},s=c.toString(),d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n&&(n="self.".concat(o,"!=1&&").concat(n)),r.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(e?"":"self.".concat(o,"=self.").concat(o,"||").concat('(self.CSS&&CSS.supports("text-wrap","balance")?1:2)',";self.").concat(i,"=").concat(s,";"))+n},nonce:t})},u=r.createContext({preferNative:!0,hasProvider:!1}),p=e=>{let{preferNative:t=!0,nonce:n,children:a}=e,i=r.useMemo(()=>({preferNative:t,hasProvider:!0}),[t]);return r.createElement(u.Provider,{value:i},d(!1,n),a)},h=e=>{let{ratio:t=1,preferNative:n,nonce:s,children:p,...h}=e,_=r.useMemo(()=>r.useId,[])(),f=r.useRef(),g=r.useContext(u),m=null!=n?n:g.preferNative,C=h.as||"span";return a(()=>{m&&1===self[o]||f.current&&(self[i]=c)(0,t,f.current)},[p,m,t]),a(()=>{if(!(m&&1===self[o]))return()=>{if(!f.current)return;let e=f.current[l];e&&(e.disconnect(),delete f.current[l])}},[m]),r.createElement(r.Fragment,null,r.createElement(C,{...h,"data-br":_,"data-brr":t,ref:f,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:m?"balance":"initial"},suppressHydrationWarning:!0},p),d(g.hasProvider,s,"self.".concat(i,'("').concat(_,'",').concat(t,")")))}}}]);