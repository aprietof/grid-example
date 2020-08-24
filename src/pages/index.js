import React from 'react';

function IndexPage() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 border border-red-500 md:w-1/5 square">
        <div className="absolute flex flex-wrap w-full h-full">
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
        </div>
      </div>
      <div className="w-1/2 border border-red-500 md:w-1/5 square">
        <div className="absolute flex flex-wrap w-full h-full">
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
        </div>
      </div>
      <div className="w-full border border-red-500 md:w-1/5 square">
        <div className="absolute flex flex-wrap w-full h-full bg-red-400"></div>
      </div>
      <div className="w-1/2 border border-red-500 md:w-1/5 square">
        <div className="absolute flex flex-wrap w-full h-full">
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
        </div>
      </div>
      <div className="w-1/2 border border-red-500 md:w-1/5 square">
        <div className="absolute flex flex-wrap w-full h-full">
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
          <div className="w-1/2 bg-blue-800 border border-white square"></div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
