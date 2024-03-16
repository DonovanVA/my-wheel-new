import React, { useState } from "react";
import { questions } from "../questionbank";
import CustomButton from "../UI/CustomButton";
import BackButton from "../UI/BackButton";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState<boolean>(false);
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setRevealAnswer(false);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setRevealAnswer(false);
  };
  const handleRevealAnswer = () => {
    setRevealAnswer(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const navigation = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 10,
        alignItems: "center",
        padding: 20,
      }}
    >
      <BackButton
        onClick={() => navigation(`/my-wheel-new`)}
        text="Back"
      ></BackButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          verticalAlign: "left",
          textAlign: "left",
          justifyContent: "flex-start",
          alignItems: "left",
        }}
      >
        <h2>{currentQuestion.title}</h2>
        <p>
          {currentQuestion.details.split("\n").map((i, key) => {
            return <div key={key}>{i}</div>;
          })}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {currentQuestion.diagram && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderCollapse: "collapse",
              }}
            >
              {currentQuestion.diagram.map((item: string[], index: number) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px dotted #000",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        marginBottom: 0,
                      }}
                    >
                      <h3>{item[0]}</h3>
                    </div>
                    <div
                      style={{
                        paddingRight: "10px",

                        paddingLeft: "10px",
                        marginTop: 0,
                      }}
                    >
                      <h3>{item[1]}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentQuestion.choices.map((choice: string, index: number) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      verticalAlign: "left",
                      textAlign: "left",
                      justifyContent: "left",
                      alignItems: "left",
                    }}
                  >
                    <label>Option {index + 1}:</label>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentQuestion.choices.map((choice: string, index: number) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      verticalAlign: "left",
                      textAlign: "left",
                      justifyContent: "left",
                      alignItems: "left",
                    }}
                  >
                    <label>{choice}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
        }}
      >
        <CustomButton onClick={handlePreviousQuestion} text="Prev Question" />
        <CustomButton onClick={handleNextQuestion} text="Next Question" />
        
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          verticalAlign: "left",
          textAlign: "left",
          justifyContent: "flex-start",
          alignItems: "left",
          width: "80%",
          marginTop: 10,
        }}
      >
        {currentQuestion.appendix && (
          <i style={{ fontSize: 12 }}>
            {currentQuestion.appendix.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </i>
        )}
      </div>
    </div>
  );
};

export default Quiz;

/** 
{revealAnswer && (
  <h3>Correct Answer: {currentQuestion.correctIndex + 1}</h3>
)}
<BackButton onClick={handleRevealAnswer} text="Answer" />
*/
