// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import loginImg from "../../assets/LoginImg.png";   // put your login image in src/assets

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleAuth = () => setIsLogin(!isLogin);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden">
//         {/* Left Image */}
//         <div className="md:w-1/2 w-full">
//           <img
//             src={isLogin ? loginImg : loginImg}
//             alt="Auth"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="md:w-1/2 w-full flex justify-center items-center p-8">
//           <div className="w-full max-w-md">
//             {/* Tabs */}
//             <div className="flex justify-center space-x-10 mb-6 border-b border-gray-200">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`pb-2 text-lg font-semibold ${
//                   isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`pb-2 text-lg font-semibold ${
//                   !isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Register
//               </button>
//             </div>

//             {/* LOGIN FORM */}
//             {isLogin ? (
//               <form className="space-y-4">
//                 <p className="text-xs text-gray-500">
//                   For the purpose of industry registration, your details are required and will be stored.
//                 </p>
//                 <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                 <TextField
//                   label="Password"
//                   type={showPassword ? "text" : "password"}
//                   fullWidth
//                   variant="outlined"
//                   size="small"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={() => setShowPassword(!showPassword)}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <div className="flex items-center justify-between">
//                   <FormControlLabel control={<Checkbox />} label="Remember me" />
//                   <span className="text-sm text-gray-700 cursor-pointer hover:text-[#4F1c51]">
//                     Forgot Password
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-500 text-center">
//                   By Continuing, I agree to <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> & <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                 </p>
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     backgroundColor: "#6b21a8",
//                     "&:hover": { backgroundColor: "#5b1990" },
//                   }}
//                 >
//                   Login
//                 </Button>

//                 {/* OR Divider */}
//                 <div className="flex items-center my-2">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="px-2 text-gray-500 text-sm">or</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 {/* Google Login */}
//                 <Button
//                   variant="outlined"
//                   fullWidth
//                   startIcon={
//                     <img
//                       src="https://www.svgrepo.com/show/355037/google.svg"
//                       alt="Google"
//                       className="w-5 h-5"
//                     />
//                   }
//                 >
//                   Sign in with Google
//                 </Button>

//                 <p className="text-center text-sm mt-4">
//                   Already have an Account?{" "}
//                   <span
//                     className="text-[#4F1c51] font-semibold cursor-pointer"
//                     onClick={toggleAuth}
//                   >
//                     Create Account
//                   </span>
//                 </p>
//               </form>
//             ) : (
//               /* REGISTER FORM */
//               <form className="space-y-4">
//                 <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
//                 <p className="text-xs text-gray-500">
//                   For the purpose of industry registration, your details are required and will be stored.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <TextField label="Name" fullWidth variant="outlined" size="small" />
//                   <TextField label="Mobile Number" fullWidth variant="outlined" size="small" />
//                 </div>
//                 <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                 <TextField
//                   label="Password"
//                   type={showPassword ? "text" : "password"}
//                   fullWidth
//                   variant="outlined"
//                   size="small"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={() => setShowPassword(!showPassword)}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <TextField
//                   label="Confirm Password"
//                   type="password"
//                   fullWidth
//                   variant="outlined"
//                   size="small"
//                 />
//                 <p className="text-xs text-gray-500 text-center">
//                   By Continuing, I agree to <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> & <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                 </p>
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     backgroundColor: "#6b21a8",
//                     "&:hover": { backgroundColor: "#5b1990" },
//                   }}
//                 >
//                   Register
//                 </Button>

//                 {/* OR Divider */}
//                 <div className="flex items-center my-2">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="px-2 text-gray-500 text-sm">OR</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 <p className="text-center text-sm mt-4">
//                   Already have an account?{" "}
//                   <span
//                     className="text-[#4F1c51] font-semibold cursor-pointer"
//                     onClick={toggleAuth}
//                   >
//                     Sign in
//                   </span>
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import loginImg from "../../assets/LoginImg.png";   // your login image
// import registerImg from "../../assets/RegisterImg.png"; // your register image

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleAuth = () => setIsLogin(!isLogin);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden h-[600px]">

