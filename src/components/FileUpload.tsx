import React from 'react';

interface FileUploaderProps {
  onFileUpload: (data: any) => void; // Prop to handle the uploaded file data
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const jsonData = JSON.parse(reader.result as string);
        onFileUpload(jsonData); // Pass the JSON data to MainContainer
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4 mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 ">Upload your rrweb JSON file here:</h2>
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="border border-gray-300 p-2 rounded-lg"
      />
    </div>
  );
};

export default FileUploader;
