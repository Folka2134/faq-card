import { useState } from "react";
import "./App.css";

function App() {
  const [selectedQ, setSelectedQ] = useState();

  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-b from-purple-500 to-purple-800">
      <div className="h-auto w-96 flex flex-col items-center bg-white p-4">
        <div>logo</div>
        <h1>FAQ</h1>
        <div>
          <div>
            <h4
              className={`flex hover:text-[#F47B56] cursor-pointer ${
                selectedQ == "q1" && "font-semibold"
              } `}
              onClick={() => setSelectedQ("q1")}
            >
              How many team members can I invite?
              <span className="flex items-center mx-6">
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={selectedQ == "q1" && "rotate-180"}
                >
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </h4>
            {selectedQ == "q1" && (
              <p id="q1" className="text-sm text-gray-500">
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            )}
          </div>
          <div>
            <h4
              className={`flex hover:text-[#F47B56] cursor-pointer ${
                selectedQ == "q2" && "font-semibold"
              } `}
              onClick={() => setSelectedQ("q2")}
            >
              What is the maximum file upload size?
              <span className="flex items-center mx-6">
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={selectedQ == "q2" && "rotate-180"}
                >
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </h4>
            {selectedQ == "q2" && (
              <p id="q2" className="text-sm text-gray-500">
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            )}
          </div>
          <div>
            <h4
              className={`flex hover:text-[#F47B56] cursor-pointer ${
                selectedQ == "q3" && "font-semibold"
              } `}
              onClick={() => setSelectedQ("q3")}
            >
              How do I reset my password?
              <span className="flex items-center mx-6">
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={selectedQ == "q3" && "rotate-180"}
                >
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </h4>
            {selectedQ == "q3" && (
              <p id="q3" className="text-sm text-gray-500">
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            )}
          </div>
          <div>
            <h4
              className={`flex hover:text-[#F47B56] cursor-pointer ${
                selectedQ == "q4" && "font-semibold"
              } `}
              onClick={() => setSelectedQ("q4")}
            >
              Can I cancel my subscription?
              <span className="flex items-center mx-6">
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={selectedQ == "q4" && "rotate-180"}
                >
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </h4>
            {selectedQ == "q4" && (
              <p id="q4" className="text-sm text-gray-500">
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p>
            )}
          </div>
          <div>
            <h4
              className={`flex hover:text-[#F47B56] cursor-pointer ${
                selectedQ == "q5" && "font-semibold"
              } `}
              onClick={() => setSelectedQ("q5")}
            >
              Do you provide additional support?
              <span className="flex items-center mx-6">
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={selectedQ == "q5" && "rotate-180"}
                >
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </h4>
            {selectedQ == "q5" && (
              <p id="q5" className="text-sm text-gray-500">
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
