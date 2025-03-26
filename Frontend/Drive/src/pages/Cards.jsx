// src/App.js
import React from "react";
import FileCard from "../components/card/Card";

const Cards = () => {
  const files = [
    {
      title: "Document 1",
      description: "This is a sample document.",
      fileType: "docx",
    },
    {
      title: "Presentation",
      description: "A business presentation file.",
      fileType: "pptx",
    },
    {
      title: "Image 1",
      description: "Image file for your reference.",
      fileType: "jpeg",
    },
  ];

  return (
    <div className="h-[250px] bg-gray-100 p-6 flex flex-wrap justify-center gap-6">
      {files.map((file, index) => (
        <FileCard
          key={index}
          title={file.title}
          description={file.description}
          fileType={file.fileType}
        />
      ))}
    </div>
  );
};

export default Cards;
