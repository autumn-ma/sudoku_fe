// Assuming this is InteractiveElement.client.js
'use client';
const InteractiveElement = ({ id, value}) => {
    // Define the event handler directly within the client component
    const handleClick = () => {
      // Client-side logic, such as modifying styles or attributes
      const element = document.getElementById(id);
      if (element) {
        element.style.opacity = "1";
      }
    };
  
    return (
      <div id={id} onClick={handleClick} className="opacity-0 h-9 hover:cursor-pointer">
        {value}
      </div>
    );
  };
  
  export default InteractiveElement;
  