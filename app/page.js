"use client"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeCard from "./components/HomeCard";
import ScoreGraph from "./components/ScoreGraph";
import React, { useState } from "react";
import Html from "./components/Html";
import QuickStats from "./components/QuickStats";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import QuestionAnalysis from "./components/QuestionAnalysis";

const Home = () => {

  const [formData, setFormData] = useState({
    rank: '',
    percentile: '',
    score: ''
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-20 lg:pb-0">
      <Header />

      <div className="flex flex-col-reverse lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-4 bg-gray-100">
          <h2 className="text-black m-2 font-light">Skill Test</h2>

          <div className="flex flex-col md:flex-row w-full h-full flex-1 gap-4">
            {/* Left side */}
            <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-3/5">
              <HomeCard>
                <Html formData={formData} setFormData={setFormData}/>
              </HomeCard>
              <HomeCard title="Quick Statistics">
              <QuickStats formData={formData}/>
              </HomeCard>
              <HomeCard title="Comparison Graph">
                <ScoreGraph />
              </HomeCard>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-2/5">
              <HomeCard title="Syllabus Wise Analysis">
              <SyllabusAnalysis />
              </HomeCard>
              <HomeCard title="Question Analysis"> 
               <QuestionAnalysis formData={formData} total={15}/>
              </HomeCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