//         {/* Left Image */}
//         <div className="md:w-1/2 w-full h-full">
//           <img
//             src={isLogin ? loginImg : registerImg}
//             alt="Auth"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="md:w-1/2 w-full h-full flex justify-center items-center p-10 bg-white">
//           <div className="w-full max-w-md h-full flex flex-col">

//             {/* Tabs */}
//             <div className="flex justify-center space-x-10 mb-6 border-b border-gray-200">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`pb-2 text-lg font-semibold ${isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                   }`}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`pb-2 text-lg font-semibold ${!isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                   }`}
//               >
//                 Register
//               </button>
//             </div>

//             {/* Content Form */}
//             <div className="flex-1 flex flex-col justify-center">
//               {isLogin ? (
//                 /* LOGIN FORM */
//                 <form className="space-y-5">
//                   <p className="text-xs text-gray-500">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>
//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />

//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     sx={{ mt: 2 }} // Material UI ka spacing system (mt = marginTop)
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <div className="flex items-center justify-between">
//                     <FormControlLabel control={<Checkbox />} label="Remember me" />
//                     <span className="text-sm text-gray-700 cursor-pointer hover:text-[#4F1c51]">
//                       Forgot Password
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-500 text-center">
//                     By Continuing, I agree to <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> & <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Login
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">or</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   {/* Google Login */}
//                   <Button
//                     variant="outlined"
//                     fullWidth
//                     startIcon={
//                       <img
//                         src="https://www.svgrepo.com/show/355037/google.svg"
//                         alt="Google"
//                         className="w-5 h-5"
//                       />
//                     }
//                   >
//                     Sign in with Google
//                   </Button>

//                   <p className="text-center text-sm mt-4">
//                     Don’t have an Account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Create Account
//                     </span>
//                   </p>
//                 </form>
//               ) : (
//                 /* REGISTER FORM */
//                 <form className="space-y-5">
//                   <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
//                   <p className="text-xs text-gray-500">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <TextField label="Name" fullWidth variant="outlined" size="small" />
//                     <TextField label="Mobile Number" fullWidth variant="outlined" size="small" />
//                   </div>
//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                      sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     type="password"
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                      sx={{ mt: 2 }}
//                   />
//                   <p className="text-xs text-gray-500 text-center mt-4">
//                     By Continuing, I agree to <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> & <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Register
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">OR</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   <p className="text-center text-sm mt-4">
//                     Already have an account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Sign in
//                     </span>
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import loginImg from "../../assets/LoginImg.png";
// import registerImg from "../../assets/RegisterImg.png";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleAuth = () => setIsLogin(!isLogin);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden h-[600px]">

//         {/* Left Image */}
//         <div className="md:w-1/2 w-full h-full">
//           <img
//             src={isLogin ? loginImg : registerImg}
//             alt="Auth"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="md:w-1/2 w-full h-full flex justify-center items-center p-10">
//           <div className="w-full max-w-md h-full flex flex-col">

//             {/* Tabs */}
//             <div className="flex justify-center space-x-10 mb-6 border-b border-gray-200">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`pb-2 text-lg font-semibold ${
//                   isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`pb-2 text-lg font-semibold ${
//                   !isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Register
//               </button>
//             </div>

//             {/* Content Form */}
//             <div className="flex-1 flex flex-col justify-center">
//               {isLogin ? (
//                 /* LOGIN FORM */
//                 <form className="space-y-5">
//                   <p className="text-xs text-gray-500">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>
//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                      sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <div className="flex items-center justify-between">
//                     <FormControlLabel control={<Checkbox />} label="Remember me" />
//                     <span className="text-sm text-gray-700 cursor-pointer hover:text-[#4F1c51]">
//                       Forgot Password
//                     </span>
//                   </div>

