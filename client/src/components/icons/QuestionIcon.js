import React from "react";

function QuestionIcon({ width, height }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="w-5 h-5 me-4"
      width={width}
      height={height}
    >
      <path d="M211 105.997c0-34.597-38.276-58.325-71.995-36.756-6.979 4.464-9.017 13.74-4.552 20.719 4.464 6.977 13.739 9.016 20.719 4.552C168.943 85.7 181 95.057 181 105.997c0 7.434-5.534 13.819-12.873 14.852-9.764 1.374-17.127 9.882-17.127 19.789v9.359c0 8.284 6.716 15 15 15s15-6.716 15-15v-1.573c17.593-6.254 30-23.168 30-42.427z"></path>
      <circle cx="165" cy="195.995" r="15"></circle>
      <path d="M467 210.995H331.404l-.343-166.089C331.011 20.145 310.824 0 286.062 0H45C20.187 0 0 20.186 0 44.999v181.995c0 24.812 20.187 44.999 45 44.999h31v29.999c0 12.333 14.123 19.407 24 12l55.98-41.984 25.02.076v164.905c0 24.812 20.187 44.999 45 44.999h101.459l56.833 28.416c9.944 4.972 21.708-2.27 21.708-13.416v-15h61c24.813 0 45-20.186 45-44.999V255.993c0-24.812-20.187-44.998-45-44.998zm-316 30.999a14.998 14.998 0 0 0-9 3l-36 26.999v-15c0-8.284-6.716-15-15-15H45c-8.271 0-15-6.729-15-15V44.999c0-8.271 6.729-15 15-15h241.062c8.254 0 14.983 6.715 15 14.968.4 193.688.437 181.924.27 184.152-.865 7.639-7.384 13.336-14.939 13.283L151 241.994zm331 194.995c0 8.271-6.729 15-15 15h-76c-8.284 0-15 6.716-15 15v5.729l-38.292-19.146a15.004 15.004 0 0 0-6.708-1.583H226c-8.271 0-15-6.729-15-15V272.174l75.442.227c20.397 0 37.247-13.46 42.908-31.408H467c8.271 0 15 6.729 15 15z"></path>
      <path d="M436 300.992H256c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15zM436 360.991H256c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path>
    </svg>
  );
}

export default QuestionIcon;
