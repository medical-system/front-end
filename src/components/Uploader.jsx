import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { PropTypes } from "prop-types";
const Uploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 10000,
    onDrop: (acceptedFiles) => {
      alert(acceptedFiles[0].name);
    },
  });
  return (
    <>
      <div className="px-6 lg:col-span-10 sm:col-span-8 col-span-12 pt-5 pb-6 border-2 border-dashed rounded-md cursor-pointer">
        <div
          {...getRootProps()}
          className="rounded-md cursor-pointer text-center"
        >
          <input {...getInputProps()} />
          <span className="mx-auto items-center flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p className="text-sm mt-2">Drag your image here</p>
          <em className="text-xs text-gray-400">
            (only .jpg and .png files will be accepted)
          </em>
        </div>
      </div>
      <div className="lg:col-span-2 sm:col-span-4 col-span-12">
        <img
          src="http://placehold.it/300x300"
          alt="preview"
          className=" w-full h-32 rounded object-cover"
        />
      </div>
    </>
  );
};

Uploader.propTypes = {
  title: PropTypes.string,
};

export default Uploader;