//                   <p className="text-xs text-gray-500 text-center">
//                     By Continuing, I agree to{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Login
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">or</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   {/* Google Login */}
//                   <Button
//                     variant="outlined"
//                     fullWidth
//                     startIcon={
//                       <img
//                         src="https://www.svgrepo.com/show/355037/google.svg"
//                         alt="Google"
//                         className="w-5 h-5"
//                       />
//                     }
//                   >
//                     Sign in with Google
//                   </Button>

//                   <p className="text-center text-sm mt-4">
//                     Don’t have an Account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Create Account
//                     </span>
//                   </p>
//                 </form>
//               ) : (
//                 /* REGISTER FORM */
//                 <form className="space-y-5">
//                   <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
//                   <p className="text-xs text-gray-500">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <TextField label="Name" fullWidth variant="outlined" size="small" />
//                     <TextField label="Mobile Number" fullWidth variant="outlined" size="small" />
//                   </div>

//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                      sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     type="password"
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                      sx={{ mt: 2 }}
//                       InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <p className="text-xs text-gray-500 text-center mt-4">
//                     By Continuing, I agree to{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Register
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">OR</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   <p className="text-center text-sm mt-4">
//                     Already have an account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Sign in
//                     </span>
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import loginImg from "../../assets/LoginImg.png";
// import registerImg from "../../assets/RegisterImg.png";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleAuth = () => setIsLogin(!isLogin);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden md:h-[600px]">

//         {/* Left Image */}
//         <div className="w-full md:w-1/2 h-52 md:h-auto">
//           <img
//             src={isLogin ? loginImg : registerImg}
//             alt="Auth"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="w-full md:w-1/2 flex justify-center items-center p-6 sm:p-8 md:p-10">
//           <div className="w-full max-w-md flex flex-col">

//             {/* Tabs */}
//             <div className="flex justify-center space-x-10 mb-6 border-b border-gray-200">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`pb-2 text-lg font-semibold ${
//                   isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`pb-2 text-lg font-semibold ${
//                   !isLogin
//                     ? "border-b-2 border-purple-700 text-[#4F1c51]"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Register
//               </button>
//             </div>

//             {/* Content Form */}
//             <div className="flex-1 flex flex-col justify-center overflow-y-auto">
//               {isLogin ? (
//                 /* LOGIN FORM */
//                 <form className="space-y-5">
//                   <p className="text-xs text-gray-500 leading-snug">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>
//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <div className="flex items-center justify-between flex-wrap">
//                     <FormControlLabel control={<Checkbox />} label="Remember me" />
//                     <span className="text-sm text-gray-700 cursor-pointer hover:text-[#4F1c51]">
//                       Forgot Password
//                     </span>
//                   </div>

//                   <p className="text-xs text-gray-500 text-center">
//                     By Continuing, I agree to{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Login
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">or</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   {/* Google Login */}
//                   <Button
//                     variant="outlined"
//                     fullWidth
//                     startIcon={
//                       <img
//                         src="https://www.svgrepo.com/show/355037/google.svg"
//                         alt="Google"
//                         className="w-5 h-5"
//                       />
//                     }
//                   >
//                     Sign in with Google
//                   </Button>

//                   <p className="text-center text-sm mt-4">
//                     Don’t have an Account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Create Account
//                     </span>
//                   </p>
//                 </form>
//               ) : (
//                 /* REGISTER FORM */
//                 <form className="space-y-5">
//                   <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
//                   <p className="text-xs text-gray-500 leading-snug">
//                     For the purpose of industry registration, your details are required and will be stored.
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <TextField label="Name" fullWidth variant="outlined" size="small" />
//                     <TextField label="Mobile Number" fullWidth variant="outlined" size="small" />
//                   </div>

