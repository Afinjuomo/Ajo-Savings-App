import React from 'react'
import { Input } from './Input';
import { ButtonSmall } from './Button';
interface Props{
    children?:React.ReactNode;
    className?: string
}
export const ModalFade:React.FC<Props> = ({children, className ="", ...rest}) => {
  return (
    <div  className={`fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50  ${className}`} {...rest}>
        <div className={`bg-white p-4 rounded-lg shadow-lg max-w-md w-full ${className}`}>
        {children}
        </div>
      
    </div>
  )
}
export const Modal:React.FC<Props> = ({children, className ="", ...rest}) => {
    return (
      <div  className={`  flex justify-center items-cente ${className}`} {...rest}>
          <div className={`bg-white p-4 rounded-lg shadow-lg max-w-md w-full ${className}`}>
          {children}
          </div>
        
      </div>
    )
  }

Modal.defaultProps = {
    children: (
      <div>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Modal</h2>
        </div>
        <label className="block mb-1">Name:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <label className="block mb-1">Description:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <label className="block mb-1">Price:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
    
        <div className="flex justify-end mt-4">
          <ButtonSmall >
            Save
          </ButtonSmall>
          <ButtonSmall className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancel
          </ButtonSmall>
        </div>
      </div>
    ),
  };
  ModalFade.defaultProps = {
    children: (
      <div>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Modal</h2>
        </div>
        <label className="block mb-1">Name:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <label className="block mb-1">Description:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <label className="block mb-1">Price:</label>
        <Input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
    
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save
          </button>
          <button className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    ),
  };