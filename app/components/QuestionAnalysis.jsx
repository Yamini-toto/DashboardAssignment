'use client'
import DonutChart from "./DonoughtChar"; 

const QuestionAnalysis = ({ formData , total }) => {
  console.log("QuestionAnalysis", formData)
  return <>
  <div className="text-lg text-blue-600 font-semibold mt-1">
        {formData?.score || 10}/{total}
      </div>
      <p className="text-xs mt-1">
        You scored {formData?.score || 10} question{formData.score !== 1 ? "s" : ""} correct out of {total}.
        However it still needs some improvements.
      </p>
      <DonutChart formData={formData} total={total} />
    </>
};

export default QuestionAnalysis;