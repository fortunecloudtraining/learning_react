const Accordion = ({ id, title, content }) => {
  return (
    <div className="accordion my-2" id={`accordion-${id}`}>
      <div className="accordion-item">
        
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
          >
            {title}
          </button>
        </h2>

        <div
          id={`collapse-${id}`}
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">{content}</div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;
