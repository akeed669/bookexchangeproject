import React from "react";

const FormWrapper = ({ title, children, onSubmit }) => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl p-12 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-6 bg-white p-8 shadow-lg rounded-lg"
      >
        {children}
      </form>
    </div>
  );
};

export default FormWrapper;