//                   <TextField label="E-mail" fullWidth variant="outlined" size="small" />
//                   <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     sx={{ mt: 2 }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <p className="text-xs text-gray-500 text-center mt-4">
//                     By Continuing, I agree to{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
//                     <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
//                   </p>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#6b21a8",
//                       "&:hover": { backgroundColor: "#5b1990" },
//                     }}
//                   >
//                     Register
//                   </Button>

//                   {/* OR Divider */}
//                   <div className="flex items-center my-2">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="px-2 text-gray-500 text-sm">OR</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   <p className="text-center text-sm mt-4">
//                     Already have an account?{" "}
//                     <span
//                       className="text-[#4F1c51] font-semibold cursor-pointer"
//                       onClick={toggleAuth}
//                     >
//                       Sign in
//                     </span>
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginImg from "../../assets/LoginImg.png";
import registerImg from "../../assets/RegisterImg.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden md:h-[600px]">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-52 md:h-auto">
          <img
            src={isLogin ? loginImg : registerImg}
            alt="Auth"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md flex flex-col">

            {/* Tabs */}
            <div className="flex justify-center space-x-10 border-b border-gray-200 pb-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`text-lg font-semibold cursor-pointer ${
                  isLogin
                    ? "border-b-2 border-purple-700 text-[#4F1c51]"
                    : "text-gray-500"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`text-lg font-semibold cursor-pointer ${
                  !isLogin
                    ? "border-b-2 border-purple-700 text-[#4F1c51]"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>

            {/* Content Form */}
            <div className="flex-1 flex flex-col justify-center overflow-y-auto">
              {isLogin ? (
                /* LOGIN FORM */
                <form className="space-y-5 pt-6">
                  <p className="text-xs text-gray-500 leading-snug">
                    For the purpose of industry registration, your details are required and will be stored.
                  </p>

                  <TextField label="E-mail" fullWidth variant="outlined" size="small" />

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2 }}
                  
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <div className="flex items-center justify-between flex-wrap">
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <span className="text-sm text-gray-700 cursor-pointer hover:text-[#4F1c51]">
                      Forgot Password
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    By Continuing, I agree to{" "}
                    <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
                    <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
                  </p>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#6b21a8",
                      "&:hover": { backgroundColor: "#5b1990" },
                    }}
                  >
                    Login
                  </Button>

                  {/* OR Divider */}
                  <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Google Login */}
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    }
                  >
                    Sign in with Google
                  </Button>

                  <p className="text-center text-sm mt-2">
                    Don’t have an Account?{" "}
                    <span
                      className="text-[#4F1c51] font-semibold cursor-pointer"
                      onClick={toggleAuth}
                    >
                      Create Account
                    </span>
                  </p>
                </form>
              ) : (
                /* REGISTER FORM */
                <form className="space-y-5 pt-6">
                  <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
                  <p className="text-xs text-gray-500 leading-snug">
                    For the purpose of industry registration, your details are required and will be stored.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField label="Name" fullWidth variant="outlined" size="small" />
                    <TextField label="Mobile Number" fullWidth variant="outlined" size="small" />
                  </div>

                  <TextField label="E-mail" fullWidth variant="outlined" size="small" />

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <p className="text-xs text-gray-500 text-center mt-2">
                    By Continuing, I agree to{" "}
                    <span className="text-[#4F1c51] cursor-pointer">Terms of Use</span> &{" "}
                    <span className="text-[#4F1c51] cursor-pointer">Privacy Policy</span>.
                  </p>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#6b21a8",
                      "&:hover": { backgroundColor: "#5b1990" },
                    }}
                  >
                    Register
                  </Button>

                  {/* OR Divider */}
                  <div className="flex items-center mt-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-2 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                     {/* Google Login */}
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    }
                  >
                    Sign up with Google
                  </Button>

                  <p className="text-center text-sm mt-2">
                    Already have an account?{" "}
                    <span
                      className="text-[#4F1c51] font-semibold cursor-pointer"
                      onClick={toggleAuth}
                    >
                      Sign in
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
