import React from 'react';
import { BorderBeam } from './border-beam';

const Step = ({ number, title, description } : { number: number, title: string, description: string }) => {
  return (
    <div className="step-container text-center w-1/3 px-4">
      <div className="step-number text-white border border-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};


export const HowToUse = () => {
  return (
    <div className="how-to-use-container relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-600 bg-black shadow shadow-slate-700">
     
      <h2 className="text-4xl font-bold text-center mb-6">How to Use Linkit</h2>
      <p className="text-center mb-10 text-gray-400 max-w-2xl mx-auto">
        Bookmark management made simple and smart. 
        Follow these steps to organize your browser bookmarks efficiently.
      </p>
      <div className="flex justify-between items-start relative">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <Step 
          number={1} 
          title="Install & Pin" 
          description="Add Linkit to your browser toolbar and access it anytime with Command+B (Mac) or Alt+B (Windows)."
        />
        <Step 
          number={2} 
          title="Create Smart Tags" 
          description="Set up automatic tagging rules to help organize your bookmarks. One rule does the work for you."
        />
        <Step 
          number={3} 
          title="Search & Manage" 
          description="Quickly find any bookmark using search or tags, pin important ones, and keep everything organized."
        />
      </div>
  
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
};