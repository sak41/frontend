import React, { useState } from "react";
import { uploadImage } from "../api";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  }

  async function handleUpload() {
    if (!file) return alert("Choose an image first");
    setLoading(true);
    const res = await uploadImage(file);
    setLoading(false);
    if (res) {
      setIngredients(res.ingredients || []);
    } else {
      alert("Upload failed");
    }
  }

  return (
    <div className="bg-white p-6 shadow rounded mt-6">
      <h3 className="text-xl font-semibold mb-4">Upload Ingredients Image</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-48 h-48 object-cover mb-4 rounded"
        />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {ingredients.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Detected Ingredients:</h4>
          <ul className="list-disc ml-6">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;


// import React, { useState } from "react";
// import { uploadImage } from "../api";

// function ImageUpload() {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [ingredients, setIngredients] = useState([]);
//   const [loading, setLoading] = useState(false);

//   function handleFileChange(e) {
//     const selected = e.target.files[0];
//     if (selected) {
//       setFile(selected);
//       setPreview(URL.createObjectURL(selected));
//     }
//   }

//   async function handleUpload() {
//     if (!file) return alert("Choose an image first");
//     setLoading(true);
//     const res = await uploadImage(file);
//     setLoading(false);
//     if (res) {
//       setIngredients(res.ingredients || []);
//     } else {
//       alert("Upload failed");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-6 flex justify-center items-start">
//       <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105 animate-fadeIn">
//         <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center animate-bounce">
//           Upload Ingredients Image
//         </h3>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4 w-full text-gray-700"
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             className="w-48 h-48 object-cover mb-4 rounded-xl mx-auto shadow-lg animate-fadeIn"
//           />
//         )}

//         <button
//           onClick={handleUpload}
//           className="bg-purple-600 text-white px-6 py-2 rounded-xl w-full font-semibold hover:bg-purple-700 transition transform hover:scale-105 mb-4"
//           disabled={loading}
//         >
//           {loading ? "Uploading..." : "Upload"}
//         </button>

//         {ingredients.length > 0 && (
//           <div className="mt-4 animate-fadeIn">
//             <h4 className="font-semibold text-purple-600 mb-2">Detected Ingredients:</h4>
//             <ul className="list-disc ml-6 text-gray-700 space-y-1">
//               {ingredients.map((ing, i) => (
//                 <li key={i}>{ing}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageUpload;
